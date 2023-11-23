import {HardhatUserConfig, vars} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

const config: HardhatUserConfig = {
    solidity: "0.8.19",
    networks: {
        mainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`
        }
    }
};

export default config;
