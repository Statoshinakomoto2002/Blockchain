const Block = require('./block');
const Transaction = require('./transaction');

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
        try {
            this.pendingTransactions.push(transaction);
            return true;
        } catch (err) {
            console.log('Err function createTransaction : ', err);
            return false;
        }
    }

    minePendingTransactions(miningRewarAddress) {
        let block = new Block(Date.now(), this.pendingTransactions, this.getLatesBlock().hash);
        block.mineBlock(this.difficulty);

        this.chain.push(block);
        this.pendingTransactions = [new Transaction(null, miningRewarAddress, this.minigReward)];
        return block;
    }

    getBalanceOfAddress(address) {
        let balance = 0;
        console.log(this.chain);
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

    isChainValid() {
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

module.exports = BlockChain;