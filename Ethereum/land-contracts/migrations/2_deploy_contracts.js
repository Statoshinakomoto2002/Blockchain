var LandContracts = artifacts.require("./LandContracts.sol");


module.exports = function (deployer) {
    deployer.deploy(LandContracts);
}