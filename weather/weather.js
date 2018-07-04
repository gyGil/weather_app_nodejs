const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/[key]/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to darksky.net server');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
};  
  
module.exports.getWeather = getWeather;


// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

// "latitude":43.3931318,
//    "longitude":-80.40960439999999,
//    "timezone":"America/Toronto",
//    "currently":{  
//       "time":1530585479,
//       "summary":"Clear",
//       "icon":"clear-night",
//       "nearestStormDistance":50,
//       "nearestStormBearing":138,
//       "precipIntensity":0,
//       "precipProbability":0,
//       "temperature":69.36,
//       "apparentTemperature":69.58,
//       "dewPoint":61.54,
//       "humidity":0.76,
//       "pressure":1019.31,
//       "windSpeed":4.95,
//       "windGust":9.87,
//       "windBearing":339,
//       "cloudCover":0.12,
//       "uvIndex":0,
//       "visibility":10,
//       "ozone":302.14
//    },
//    "minutely":{  
//       "summary":"Clear for the hour.",
//       "icon":"clear-night",
//       "data":[  
//          {  
//             "time":1530585420,
//             "precipIntensity":0,
//             "precipProbability":0
//          },
//          {  
//             "time":1530585480,
//             "precipIntensity":0,
//             "precipProbability":0
//          },
