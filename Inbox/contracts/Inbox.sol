pragma solidity ^0.4.17;

contract InboxByHemant {
    string public message;
    
    function InboxByHemant(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) {
        return message;
    }
    
}