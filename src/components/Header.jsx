var React = require('react');

var Header = React.createClass({
    render: function () {

        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right">
                        <li className="active" role="presentation"><a href="/#/">Home</a></li>
                        <li role="presentation"><a href="/#/login">Login</a></li>
                    </ul>
                </nav>

                <h3 className="text-muted">Hip Hip Array</h3>
            </div>
        );
    }
});

module.exports = Header;
