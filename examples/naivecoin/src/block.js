const SHA256 = require('sha256');

class Block {

    constructor(index, prevHash, data) {
        this.prevHash = prevHash;
        this.timestamp = Math.floor(Date.now() / 1000);
        this.data = data;
        this.index = index;
        this.hash = this.getHash();
    }

    getHash() {
        return SHA256(JSON.stringify(this.data) + this.prevHash + this.index + this.timestamp);
    }
}

module.exports = Block;