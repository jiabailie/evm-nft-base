import { ethers } from "hardhat";

async function main() {
  console.log("Deploying contract...");
  const [signer] = await ethers.getSigners();
  const pfpFactory = await ethers.getContractFactory("PFP");
  const pfp = await pfpFactory.deploy(signer.address);

  await pfp.waitForDeployment();
  const contractAddress = await pfp.getAddress();

  console.log("✅ PFP contract deployed to:", contractAddress);
  
  // Get network info to determine the correct explorer
  const network = await ethers.provider.getNetwork();
  const chainId = network.chainId;
  
  let explorerUrl = "";
  if (chainId === 8453n) {
    explorerUrl = "https://basescan.org";
  } else if (chainId === 84532n) {
    explorerUrl = "https://sepolia.basescan.org";
  } else if (chainId === 11155111n) {
    explorerUrl = "https://sepolia.etherscan.io";
  } else if (chainId === 1n) {
    explorerUrl = "https://etherscan.io";
  } else {
    explorerUrl = "https://etherscan.io";
  }
  
  console.log(`🔗 Block explorer: ${explorerUrl}/address/${contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 