const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0xC32AF9025E0D692c2895E94fD2Ce115512711f3B";
const abi = [
    // Simplified ABI containing only the relevant function
    "function storeData(uint256 size) public"
];

// Replace with your actual provider URL (e.g., Infura, Alchemy, or local node)
const providerUrl = "https://public-node.testnet.rsk.co";

// Replace with your actual private key
const privateKey = "";



async function main() {
    // Connect to the provider
    const provider = new ethers.JsonRpcProvider(providerUrl);

    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    // Call the storeData function with size 3000
    const size = 1500;
    for (let i=0; i<50; i++){

    try {
            // Get the current nonce for the account
            let _nonce = await provider.getTransactionCount(wallet.address);

        const tx = await contract.storeData(size, { nonce: _nonce+i });
        //nonce++

        console.log("Transaction sent: ", tx.hash);

        // Wait for the transaction to be mined
        //await tx.wait();
        //console.log("Transaction mined");
        await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
    }
}

main();
