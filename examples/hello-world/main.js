class Block {
    constructor(index, data, prevHash) {
        this.index = index;
        this.data = data;
        this.prevHash = prevHash;
        this.timestamp = Math.floor(Date.now() / 1000);
    }

    getHash() {
        return sha(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

class BlockChain {
    constructor() {
        this.chain = [];
    }
}