var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'getHomePage',
    'getBlogPost',
    'createBlogPost'
]);

module.exports = Actions;
