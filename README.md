# Hip Hip Array UI



### Getting started

WIP


### Global dependencies

```
npm install -g browserify
```

### Dependencies


babelify
```
npm install --save babelify
```

watchify
```
npm install --save watchify
```

babel-preset-react
```
npm install --save babel-preset-react
```

react
```
npm install --save react
```

react-dom
```
npm install --save react-dom
```


 React Router keeps your UI in sync with the URL
```
npm install --save react-router
```


The global fetch function is an easier way to make web requests and handle responses than using an XMLHttpRequest
```
npm install --save whatwg-fetch
```

Reflux
```
npm install --save reflux
```


### Start script to auto compile jsx

```
"start": "watchify src/main.jsx -v -t [ babelify --presets [ react ] ] -o public/js/main.js",
```
