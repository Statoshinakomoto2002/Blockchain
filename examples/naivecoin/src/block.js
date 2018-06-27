const SHA256 = require('crypto-js/SHA256');

class Block {
    constructor(timestamp, transactions, prevHash) {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.prevHash = prevHash;
        this.hash = this.getHash();
        this.nonce = 0;
    }

    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.getHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }
}


module.exports = Block;