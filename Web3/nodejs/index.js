console.log('=== Web3 with NodeJS ===');

const fs = require("fs");
abiDecoder = require('abi-decoder');
Web3 = require('web3');

let provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider);
web3.eth.getAccounts().then(accounts => {
    accounts.forEach(account => {
        console.log(account)
    })
});