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
    .then((data) => {update_templates(data);console.log("Banners Update done.");})
    .catch(err => console.error('error:' + err));

function update_templates(api_data) {
    fs.readdir('banners', (err, files) => {
        files.forEach(file => {
            let filename = file.split('.');
            filename.pop();
            let fname = filename.join(".");
            let all_banners = api_data;
            all_banners.forEach(async function(banner) {
                let bannername=banner.name.split(" ").join("-");
                if(bannername==fname){
                    let url = await 'https://api.bigcommerce.com/stores/rzsjv8ad5x/v2/banners/' + banner.id;
                    fs.readFile(`banners/${file}`, async (err, data) => {
                        let options = {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'X-Auth-Token': process.env.BIGCOMMERCE_API_TOKEN
                            },
                            body: JSON.stringify({
                                name: banner.name,
                                content: data.toString(),
                                page: banner.page,
                                location: banner.location,
                                date_type: banner.date_type,
                                visible: banner.visible,
                                item_id: banner.item_id,
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