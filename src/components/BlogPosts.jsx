var React = require('react');

var BlogPosts = React.createClass({
    render: function () {

        // default blog post width is 4/12
        var blogPostClass = 'col-md-4';
        var buttonClass = 'btn btn-default';
        var buttonText = 'View details »';
        // make the first blog post full width
        if (this.props.id == 1) {
            blogPostClass = 'col-md-12 jumbotron';
            buttonClass = 'btn btn-primary';
            buttonText = 'Learn more »';
        }

        // the first blog post gets an h1 title
        return (
            <div className={blogPostClass}>
                {this.props.id == 1 ? (<h1>{this.props.title}</h1>) : <h4>{this.props.title}</h4>}
                {this.props.summary}
                <br/>
                <a className={buttonClass} href={'/#/blog/' + this.props.id} role="button">{buttonText}</a>
                <br/><br/>
            </div>
        );
    }
});

module.exports = BlogPosts;
