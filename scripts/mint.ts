import { ethers } from "hardhat";

// sepolia testnet
// npx hardhat run scripts/deploy.ts --network sepolia
// npx hardhat run scripts/mint.ts --network sepolia

// mainnet
// npx hardhat run scripts/deploy.ts --network mainnet
// npx hardhat run scripts/mint.ts --network mainnet

// base sepolia testnet
// npx hardhat run scripts/deploy.ts --network baseSepolia
// npx hardhat run scripts/mint.ts --network baseSepolia

// base
// npx hardhat run scripts/deploy.ts --network base
// npx hardhat run scripts/mint.ts --network base

// !!! IMPORTANT !!!
// 1. Run the `deploy.ts` script first.
// 2. Paste the deployed contract address here.
const CONTRACT_ADDRESS = "0xBA6fb14E916586cCd54690a75b50e022699F0209";

async function main() {
  const [signer] = await ethers.getSigners();
  const pfp = await ethers.getContractAt("PFP", CONTRACT_ADDRESS, signer);

  // You have already updated these URIs with your actual metadata
  const metadataURIs = [
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreigrzvfuajlotgtvt3qspwslyvaj42a5wjuf5pnixtrthgewzg7c4q", // 0
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreifei7p2utpkrpnikwdi4ss3r7hqovwdwgd74l55an6jipqeem457u", // 1
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreifzvsawvtultxqiskz5zdo4f72wbp2ka7rs4g66iuo5kg7r52dht4", // 2
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreif3w5qjt56xvfktvkogcy63cuiszfszrn3zwukyqqp32vyakrl4na", // 3
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreihdilx4figyo4bti7p7ntzhaulszgfa4rook3sjfme7m3evtql6ta", // 4
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreih43xtmoxblv2yrjyrpevgohdcscmavpfggi2yq77jykyk4o5dwj4", // 5
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreic272aqezy5gw5bdokt2fapoyokhawcwlnu3dg6tjbcjcllpoule4", // 6
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreihbfdragfozcg5yrmgeznockntn7ig7mdwpijrhqvyc3yvrbighi4", // 7
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreie5jzvwpzwam6rm36bm3kombqy7atdggn2o54obszgsbltls36axe", // 8
    "https://coral-occupational-dragonfly-495.mypinata.cloud/ipfs/bafkreiha5uwcx3cl4hlsb4dl6ejlzturu3dul32dwpe34wvddasrakqniq", // 9
  ];

  console.log(`Minting NFTs to contract: ${CONTRACT_ADDRESS}`);

  for (let i = 0; i < metadataURIs.length; i++) {
    const tokenURI = metadataURIs[i];
    console.log(`Minting token ${i} with URI: ${tokenURI}`);
    const tx = await pfp.safeMint(signer.address, tokenURI);
    await tx.wait();
    console.log(`✅ Minted NFT #${i}`);
  }

  console.log("\n🎉 All NFTs minted successfully!");
  const totalSupply = await pfp.totalSupply();
  console.log(`Total supply is now: ${totalSupply}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 