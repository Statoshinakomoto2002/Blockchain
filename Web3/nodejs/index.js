console.log('=== Web3 with NodeJS ===');

const fs = require("fs");
abiDecoder = require('abi-decoder');
Web3 = require('web3');

let provider = new Web3.providers.HttpProvider("http://localhost:7545");
const web3 = new Web3(provider);

// getAccounts
web3.eth.getAccounts().then(accounts => {
    console.log('\n=== getAccounts ===');
    accounts.forEach(account => {
        console.log(account)
    })
});


// getCoinbase
web3.eth.getCoinbase().then(coin => {
    console.log('\n=== getCoinbase ===');
    console.log('getCoinbase : ', coin);
});


// isMining
web3.eth.isMining().then(status => {
    console.log('\n=== isMining ===');
    console.log('isMining : ', status);
});


// getHashrate
web3.eth.getHashrate().then(rate => {
    console.log('\n=== getHashrate ===');
    console.log('getHashrate : ', rate);
});


// getGasPrice
web3.eth.getGasPrice().then(gasPrice => {
    console.log('\n=== getGasPrice ===');
    console.log('getGasPrice : ', gasPrice);
});

// getBlockNumber
web3.eth.getBlockNumber().then(number => {
    console.log('\n=== getBlockNumber ===');
    console.log('getBlockNumber : ', number);
});

// getBalance
web3.eth.getBalance('0x5c92E797067d847B33e1F0fFd3507ef0a3A0F202').then(blance => {
    console.log('\n==== getBalance ===');
    console.log('getBalance : ', blance);
});


// getStorageAt
// ('address',position)
web3.eth.getStorageAt('0x5c92E797067d847B33e1F0fFd3507ef0a3A0F202', 4).then(data => {
    console.log('\n=== getStorageAt ===');
    console.log('getStorageAt : ', data);
});


// getCode
web3.eth.getCode('0x5c92E797067d847B33e1F0fFd3507ef0a3A0F202').then(code => {
    console.log('\n=== getCode ===');
    console.log('getCode : ', code);
});


// getBlock
// Tra ve mot block phu hop voi block number or block hash
web3.eth.getBlock(0).then(block => {
    console.log('\n=== getBlock ===');
    console.log('getBlock : ', block);
});


// getBlockTransactionCount
// Tra ve so transaction trong in block
web3.eth.getBlockTransactionCount(0).then(number => {
    console.log('\n=== getBlockTransactionCount ===');
    console.log('getBlockTransactionCount : ', number);
});


// getUncle block
// Dau vao co the la block hash or block number and positon block uncle. Tra ve block uncle ben trong
// mot block
// web3.eth.getUncle(500,0).then(uncle => {
//     console.log('\n=== getUncle ===');
//     console.log('getUncle : ', uncle);
// });


// getTransaction
// web3.eth.getTransaction(transactionHash).then( tx => {
//     console.log('TX : ', tx);
// });


// getTransactionFromBlock
// web3.eth.getTransactionFromBlock(hashStringOrNumber, indexNumber).then(tx => {
// });


// getTransactionReceipt
// web3.eth.getTransactionReceipt(hash).then(data => {
// });


// getTransactionCount
// Lay ve so transactions duoc gui tu dia chi address
// web3.eth.getTransactionCount(address).then(data => {
// });

