const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0x8f2deFd21e0F63a298d6696512D3c65A528b31b8";
const abi = [
    // Simplified ABI containing only the relevant function
    
    "function storeSVG(string memory _svgData) public",
    "function SVG1() public view returns (string memory)"
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

    try {
        const svgData = await contract.SVG1();
        console.log("SVG1 data:", svgData);
        // Wait for the transaction to be mined
        //await tx.wait();
        //console.log("Transaction mined");
        await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
    }


main();
