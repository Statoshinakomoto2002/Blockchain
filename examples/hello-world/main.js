const SHA256 = require('sha256');

class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.getHash();
    }

    getHash() {
        return SHA256(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

class BlockChain {
    constructor() {
        this.chain = [];
    }

    addBlock(data) {
        let index = this.chain.length;
        let prevHash = this.chain.length !== 0 ? this.chain[this.chain.length - 1].hash : 0;
        let block = new Block(index, data, prevHash);
        this.chain.push(block);
    }

    chainIsValid() {
        for (let i = 0; i < this.chain.length; i++) {
            if (this.chain[i].hash != this.chain[i].getHash()) {
                console.log('Hash is\'t valid');
                return false;
            }
            if (i > 0 && this.chain[i].prevHash != this.chain[i - 1].hash) {
                console.log('Prev hash is\'t valid');
                return false;
            }
        }
        return true;
    }
}

// Demo CILCoin
var CILCoin = new BlockChain();
CILCoin.addBlock({ sender: "Bruce wayne", reciver: "Tony stark", amount: 100 });
4
CILCoin.addBlock({ sender: "Harrison wells", reciver: "Han solo", amount: 50 });
5
CILCoin.addBlock({ sender: "Tony stark", reciver: "Ned stark", amount: 75 });
// console.log(JSON.stringify(CILCoin, null, 4));

// Check chain
// Step 1: True
console.log("Validity: ", CILCoin.chainIsValid());
// Setp 2: False
CILCoin.chain[0].data.reciver = "Joker";
console.log('Validity: ', CILCoin.chainIsValid());