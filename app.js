const request = require('request');

// [NOTE] OVER_QUERY_LIMIT: http://links.mead.io/api-fix
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?&address=young%20st.%20toronto',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body,undefined,2));
});