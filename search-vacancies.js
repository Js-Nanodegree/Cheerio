var request = require('request');
var cheerio = require('cheerio');
var s='https://moikrug.ru'
request( s +'/vacancies?utf8=%E2%9C%93&q=&location=&city_id=&type=all', function (error, response, html) {
if (!error && response.statusCode == 200) {
var $ = cheerio.load(html);

var parsedResults = [];
$('.info').each(function(i, element){
// Select the previous element
var a = $(this).prev();
var titssle = a.parent().html();
const da= cheerio.load(titssle);
var title = da('div [class=title]').text();
var specialization = da('div [class=specialization]').text();
var skills = da('div [class=skills]').text();
var meta = da('div [class=meta]').text();
var salary = da('div [class=salary]').text();
var href = da.root().find('a').attr('href');
var time = a.text();

var metadata = {
title: title,
specialization:specialization,
skills:skills,
meta:meta,
salary:salary,
time:time,
href: s + href,

};
// Push meta-data into parsedResults array
parsedResults.push(metadata);
});
// Log our finished parse results in the terminal
console.log(parsedResults);
}
});