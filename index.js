const fetch = require('node-fetch');
var fs = require('fs');
require('dotenv').config();
let fetch_data = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v3/content/scripts';
let options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN
    }
};

fetch(fetch_data, options)
    .then(response => response.json())
    .then(data => update_script(data))
    .catch(err => console.error('error:' + err));

function update_script(api_data) {
    fs.readdir('scripts', (err, files) => {
        files.forEach(file => {
            let filename = file.split('.');
            filename.pop();
            let fname = filename.join(".");
            let scripts = api_data.data;
            scripts.forEach(async function(script) {
                console.log(script);
                let scriptname=script.name.split(" ").join("-");
                if(scriptname==fname){
                    let url = await 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v3/content/scripts/' + script.uuid;
                    fs.readFile(`scripts/${file}`, async (err, data) => {
                        // console.log(data.toString());
                        let options = {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN
                            },
                            body: `{"name":"${script.name}","description":"${script.description}","html":"${data.toString()}","auto_uninstall":${script.auto_uninstall},"load_method":"${script.load_method}","location":"${script.location}","visibility":"${script.visibility}","kind":"${script.kind}","consent_category":"${script.consent_category}"}`
                        };
                        await fetch(url, options)
                            .then(res => res.json())
                            .then(json => console.log(json))
                            .catch(err => console.error('error:' + err));
                    });
                }
            });
        });
    });
}
