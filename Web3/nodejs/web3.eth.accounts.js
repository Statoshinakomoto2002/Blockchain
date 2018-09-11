var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

/**
 * Create account
 */
// var account = web3.eth.accounts.create();
// console.log('Account : ', account);

var wallet = web3.eth.wallet;
console.log('Wallet  : ', wallet);