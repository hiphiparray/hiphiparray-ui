var React = require('react');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;

var Blog = require('./components/Blog.jsx');
var BlogPost = require('./components/BlogPost.jsx');
var Secure = require('./components/Secure.jsx');
var Login = require('./components/Login.jsx');



/**
 * This will remove the query key from the url (eg. /index.html#/?_k=8yo97w)
 * see https://github.com/reactjs/react-router/blob/master/upgrade-guides/v2.0.0.md#no-default-history
 */
var History = require('history');
var UseRouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;
var appHistory = UseRouterHistory(CreateHashHistory)({queryKey: false});

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Blog}/>
        <Route path="/blog" component={BlogPost}>
            <Route path="/blog/:postId" component={BlogPost}/>
        </Route>
        <Route path="/login" component={Login}/>
    </Router>
);

module.exports = Routes;
