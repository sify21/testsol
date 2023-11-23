#!/bin/sh
npx hardhat node --fork https://eth-mainnet.g.alchemy.com/v2/$(npx hardhat vars get ALCHEMY_API_KEY) --fork-block-number 18589587
