const BodyParser = require('body-parser');
const Express = require('express');

const BlockChain = require('./blockchain');
const Transaction = require('./transaction');

const HTTP_PORT = 3001;

var initHttpServer = function (httpPort) {
    const app = Express();
    let blockchain = new BlockChain();

    app.use(BodyParser.json());

    // get all block
    app.get('/blocks', (req, res) => {
        res.send(blockchain.chain);
    });

    // create block
    app.post('/createTransaction', (req, res) => {
        let fromAddress = req.body.fromAddress;
        let toAddress = req.body.toAddress;
        let amount = req.body.amount;
        let flag = blockchain.createTransaction(new Transaction(fromAddress, toAddress, amount));
        let result = {
            code: flag == true ? 200 : 201
        }
        res.send(result);
    });

    // mine block
    app.post('/mineBlock', (req, res) => {
        let newBlock = blockchain.minePendingTransactions(req.body.address);
        res.send(newBlock);
    });

    // get balance
    app.get('/balance/:address', (req, res) => {
        let address = req.params.address;
        let balance = blockchain.getBalanceOfAddress(address);
        let result = {
            code: 200,
            address: address,
            balance: balance
        }
        res.send(result);
    });

    // check chain
    app.get('/isValidChain', (req, res) => {
        let isValidChain = blockchain.isChainValid();
        res.send({
            code: isValidChain === true ? 200 : 201
        });
    });

    app.listen(httpPort, function () {
        console.log('Listening http on port : http://localhost:' + httpPort);
    });
}

initHttpServer(HTTP_PORT);