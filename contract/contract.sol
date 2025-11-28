// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GiftPicker {

    address public owner;
    address public winner;
    address[] public participants;

    // Constructor runs when contract is deployed
    constructor() {
        owner = msg.sender;
    }

    // Function to join the gift picker
    function enter() public {
        participants.push(msg.sender);
    }

    // Function for owner to pick a winner
    function pickWinner() public {
        require(msg.sender == owner, "Only owner can pick winner");
        require(participants.length > 0, "No participants");

        uint index = block.timestamp % participants.length;
        winner = participants[index];
    }

    // Returns how many people joined
    function totalParticipants() public view returns (uint) {
        return participants.length;
    }

    // Reset everything for a new round
    function reset() public {
        require(msg.sender == owner, "Only owner can reset");

        delete participants;
        winner = address(0);
    }
}
