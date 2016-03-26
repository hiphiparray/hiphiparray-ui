var React = require('react');

var BlogPosts = React.createClass({
    render: function () {

        /**
         * The first blog post gets an h1 title
         */
        if (this.props.id == 1) {
            return (
                <div className='col-md-12 jumbotron'>
                    <h1>{this.props.title}</h1>
                    {this.props.summary}
                    <br/>
                    <a className='btn btn-primary' href={'/#/blog/' + this.props.id} role="button">Learn more &raquo;</a>
                    <br/><br/>
                </div>
            );
        }

        // default blog post width is 4/12
        return (
            <div className='col-md-4'>
                <h4>{this.props.title}</h4>
                {this.props.summary}
                <br/>
                <a className='btn btn-default' href={'/#/blog/' + this.props.id} role="button">View details &raquo;</a>
                <br/><br/>
            </div>
        );
    }
});

module.exports = BlogPosts;
