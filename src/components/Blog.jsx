var React = require('react');
var BlogPosts = require('./BlogPosts.jsx');
var Http = require('../services/httpservice');


var Blog = React.createClass({
    getInitialState: function () {
        return {posts: []};
    },
    componentWillMount: function () {
        Http.get('/posts')
            .then(function (data) {
                console.log('data:', data);
                // setState will cause the render function to be called
                this.setState({posts: data});
            }.bind(this));
    },
    render: function () {
        var blogPosts = this.state.posts.map(function (post) {
            return <BlogPosts key={post.id} id={post.id} title={post.title} summary={post.summary}/>;
        });
        return (<div className="row">{blogPosts}</div>);
    }
});

module.exports = Blog;
