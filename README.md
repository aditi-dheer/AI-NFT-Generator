# AI NFT Generator

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) ![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=flat&logo=openai&logoColor=white) ![Thirdweb](https://img.shields.io/badge/Thirdweb-000000?style=flat&logo=thirdweb&logoColor=white) ![BSC Testnet](https://img.shields.io/badge/BSC%20Testnet-F0B90B?style=flat&logo=binance&logoColor=white)

## Summary
**AI NFT Generator** is a user-friendly web application that allows users to create and mint NFTs without any coding knowledge. Connect your wallet, generate stunning AI images using text prompts, and mint them as NFTs on the Binance Smart Chain Testnet with just a few clicks.

---

## Table of Contents
1. [Features](#features)  
2. [Requirements](#requirements)  
3. [Getting Started](#getting-started)  
   - [Clone the Repository](#clone-the-repository)  
   - [Install Dependencies](#install-dependencies)  
   - [Set Up Environment Variables](#set-up-environment-variables)  
   - [Run the Application](#run-the-application)  
4. [Usage](#usage)  

---

## Features
- 🔐 **Wallet Integration**: Connect with MetaMask or any EVM-compatible wallet.  
- ✨ **AI Image Generation**: Users enter text prompts to generate custom images via OpenAI's DALL·E API.  
- 🖼️ **NFT Minting**: Mint generated images as ERC-721 tokens using Thirdweb and your deployed smart contract.  

---

## Requirements
- Node.js (v16+) & npm or Yarn  
- A wallet (e.g., MetaMask) with testnet BNB for gas  
- OpenAI API key  
- Thirdweb Secret Key & engine URL

---

## Getting Started  

### Clone the Repository
```bash
git clone https://github.com/aditi-dheer/AI-NFT-Generator.git
cd AI-NFT-Generator
```

### Install Dependencies
Once you've cloned the repo, install all required packages:
```bash
# Using npm
npm install
# Or using yarn
yarn install
```

### Set Up Environment Variables
Create a `.env` file in the root of your project and add the following:
```bash
OPENAI_API_KEY=<your-openai-api-key>
ENGINE_URL=<your-engine-url>
THIRDWEB_SECRET_KEY=<your-thirdweb-secret-key>
BACKEND_WALLET_ADDRESS=<your-backend-wallet-address>
CHAIN_ID=<your-chain-id>
```

### Run the Application
Once the dependencies are installed and environment variables are set, run the app:
```bash
# Using npm
npm run dev
# Or using yarn
yarn dev
```
Visit http://localhost:3000 in your browser.

## Usage
1. Connect your wallet (MetaMask or any EVM-compatible wallet).
2. Enter a text prompt to generate an AI image via OpenAI.
3. Mint the image as an NFT using your smart contract.
