const { ethers, upgrades } = require("hardhat");
require("dotenv").config;

const proxyAddress = process.env.PROXY_ADDRESS;

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory("VendingMachineV3");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  const currentContractOwner = await upgraded.owner();

  console.log("The current contract owner is: " + currentContractOwner);
  console.log("Implementation contract address: " + implementationAddress);
}

main();
