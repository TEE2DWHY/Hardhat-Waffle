require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: "31337",
      blockConfirmation: 6,
    },
    goerli: {
      url: GOERLI_URL,
      chainId: 5,
      blockConfirmation: 6,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.19",
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: 1,
  },
};
