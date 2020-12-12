

const request = require('request');

request.get('http://api.turinglabs.net/api/v1/jd/farm/create/sadfasdfasdda52dc6119c33a6/', (err, res, body) => {
    let data = JSON.parse(body);
    console.log(body);
    // console.log(body['message'])
    // console.log(data)
    // console.log(data.message)
    console.log(`===>${data.message}`)
})
