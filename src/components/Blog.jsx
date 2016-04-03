var React = require('react');
var Http = require('../services/httpservice');
var BlogPosts = require('./BlogPosts.jsx');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ContentStore = require('../reflux/content-store.jsx');

var Blog = React.createClass({
    mixins: [Reflux.listenTo(ContentStore, 'onChange')],
    getInitialState: function () {
        return {posts: []};
    },
    componentWillMount: function () {
        Actions.getHomePage();
    },
    onChange: function(event, data) {
        this.setState({posts: data});
    },
    render: function () {
        var blogPosts = this.state.posts.map(function (post) {
            return <BlogPosts key={post.id} id={post.id} title={post.title} summary={post.summary}/>;
        });
        return (
            <div>
                <Header />
                <div className="row">{blogPosts}</div>
                <Footer />
            </div>
        );
    }
});

module.exports = Blog;
