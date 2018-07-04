## Note
* Install get - the client software used to download the blockchain and run Ethereum node on your local machine
* Install Truffle which will be used for compiling and deploying our contract

## Install geth and sysnc the blockchain
* On Ubuntu
```
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository -y ppa:ethereum/ethereum
$ sudo apt-get update
$ sudo apt-get install ethereum
```
* Run the below command in your command line console
```
$ geth --rinkeby --syncmode "fast" --rpc --rpcapi db,eth,net,web3,personal --cache=1024  --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*"
```
* Install the Truffle Framework
```
$ npm install -g truffle
```

## Ref
* https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-2-30b3d335aa1f