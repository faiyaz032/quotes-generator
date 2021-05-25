/*
 * Title: Quote Generator
 * Description: This is a simple quote generator app built in node.js
 * Author: Faiyaz Rahman
 * Date: 5/25/2021
 */

const mathLibrary = require(`${__dirname}/lib/math`);
const quotesLibrary = require(`${__dirname}/lib/quotes`);

const app = {};

app.config = {
   timeBeetweenQuotes: 2000,
};

app.printQuotes = function printQuotes() {
   const allQuotes = quotesLibrary.generateQuote();
   const numberOfQuotes = allQuotes.length;
   const randomNumber = mathLibrary.generateRandomNumber(1, numberOfQuotes);
   console.log(allQuotes[randomNumber - 1]);
};

app.indifiniteQuoteLoop = function indifiniteQuoteLoop() {
   setInterval(this.printQuotes, app.config.timeBeetweenQuotes);
};

app.indifiniteQuoteLoop();
