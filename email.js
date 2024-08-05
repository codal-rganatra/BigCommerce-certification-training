const fetch = require('node-fetch');
var fs = require('fs');
require('dotenv').config();
//Fetching the data from the portal to get the template types
let fetch_data = `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/marketing/email-templates`;
let options = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN//38b5mh1xc3ng5ckc67adf76z5ygb80g
    }
};

fetch(fetch_data, options)
    .then(response => response.json())
    .then((data) => {update_templates(data);console.log("Templates Update done.");})
    .catch(err => console.error('error:' + err));

//Function to compare and update the templates
function update_templates(api_data) {
    fs.readdir('email-templates', (err, files) => {
        //reading the templates names from local folder and searching it to the portal templates
        files.forEach(file => {
            let filename = file.split('.');
            filename.pop();
            let fname = filename.join(".");
            let all_templates = api_data.data;
            all_templates.forEach(async function(template) {
                let templatetype=template.type_id;
                //Comparing the exact name of the email template type
                if(templatetype==fname){
                    let url = await `https://api.bigcommerce.com/stores/${process.env.STORE_HASH}/v3/marketing/email-templates/` + templatetype;
                    fs.readFile(`email-templates/${file}`, async (err, data) => {
                        let options = {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN
                            },
                            body: JSON.stringify({
                                type_id: template.type_id,
                                subject: template.subject,
                                body: data.toString(),
                                translations: template.translations
                            })
                        };
                        await fetch(url, options)
                            .then(res => res.json())
                            .then((json) => {})
                            .catch(err => console.error('error:' + err));
                    });
                }
            });
        });
    });
}