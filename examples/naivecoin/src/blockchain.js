const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }

    createGenesisBlock() {
        return new Block(0, '', 'Genesis block');
    }

    getLatesBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
    }

    generateNextBlock(data) {
        let index = this.chain.length;
        let prevHash = this.chain.getLatesBlock().hash;
        let block = new Block(index, prevHash, data);
        this.chain.push(block);
    }

    isValidNewBlock(newBlock, prevBlock) {
        if (prevBlock.index + 1 !== newBlock.index) {
            console.log('Invalid index');
            return false;
        }

        if (prevBlock.hash !== newBlock.prevHash) {
            console.log('Invalid prev hash');
            return false;
        }

        if (newBlock.getHash() !== newBlock.hash) {
            console.log('Invalid hash');
            return false;
        }

        return true;
    }

    isValidChain(newChain) {
        for (let i = 1; i < newChain.length; i++) {
            const currentBlock = newChain[i];
            const previousBlock = newChain[i - 1];
            if (!this.isValidNewBlock(currentBlock, previousBlock)) {
                return false;
            }
        }
        return true;
    }

    isValidBlockchainStructure(block) {
        return typeof block.index === 'number' &&
            typeof block.hash === 'string' &&
            typeof block.prevHash === 'string';
    }

    broadcastLatest() {
        console.log('Broadcast ....');
    }

    replaceChain(newChain) {
        if (this.isValidChain(newChain) && newChain.length > this.chain.length) {
            console.log('Recived blockchain is valid, Replacing current blockchain ');
            this.chain = newBlock;
            this.broadcastLatest();
        } else {
            console.log('Received blockchain invalid ');
        }
    }
}

module.exports = Blockchain;