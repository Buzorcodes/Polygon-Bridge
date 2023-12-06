require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: "https://ethereum-goerli.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
    },
    GOERLI: {
      url: GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
