// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract MyShop {
    address public owner;
    address public my_account = msg.sender;

    mapping(address => uint256) public payments;

    constructor() {
        owner = msg.sender;
    } 

    function getCurrentAddress() public view returns (uint256) {
        return msg.sender.balance;
    }

    function getContractBalance() public view returns (uint256) {
        address _contract = address(this);
        return _contract.balance;
    }

    function payForItem() public payable {
        payments[msg.sender] = msg.value;
    }

    function withdrawAll() public {
        address payable _to = payable(owner);
        address _thisContract = address(this);
        _to.transfer(_thisContract.balance);
    }
}


pragma solidity ^0.4.24;
 
//Safe Math Interface
 
contract SafeMath {
 
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
 
    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
 
    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
 
    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}
 
 
