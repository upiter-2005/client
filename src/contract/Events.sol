// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Events { 

    address owner;

    event Paid(address indexed _from, uint _amount, uint _timestamp);
    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner () {
        require(msg.sender == owner, "You are not an owner");
        _;
    }

    function pay() external payable{
        emit Paid(msg.sender, msg.value, block.timestamp);
    }

    function withdraw(address payable _to) external onlyOwner {
        _to.transfer(address(this).balance);    
    }
}