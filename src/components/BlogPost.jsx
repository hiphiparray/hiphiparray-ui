var React = require('react');
var Http = require('../services/httpservice');

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
        return (<div className="row">
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.body}</p>
            <a className="btn btn-success" href='/#/' role="button">« Back</a>
        </div>);
    }
});

module.exports = BlogPost;
