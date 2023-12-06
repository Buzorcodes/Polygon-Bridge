
# LiverpoolNFT Solidity Smart Contract

## Overview

LiverpoolNFT is a Solidity smart contract that implements the ERC721 standard for non-fungible tokens (NFTs) with additional features. It represents a collection of NFTs related to Liverpool FC's 2005 champions winning memories.

## Features

-   ERC721A: The contract extends the ERC721A contract, providing a standard interface for NFTs.
-   Minting: Only the contract owner can mint new NFTs, with a maximum limit of 5 tokens.
-   Base URI: NFTs have a base URI for metadata, allowing for customization of token details.
-   Prompt Description: The contract provides a function to retrieve the description of the NFTs.

## Getting Started

### Prerequisites

-   Solidity ^0.8.9
-   ERC721A: Import of the ERC721A contract.

### Installation

1.  Clone the repository:
    
    bashCopy code
    
    `git clone https://github.com/your-username/liverpool-nft.git` 
    
2.  Install dependencies:
    
    bashCopy code
    
    `cd liverpool-nft
    npm install` 
    

### Usage

1.  Deploy the contract to the Ethereum blockchain.
2.  The owner can mint new NFTs using the `mint` function, respecting the maximum limit.
3.  Users can query the prompt description using the `promptDescription` function.

## Contract Details

-   **Name:** LiverpoolNFT
-   **Symbol:** YNWA
-   **Total Supply Limit:** 5
-   **Base URI:** [https://gateway.pinata.cloud/ipfs/Qmf8kvKCQrogKp9emA7FKfe9sy7RCtnhLcwwAqqy2ZorLa/](https://gateway.pinata.cloud/ipfs/Qmf8kvKCQrogKp9emA7FKfe9sy7RCtnhLcwwAqqy2ZorLa/)

## Owner Actions

-   Mint new NFTs: The owner can mint new tokens using the `mint` function.

## Contributing

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.