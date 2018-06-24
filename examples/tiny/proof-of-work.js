const SHA256 = require('sha256');

class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
        this.nonce = 0;
    }

    getHash() {
        return SHA256(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp + this.nonce);
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

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0, "Genesis block", "0");
    }

    getLatesBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.prevHash = this.getLatesBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
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
CILCoin.addBlock(new Block(1, { amount: 4 }, ''));
CILCoin.addBlock(new Block(2, { amount: 8 }, ''));

console.log(JSON.stringify(CILCoin, null, 4));

// Check chain
// Step 1: True
console.log("Validity: ", CILCoin.chainIsValid());
// Setp 2: False
CILCoin.chain[1].data = { amount: 100 };
console.log('Validity: ', CILCoin.chainIsValid());