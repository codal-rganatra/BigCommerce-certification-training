const fetch = require('node-fetch');
var fs = require('fs');
require('dotenv').config();
//The scripts added act as third party scripts in the portal and cannot be directly edited in the portal, it must be updated from here only
//Fetching the data from the portal to get the dynamic uuids
let fetch_data = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/content/scripts`;
let options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN //"38b5mh1xc3ng5ckc67adf76z5ygb80g"
    }
};

fetch(fetch_data, options)
    .then(response => response.json())
    .then((data) => { update_script(data); console.log("Script Update done."); })
    .catch(err => console.error('error:' + err));

//Function to compare and update the scripts
function update_script(api_data) {
    fs.readdir('scripts', async (err, folders) => {
        if (err) throw err;
        for (const folder of folders) {
            //reading all the folders and comparing it from the portal
            let all_scripts = api_data.data;
            let script_exist = false;
            for (const script of all_scripts) {
                //reading the script names from portal and comparing to our folder name
                let scriptname = script.name;
                if (scriptname === folder) {
                    //if the script name is same then mark the flag as true and fetch the uuid if the respective script
                    script_exist = true;
                    let url = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/content/scripts/` + script.uuid;
                    try {
                        //fetching the configurations for the request
                        let body = await fs.promises.readFile(`scripts/${folder}/config.json`, 'utf-8');
                        body = JSON.parse(body);
                        //fetching the html content for the request and appending it to the configurations
                        let html_content = await fs.promises.readFile(`scripts/${folder}/content.html`, 'utf-8');
                        body.html = html_content;
                        //Updating the script with a PUT request
                        let options = {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN //"38b5mh1xc3ng5ckc67adf76z5ygb80g"
                            },
                            body: JSON.stringify(body)
                        };
                        let response = await fetch(url, options);
                        let json = await response.json();
                        console.log(json);
                    } catch (error) {
                        console.error('Error reading files or fetching data:', error);
                    }
                }
            }
            //if the script is not found then make a POST request and add that files
            if (!script_exist) {
                let url = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/content/scripts`;
                try {
                    let body = await fs.promises.readFile(`scripts/${folder}/config.json`, 'utf-8');
                    body = await JSON.parse(body);

                    let html_content = await fs.promises.readFile(`scripts/${folder}/content.html`, 'utf-8');
                    body.html = html_content;

                    let options = {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                            'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN //"38b5mh1xc3ng5ckc67adf76z5ygb80g"
                        },
                        body: JSON.stringify(body)
                    };
                    let response = await fetch(url, options);
                    let json = await response.json();
                    console.log(json);
                } catch (error) {
                    console.error('Error reading files or fetching data:', error);
                }
            }
        }
    });
}
