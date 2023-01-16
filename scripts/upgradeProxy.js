const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x1c2D4033b3b5BC5C7075577aC691AA31afE873B2";

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  const currentContractOwner = await upgraded.owner();

  console.log("The current contract owner is: " + currentContractOwner);
  console.log("Implementation contract address: " + implementationAddress);
}

main();
