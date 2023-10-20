// import big module
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const docMaker = require('./mod/docMaker');
queryString.parse()

// import contentType
let cssContent = require('./mod/cssContent.js');
let htmlContent = require('./mod/htmlContent.js');

//make doc 
let maindoc = docMaker('main', 'test');
// fnc check method and url
console.log(typeof(http.IncomingMessage)) //function
console.log(typeof(http.createServer()))  // object
console.log(typeof(http.createServer))    // function
console.log(URLSearchParams)
console.log(require('url').URLSearchParams)