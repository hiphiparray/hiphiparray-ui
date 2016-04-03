var React = require('react');
var Http = require('../services/httpservice');
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var ContentStore = require('../reflux/content-store.jsx');

var Login = React.createClass({
    mixins: [Reflux.listenTo(ContentStore, 'onChange')],
    getInitialState: function () {
        return {token: [], username: '', password: ''};
    },
    componentWillMount: function () {
        //Actions.getAccessToken();
    },
    onChange: function(event, data) {
        this.setState({token: data});
    },
    onInputChange: function(name, e) {
        var change = {};
        change[name] = e.target.value;
        console.log('change:', change);
        this.setState(change);
    },
    onClick: function(e) {
        if (this.state.username && this.state.password) {
            console.log('state:', this.state);
            Actions.getAccessToken(this.state.username, this.state.password);
        }
    },
    render: function () {

        return (
            <div>
                <Header />
                <h1>Login</h1>
                <div className='row'>
                    <div className='col-sm-5'>
                        <fieldset className='form-group'>
                            <label>Email address</label>
                            <input className='form-control' placeholder='Username' value={this.state.username}
                                   onChange={this.onInputChange.bind(this, 'username')}/>
                        </fieldset>
                    </div>
                    <div className='col-sm-5'>
                        <fieldset className='form-group'>
                            <label>Password</label>
                            <input className='form-control' placeholder='Password' value={this.state.password}
                                   onChange={this.onInputChange.bind(this, 'password')}/>
                        </fieldset>
                    </div>
                    <div className='col-sm-2 login-btn'>
                        <fieldset className='form-group'>
                            <button className='btn btn-primary' onClick={this.onClick}>Login</button>
                        </fieldset>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = Login;
