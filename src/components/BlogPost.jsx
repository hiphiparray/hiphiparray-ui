var React = require('react');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ContentStore = require('../reflux/content-store.jsx');

var BlogPost = React.createClass({
    mixins: [Reflux.listenTo(ContentStore, 'onChange')],
    getInitialState: function () {
        return {post: []};
    },
    componentWillMount: function () {
        Actions.getBlogPost(this.props.params.postId);
    },
    onChange: function(event, data) {
        this.setState({post: data});
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
