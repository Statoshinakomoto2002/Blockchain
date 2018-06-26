const CryptoJS = require('crypto-js');

class Block {
    constructor(index, hash, prevHash, timestamp, data) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}

class BlockChain {

    constructor() {
        this.blockchain = [this.genesisBlock()];
    }

    // Genesis a block
    genesisBlock() {
        let block = new Block(0, '816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7', null, 1465154705, 'my genesis block!!');
        return block;
    }

    getBlockchain() {
        return this.blockchain;
    }

    // Get lates block
    getLatesBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    // CalculateHash
    calculateHash(index, prevHash, timestamp, data) {
        return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
    }

    calculateHashForBlock(block) {
        return this.calculateHash(block.index, block.prevHash, block.timestamp, block.data);
    }

    // is valid new block
    isValidNewBlock(newBlock, prevBlock) {
        if (prevBlock.index + 1 !== newBlock.index) {
            console.log('Invalid index');
            return false;
        }
        if (prevBlock.hash !== newBlock.prevHash) {
            console.log('Invalid prev hash');
            return false;
        }
        if (this.calculateHashForBlock(newBlock) !== newBlock.hash) {
            console.log('Invalid hash');
            return false;
        }
        return true;
    }

    // Add block
    addBlock(newBlock) {
        if (this.isValidNewBlock(newBlock, this.getLatesBlock())) {
            this.blockchain.push(newBlock);
            return true;
        }
        return false;
    }

    // Generate next block
    generateNextBlock(blockData) {
        let prevBlock = this.getLatesBlock();
        let nextIndex = prevBlock.index + 1;
        let nextTimestamp = new Date().getTime() / 1000;
        let nextHash = this.calculateHash();
        let block = new Block(nextIndex, nextHash, prevBlock.hash, nextTimestamp, blockData);
        this.addBlock(block);
        return block;
    }
}

module.exports = BlockChain;