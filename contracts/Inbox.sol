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

//gist a0c1d47f12f1a5e238c38d638b8958064e6d9db8