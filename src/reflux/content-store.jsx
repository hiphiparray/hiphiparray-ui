var Http = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var ContentStore = Reflux.createStore({
    listenables: [Actions],
    getHomePage: function() {
        Http.get('/posts')
            .then(function (json) {
                this.content = json;
                this.fireUpdate();
            }.bind(this));
    },
    getBlogPost: function(postId) {
        //console.log('props:', this.props);
        console.log('postId:', postId);
        Http.get('/posts/' + postId)
            .then(function (json) {
                this.content = json;
                console.log('content:', json);
                this.fireUpdate();
            }.bind(this));
    },
    createBlogPost: function(title, body) {
        // Posted blog post to server and received successful callback

    },
    //Refresh Function
    fireUpdate: function() {
        this.trigger('change', this.content);
    }
});

module.exports = ContentStore;
