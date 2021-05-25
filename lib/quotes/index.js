/*
 * Title: Quote Library
 * Description: This is a simple quote library for quote generator app
 * Author: Faiyaz Rahman
 * Date: 5/25/2021
 */

const fs = require('fs');

const quote = {};

quote.generateQuote = function generateQuote() {
   const readQuotes = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');
   const arrayOfQuotes = readQuotes.split(/\r?\n/);
   return arrayOfQuotes;
};

module.exports = quote;
