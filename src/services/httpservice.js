var Fetch = require('whatwg-fetch');
// var baseUrl = 'http://localhost:6060';
var baseUrl = 'http://api.hiphiparray.dev/app_dev.php/1.0';

var service = {
    get: function (url) {
        return fetch(baseUrl + url, {})
            .then(function (response) {
                //console.log('RES:', response);
                return response.json();
            });
    },
    login: function (url, username, password) {
        console.log('httpservice: ', JSON.stringify({"_username": username, "_password": password}));
        return fetch(baseUrl + url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({"_username": username, "_password": password})
            // }).then(function (response) {
            //     return response;
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(function (data) {
                //TODO: save token
                console.log('request succeeded with JSON response', data)
            }).catch(function (error) {
                //TODO: show error message
                console.log('request failed', error)
            })
    },
    checkStatus: function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;

        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    },
    parseJSON: function (response) {
        return response.json();
    }
};

module.exports = service;
