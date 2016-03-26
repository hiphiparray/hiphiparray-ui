var Fetch = require('whatwg-fetch');
// var baseUrl = 'http://localhost:6060';
var baseUrl = 'http://api.hiphiparray.dev/1.0';

var service = {

    get: function (url) {
        return fetch(baseUrl + url, {})
            .then(function (response) {
                console.log('RES:', response);
                return response.json();
            });
    },
    //post:
};

module.exports = service;
