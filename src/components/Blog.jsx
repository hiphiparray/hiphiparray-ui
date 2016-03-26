var React = require('react');
var Http = require('../services/httpservice');
var BlogPosts = require('./BlogPosts.jsx');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');


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
