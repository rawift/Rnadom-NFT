require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy')
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config();

const Goerli_RPC_URL=process.env.Goerli_RPC_URL
const Goerli_Private_Key=process.env.Goerli_Private_Key
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    hardhat: {},
    Goerli:{
      url:Goerli_RPC_URL,
      accounts:[Goerli_Private_Key],
      saveDeployments: true
    }
  },
  etherscan:{
    apiKey:ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: "0.8.1",
      },
      {
        version: "0.8.4"
      },
      {
        version: "0.4.24"
      },
      {
        version: "0.6.6"
      },
      {
        version: "0.7.0"
      },
      {
        version: "0.8.0",
        options: {} // Optionally add more options
      }
    ],
  },
  namedAccounts: {
    deployer: {
      default:0
    }  
  }
};
