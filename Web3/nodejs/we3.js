/*
* Web3
* Cac class trong Web3
* > Web3.utils
* > Web3.version
* > Web3.givders
* > Web3.modules
*/
var Web3 = require('web3');
console.log('> Web3 class : ', Web3);

/*
* Web3.modules
* Cac thuoc tinh cua Web3.modules
* > Eth - Function: modules de tuong tac voi mang Ethereum
* > Net - Function: mudules de tuong tac voi cac properties trong mang Ethereum
* > Personal - Function: modules de tuong tac voi account trong he thong Ethereum
* > Shh - Function: modules de tuong tac voi giao thuc mang
* > Bzz - Function: modules de tuong tac voi swarm network
*/
var modules = Web3.modules;
console.log('> Web3 modules : ', modules);

/*
* web3 object
* Chuyen Web3 to mot doi tuong khac
* var Web3 = require('web3');

* // "Web3.providers.givenProvider" will be set if in an Ethereum supported browser.
* var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

* > web3.eth
* > web3.shh
* > web3.bzz
* > web3.utils
* > web3.version
 */
var web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
console.log('> web3 object : ', web3);

/**
 * version
 * > tra version cua phien ban web3 dang su dung
 */
 console.log('> version : ',web3.version);