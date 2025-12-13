import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    // Localhost es la red local que Hardhat habilita automáticamente al iniciar
    localhost: {
      
      // url: "http://127.0.0.1:8545" Opcional
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "", // API V2 global
  },
  sourcify: {
    enabled: false, // opcional, oculta el warning de Sourcify
  },

};

export default config;
