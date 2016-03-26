var React = require('react');
var Http = require('../services/httpservice');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var BlogPost = React.createClass({
    getInitialState: function () {
        return {post: []};
    },
    componentWillMount: function () {
        //console.log('props:', this.props);
        Http.get('/posts/' + this.props.params.postId)
            .then(function (data) {
                //console.log('data:', data);
                // setState will cause the render function to be called
                this.setState({post: data});
            }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="jumbotron">
                        <h1>{this.state.post.title}</h1>
                    </div>
                    <p>{this.state.post.body}</p>
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = BlogPost;
