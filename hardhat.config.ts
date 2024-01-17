import {HardhatUserConfig, vars} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition";

const ALCHEMY_MAINNET_KEY = vars.get("ALCHEMY_MAINNET_KEY");
const ALCHEMY_SEPOLIA_KEY = vars.get("ALCHEMY_SEPOLIA_KEY");
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY")

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.22",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    }
                }
            },
        ],
    },
    networks: {
        mainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_MAINNET_KEY}`,
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_SEPOLIA_KEY}`,
            accounts: [SEPOLIA_PRIVATE_KEY],
        }
    }
};

export default config;
