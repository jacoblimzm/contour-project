const express = require("express");
const account = express.Router();

const accounts = require("../data/accounts.json")
const account1 = require("../data/transactions-1.json")
const account2 = require("../data/transactions-2.json")
const account3 = require("../data/transactions-3.json")
const account4 = require("../data/transactions-4.json")

/* 
Backend: Use the attached static JSON files to represent the data you would expect an API to return. However make sure to build it in such a way that the static responses can
easily be swapped out for a HTTP Web API.
1. /accounts → accounts.json
2. /accounts/1/transactions → transactions-1.json
3. /accounts/2/transactions → transactions-2.json
4. /accounts/3/transactions → transactions-3.json
5. /accounts/4/transactions → transactions-4.json
*/


module.exports = account