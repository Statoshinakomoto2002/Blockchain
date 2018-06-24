const SHA256 = require('sha256');

class Block {
    constructor(timestamp, transactions, prevHash) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.prevHash = prevHash;
        this.hash = this.getHash();
        this.nonce = 0;
    }

    getHash() {
        return SHA256(JSON.stringify(this.transactions) + this.prevHash + this.timestamp + this.nonce);
    }

    mineBlock(difficulty) {
        let hashSubStr = this.hash.substring(0, difficulty);
        let hashTmp = Array(difficulty + 1).join("0");
        while (hashSubStr !== hashTmp) {
            hashSubStr = this.hash.substring(0, difficulty);
            hashTmp = Array(difficulty + 1).join("0");
            this.nonce++;
            this.hash = this.getHash();
        }
        console.log('BLOCK MINE : ' + this.hash);
    }
}

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;

        this.pendingTransactions = [];
        this.minigReward = 100;
    }

    createGenesisBlock() {
        return new Block(0, "Genesis block", "0");
    }

    getLatesBlock() {
        return this.chain[this.chain.length - 1];
    }

    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    minePendingTransactions(miningRewarAddress) {
        let block = new Block(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        this.chain.push(block);
        this.pendingTransactions = [new Transaction(null, miningRewarAddress, this.minigReward)];
    }

    getBalanceOfAddress(address) {
        let balance = 0;
        for (const block of this.chain) {
            for (const trans of block.transactions) {
                if (trans.fromAddress === address) {
                    balance -= trans.amount;
                }
                if (trans.toAddress === address) {
                    balance += trans.amount;
                }
            }
        }
        return balance;
    }

    chainIsValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.getHash()) {
                return false;
            }

            if (currentBlock.prevHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

// Demo CILCoin
var CILCoin = new BlockChain();
console.log('Creating some transactions ...');
CILCoin.createTransaction(new Transaction('address1', 'address2', 100));
CILCoin.createTransaction(new Transaction('address2', 'address1', 50));
console.log(JSON.stringify(CILCoin, null, 4));

// Miner
console.log('Starting the miner ...');
CILCoin.minePendingTransactions('xaviers-address');
console.log('Balance of Xaviers address is', CILCoin.getBalanceOfAddress('xaviers-address'));
console.log('Starting the miner: ', JSON.stringify(CILCoin, null, 4));

console.log('\n Starting the miner again...');
CILCoin.minePendingTransactions('xaviers-address');
console.log('\nBalance of xavier is', CILCoin.getBalanceOfAddress('xaviers-address'));
console.log('Starting the miner again: ', JSON.stringify(CILCoin, null, 4));


