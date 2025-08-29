# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

# Tool chain
- IPFS ([Pinata](https://app.pinata.cloud/ipfs/groups))
- Wallet (MetaMask)
- NFT Contract (ERC-721)
- Fund wallet with free ETH: [Alchemy Faucets](https://www.alchemy.com/faucets/ethereum-sepolia)
- RPC Url: [Infura](https://developer.metamask.io/)
- Test: SEPOLIA
- Prod: mainnet

# Usage

```sh
# sepolia testnet
npx hardhat run scripts/deploy.ts --network sepolia
npx hardhat run scripts/mint.ts --network sepolia

# mainnet
npx hardhat run scripts/deploy.ts --network mainnet
npx hardhat run scripts/mint.ts --network mainnet

# base sepolia testnet
npx hardhat run scripts/deploy.ts --network baseSepolia
npx hardhat run scripts/mint.ts --network baseSepolia

# base
npx hardhat run scripts/deploy.ts --network base
npx hardhat run scripts/mint.ts --network base
```