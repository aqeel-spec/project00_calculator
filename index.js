"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
console.log('------------  ** Project00-calculator ** ------------------');
var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name',
        validate: function (answers) {
            if (answers === '') {
                return "Please enter valid name you cannot leave it empty ";
            }
            return true;
        }
    },
    {
        type: 'number',
        name: 'userInpt1',
        message: 'Please enter 1st number (any number): ',
        validate: function (answers) {
            if (isNaN(answers)) {
                return 'Please enter valid number';
            }
            return true;
        }
    },
    {
        type: 'number',
        name: 'userInpt2',
        message: 'Please enter 2st number : ',
        validate: function (answers) {
            if (isNaN(answers)) {
                return 'Please enter valid number';
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'operation',
        choices: ['+', '-', '*', '/'],
        message: 'Pic the action you want to perform '
    }
];
inquirer_1["default"]
    .prompt(questions)
    .then(function (answers) {
    var name = answers.name;
    var userInpt1 = answers.userInpt1;
    var userInpt2 = answers.userInpt2;
    var opt2 = answers.operation;
    var optl = function (syml) {
        if (syml === '+') {
            return userInpt1 + userInpt2;
        }
        else if (syml === '-') {
            return userInpt1 - userInpt2;
        }
        else if (syml === '*') {
            return userInpt1 * userInpt2;
        }
        else if (syml === '/') {
            return userInpt1 / userInpt2;
        }
    };
    console.log("Dear ".concat(name, " Your Output is : ").concat(optl(opt2), " "));
});
