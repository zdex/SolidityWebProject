pragma solidity ^0.7.2;

//SPDX-License-Identifier: UNLICENSED

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    } 
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}