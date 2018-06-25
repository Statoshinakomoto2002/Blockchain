const Block = require('./block');
const Blockchain = require('./blockchain');

var blockchain = new Blockchain();
console.log('=== Blockchain ===');
console.log(JSON.stringify(blockchain, null, 4));