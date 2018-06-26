const BodyParser = require('body-parser');
const Express = require('express');
const BlockChian = require('./blockchain');

const HTTP_PORT = 3001;
const P2P_PORT = 6001;

var initHttpServer = function (httpPort) {
    const app = Express();
    let blockchain = new BlockChian();

    app.use(BodyParser.json());

    // get all block
    app.get('/blocks', (req, res) => {
        res.send(blockchain.getBlockchain());
    });

    // mine block
    app.post('/mineBlock', (req, res) => {
        let newBlock = blockchain.generateNextBlock(req.body.data);
        res.send(newBlock);
    });

    app.listen(httpPort, function () {
        console.log('Listening http on port : http://localhost:' + httpPort);
    });
}

initHttpServer(HTTP_PORT);