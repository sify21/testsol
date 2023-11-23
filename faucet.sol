// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.22 <0.9.0;
pragma abicoder v2;

contract Faucet {
    address payable owner;

    modifier OnlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = payable(msg.sender);
    }

    function destroy() public OnlyOwner {
        selfdestruct(owner);
    }

    function withdraw(uint withdraw_amount) public {
        require(withdraw_amount <= 0.1 ether);
        payable(msg.sender).transfer(withdraw_amount);
    }

    receive() external payable {}
}
