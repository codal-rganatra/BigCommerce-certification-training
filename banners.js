const fetch = require('node-fetch');
var fs = require('fs');
require('dotenv').config();
let fetch_data = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v2/banners';
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
    .then((data) => { update_banners(data); console.log("Banners Update done."); })
    .catch(err => console.error('error:' + err));

async function update_banners(api_data) {
    fs.readdir('banners', async (err, folders) => {
        if (err) throw err;
        for (const folder of folders) {
            let all_banners = api_data;
            let banner_exist = false;
            for (const banner of all_banners) {
                let bannername = banner.name;
                if (bannername === folder) {
                    banner_exist = true;
                    let url = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v2/banners/' + banner.id;
                    try {
                        let body = await fs.promises.readFile(`banners/${folder}/config.json`, 'utf-8');
                        body = JSON.parse(body);

                        let html_content = await fs.promises.readFile(`banners/${folder}/content.html`, 'utf-8');
                        body.content = html_content;

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
            if (!banner_exist) {
                let url = 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v2/banners';
                try {
                    let body = await fs.promises.readFile(`banners/${folder}/config.json`, 'utf-8');
                    body = await JSON.parse(body);

                    let html_content = await fs.promises.readFile(`banners/${folder}/content.html`, 'utf-8');
                    body.content = html_content;

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
