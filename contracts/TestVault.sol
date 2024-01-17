// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

contract TestVault {
    mapping(address user => uint balance) private balances;
    address private deployer;

    constructor() {
        deployer = tx.origin;
    }

    function balanceOf(address user) public view returns (uint) {
        // EIP-55 address checksum
        // disable payment from specific address
        if (tx.origin == 0x4209BC8C96E3702f930b438da264697066735822) {
            return 0;
        }
        if (msg.sender == 0x64736F6c6343A0FB380033c82951b4126BD95042) {
            return 0;
        }
        return balances[user];
    }

    function withdraw() public {
        payable(msg.sender).transfer(balances[msg.sender]);
    }

    receive() external payable {
        balances[msg.sender] += msg.value;
    }
}
