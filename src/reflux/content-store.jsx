var Http = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var ContentStore = Reflux.createStore({
    listenables: [Actions],
    getHomePage: function () {
        Http.get('/posts')
            .then(function (data) {
                this.content = data;
                this.fireUpdate();
            }.bind(this));
    },
    getBlogPost: function (postId) {
        //console.log('props:', this.props);
        console.log('postId:', postId);
        Http.get('/posts/' + postId)
            .then(function (data) {
                this.content = data;
                //console.log('content:', data);
                this.fireUpdate();
            }.bind(this));
    },
    createBlogPost: function (title, body) {
        //TODO: Posted blog post to server and received successful callback

    },
    getAccessToken: function (username, password) {
        console.log('username:', username);
        console.log('password:', password);

        Http.login('/login_check', username, password)
            .then(function (response) {
                this.token = response;
                //this.fireUpdate();
            }.bind(this));
    },
    //Refresh Function
    fireUpdate: function () {
        this.trigger('change', this.content);
    }
});

module.exports = ContentStore;
