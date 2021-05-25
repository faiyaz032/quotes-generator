/*
 * Title: Math Library
 * Description: This is a simple math library for quote generator app
 * Author: Faiyaz Rahman
 * Date: 5/25/2021
 */

const math = {};

math.generateRandomNumber = function generateRandomNumber(x, y) {
   let min = x;
   let max = y;
   min = typeof min === 'number' ? min : 0;
   max = typeof max === 'number' ? max : 0;
   return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = math;
