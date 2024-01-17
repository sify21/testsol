import {buildModule} from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("TestVault", (m) => {
    const vault = m.contract("TestVault");
    return {vault};
});
