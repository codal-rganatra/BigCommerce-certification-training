const fetch = require('node-fetch');
var fs = require('fs');
require('dotenv').config();
let fetch_data = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v3/content/scripts';
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
    .then((data) => {update_script(data);console.log("Script Update done.");})
    .catch(err => console.error('error:' + err));

function update_script(api_data) {
    fs.readdir('scripts', async (err, folders) => {
        if (err) throw err;
        for (const folder of folders) {
            let all_scripts = api_data.data;
            let script_exist = false;
            for (const script of all_scripts) {
                let scriptname = script.name.split(" ").join("-");
                if (scriptname === folder) {
                    script_exist = true;
                    let url = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v3/content/scripts/' + script.uuid;
                    try {
                        let body = await fs.promises.readFile(`scripts/${folder}/config.json`, 'utf-8');
                        body = JSON.parse(body);

                        let html_content = await fs.promises.readFile(`scripts/${folder}/content.html`, 'utf-8');
                        body.html = html_content;

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
            if (!script_exist) {
                let url = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v3/content/scripts';
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
