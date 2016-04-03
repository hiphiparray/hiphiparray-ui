var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getHomePage',
    'getBlogPost',
    'createBlogPost',
    'getAccessToken'
]);

module.exports = Actions;
