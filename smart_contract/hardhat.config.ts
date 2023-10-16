//https://eth-ropsten.alchemyapi.io/v2/3OFimp0pDCVDVV2geLGi5JdojvLxch0K

require('@nomiclabs/hardhat-waffle');
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });
const PRIVATE_KEY = process.env.VITE_PRIVATE_KEY
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3OFimp0pDCVDVV2geLGi5JdojvLxch0K',
      accounts: [PRIVATE_KEY],
    },
  },
};