## Truffle
* Truffle là một framework của Ethereum dùng triển khai các smart contracts
* Installing Truffle
```
$  npm install -g truffle
```
* Check version truffle
```
$ truffle
```

## Starting a project
* To create a new project do the following:
```
$ mkdir hello-world
$ cd hello-world
$ truffle init
```
* After creating the project, we`ll see a basic skeleton app, we can test that everything is working by running the default test:
```
$ truffle test
```

## Creating contracts with Truffle and testing
* Create a new contract, run the command truffle create. It requires the type of item we want to create and the name
```
$ truffle create contract HelloWorld
```

## Migration
* Sử dụng để deploy một contracts
```
$ truffle create migration deploy_hello_world
```