console.log('=== Web3 with NodeJS ===');

const fs = require("fs");
abiDecoder = require('abi-decoder');
Web3 = require('web3');

let provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/");
const web3 = new Web3(provider);

// getBalance
web3.eth.getBalance('0xc5a21d7ba2c1e00d16b1fda0d561db4769ff2dde').then(data => {
    console.log('data : ', data);
});


// getAccounts
web3.eth.getAccounts().then(accounts => {
    console.log('\n=== getAccounts ===');
    accounts.forEach(account => {
        console.log(account)
    })
});