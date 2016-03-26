# Hip Hip Array UI


## Using Skeleton

### Before you start

Ensure browserify is installed globally
```
npm install -g browserify
```

Install dependencies from package.json
```
npm install
```

### Getting started

- Compile jsx `npm start`
- View `public/index.html` in your browser


### Making changes


- View `public/index.html` in your browser to see current output
- In `public/index.html`, change `dependencies` id to `menu` in
- In `src/main.jsx`, change `dependencies` reference to `menu`
- In `src/components/ListItem.jsx`, change `this.props.dependency` to `this.props.page`
- In `src/components/List.jsx`, change `var dependencies` to `var pages`
- In `src/components/List.jsx`, change the `pages` array text values to page names (for example `var pages = [{'id':1, 'text':'Home'},{'id':2, 'text':'Features'},{'id':3, 'text':'Docs'},{'id':4, 'text':'Pricing'},{'id':5, 'text':'Services'},{'id':6, 'text':'Blog'}];`)
- In `src/components/List.jsx`, update `var listItems = dependencies.map` to now reference the pages array (eg. `var listItems = pages.map`)
- In `src/components/List.jsx`, change the `dependency` property to use `page` (eg. before `dependency={item.text}/>;`, after `page={item.text}/>;`)


**View changes**

- Compile jsx `npm start` to update `js/main.js`
- Reload `public/index.html` in your browser



## Creating Skeleton

### Setup package.json

#### Global dependencies

```
npm install -g browserify
```

#### Local dependencies

```
npm init
npm install --save babelify
npm install --save watchify
npm install --save babel-preset-react
npm install --save react
npm install --save react-dom

# React Router keeps your UI in sync with the URL
npm install --save react-router

#The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest
npm install --save whatwg-fetch
```

#### Start script to auto compile jsx

```
"start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
```

#### Example package.json

```json
{
  "name": "react-skeleton",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/mattyhansen/react-skeleton.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/mattyhansen/react-skeleton/issues"
  },
  "homepage": "https://github.com/mattyhansen/react-skeleton#readme",
  "dependencies": {
    "babel-preset-react": "^6.5.0",
    "babelify": "^7.2.0",
    "react": "^0.14.7",
    "react-dom": "^0.14.7",
    "watchify": "^3.7.0"
  }
}
```

### Basic jsx files

#### src/components/ListItem.jsx

```jsx
var React = require('react');
var ListItem = React.createClass({
    render: function() {
        return (
            <li><h4>{this.props.dependency}</h4></li>
        )
    }
});

module.exports = ListItem;

```

#### src/components/List.jsx

```jsx
var React = require('react');
var ListItem = require('./ListItem.jsx');

var dependencies = [{'id':1, 'text':'browserify'},{'id':1, 'text':'babel-preset-react'},{'id':1, 'text':'babelify'},{'id':1, 'text':'react'},{'id':1, 'text':'react-dom'},{'id':1, 'text':'watchify'}];

var List = React.createClass({
    render: function() {
        var listItems = dependencies.map(function(item) {
            return <ListItem key={item.id} dependency={item.text}/>;
        });
        return (<ul>{listItems}</ul>)
    }
});

module.exports = List;
```

#### src/main.jsx

```jsx
var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.jsx');

ReactDOM.render(<List />, document.getElementById('dependencies'));
```

### public/index.html



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React Skeleton</title>
</head>
<body>
<div id="dependencies">

</div>
<script src="js/main.js"></script>
</body>
</html>
```

### public/js/main.js

Create this empty file and it will be populated by the `npm start` script (`watchify`).
