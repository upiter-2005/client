// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

contract Function {

    // public
    // external - обращение только из вне смарт-контракта (н-р: из Метамаска или фронта);
    // internal - обращение только изнутри контракта или из контрактов потомков которые наследуют 
    // private - обращение только изнутри контракта, из потомков уже нельзя

    //view - ф-я может читать, но не модифицировать вызывается через call платить за нее не надо
    //pure - аналог view, только не может читать внешние state данные контракта
    
    function getBalance() public view returns(uint balance) {
        balance = address(this).balance;
        //return address(this).balance;
    }
}