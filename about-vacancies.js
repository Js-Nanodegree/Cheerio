var request = require('request');
var cheerio = require('cheerio');
var s='https://moikrug.ru/vacancies/1000031728'
request( s, function (error, response, html) {
if (!error && response.statusCode == 200) {

var $ = cheerio.load(html);
var aa = $('.left').html();
var da = cheerio.load(aa);

var title = da('div [class=title]').text();
var specialization = da('div [class=specialization]').text();
var skills = da('div [class=skills]').html();
var meta = da('div [class=ready_to_remote]').text();
var salary = da('div [class=salary]').text();
// var href = da.find('a').attr('href');
var vacancy_description=da('div [class=vacancy_description]').html();

 var qa = $('.section').html();
 var ca = cheerio.load(qa);

 var cn = ca('div [class=company_name]').text();
 var cab = ca('div [class=company_about]').text();
 var cs = ca('div [class=company_site]').text();
var img = ca.root().find('img').attr('src');


var metadata = {
title: title,
specialization:specialization,
skills:skills,
meta:meta,
salary:salary,
// time:time,
// href: href,
vacancy_description:vacancy_description,
cn:cn,
cab:cab,
cs:cs,
img:img,

};
// Push meta-data into parsedResults array
}
// Log our finished parse results in the terminal
console.log(metadata);

});