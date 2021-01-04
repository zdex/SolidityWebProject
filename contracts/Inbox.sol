pragma solidity ^0.8.0;

//SPDX-License-Identifier: UNLICENSED

contract Inbox {
    string public message;

    constructor(string memory initialMessage) public {
        message = initialMessage;
    } 
    
    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}