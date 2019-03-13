const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://search.naver.com/search.naver?where=nexearch&query=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4&ie=utf8&sm=tab_lve');
const query = querystring.parse(parseUrl.query);

console.log('querystring.parse():', query);

console.log('querystring.stringify():', querystring.stringify(query));