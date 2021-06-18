const express = require("express");
const account = express.Router();

const accounts = require("../data/accounts.json");
const account1 = require("../data/transactions-1.json");
const account2 = require("../data/transactions-2.json");
const account3 = require("../data/transactions-3.json");
const account4 = require("../data/transactions-4.json");

/* 
Backend: Use the attached static JSON files to represent the data you would expect an API to return. However make sure to build it in such a way that the static responses can
easily be swapped out for a HTTP Web API.
1. /accounts → accounts.json
2. /accounts/1/transactions → transactions-1.json
3. /accounts/2/transactions → transactions-2.json
4. /accounts/3/transactions → transactions-3.json
5. /accounts/4/transactions → transactions-4.json
*/

// GET ALL ACCOUNTS
account.get("/accounts", async (req, res) => {
  try {
    /*
        API can be swapped in here with a fetch or axios call.
        */
    res.status(200).send({
      message: "Request Successful",
      success: true,
      status_code: 200,
      data: accounts,
    });
  } catch (err) {
    res.status(500).send({
      message: "Unable to get accounts information. Please try again.",
      success: false,
      status_code: 500,
    });
  }
});

// GET INDIVIDUAL ACCOUNT LISTINGS, THEN INDIVIDUAL TRANSACTION DETAILS

account.get("/accounts/:id/transactions/:transactionId", async (req, res) => {
  try {
    const accountId = parseInt(req.params.id);
    const transactionId = parseInt(req.params.transactionId);

    console.log("accountid", accountId);
    console.log("transactionid", transactionId);
    let transaction = [];
    if (accountId === 1) {
      transaction = account1.filter(
        (transaction) => transaction.id === transactionId
      );
    } else if (accountId === 2) {
      transaction = account2.filter(
        (transaction) => transaction.id === transactionId
      );
    } else if (accountId === 3) {
      transaction = account3.filter(
        (transaction) => transaction.id === transactionId
      );
    } else if (accountId === 4) {
      transaction = account4.filter(
        (transaction) => transaction.id === transactionId
      );
    }
    res.status(200).send({
      message: "Request Successful",
      success: true,
      status_code: 200,
      data: transaction,
    });
  } catch (err) {
    res.status(500).send({
      message: "Unable to get transaction information. Please try again.",
      success: false,
      status_code: 500,
    });
  }
});

// GET INDIVIDUAL ACCOUNT TRANSACTIONS
account.get("/accounts/:id/transactions", async (req, res) => {
  try {
    /*
        API can be swapped in here with a fetch or axios call.
        */
    const accountId = parseInt(req.params.id);

    const sortTransactions = (arr) => {
      return arr.sort((a, b) => {
        const aDateString = a.transaction_date.slice(0, 19);
        const bDateString = b.transaction_date.slice(0, 19);
        const aDate = new Date(aDateString);
        const bDate = new Date(bDateString);
        return bDate - aDate;
      });
    };
    res.status(200).send({
      message: "Request Successful",
      success: true,
      status_code: 200,
      data:
        accountId === 1
          ? sortTransactions(account1)
          : accountId === 2
          ? sortTransactions(account2)
          : accountId === 3
          ? sortTransactions(account3)
          : sortTransactions(account4),
    });
  } catch (err) {
    res.status(500).send({
      message: "Unable to get transaction information. Please try again.",
      success: false,
      status_code: 500,
    });
  }
});

// GET INDIVIDUAL ACCOUNT DETAILS
account.get("/accounts/:id", async (req, res) => {
  try {
    /*
        API can be swapped in here with a fetch or axios call.
        */
    const accountId = parseInt(req.params.id);
    const individualAccount = accounts.filter(
      (account) => account.id === accountId
    );
    res.status(200).send({
      message: "Request Successful",
      success: true,
      status_code: 200,
      data: individualAccount,
    });
  } catch (err) {
    res.status(500).send({
      message: "Unable to get account information. Please try again.",
      success: false,
      status_code: 500,
    });
  }
});

module.exports = account;
