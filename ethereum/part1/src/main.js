const Web3 =  require('web3');
const Solc = require('solc');
const fs = require('fs')

// Connect to blockchain
const HTTP_BLOCKCHAIN = 'http://localhost:8545';
var web3 = new Web3(new Web3.providers.HttpProvider(HTTP_BLOCKCHAIN));
console.log('=== Accounts ===');
console.log('\n',web3.eth.accounts);

// Compile the contract
var code = fs.readFileSync('Voting.sol').toString();
var compileCode = Solc.compile(code);

// Deploy the contract
var abiDefinition = JSON.parse(compileCode.contracts[':Voting'].interface);
var byteCode = compileCode.contracts[':Voting'].bytecode;
console.log('\n=== ABI ===');
console.log('\n',abiDefinition);
console.log('\n=== Byte Code ===');
console.log('\n',byteCode);