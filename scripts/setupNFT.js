const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0x8f2deFd21e0F63a298d6696512D3c65A528b31b8";
const abi = [
    // Simplified ABI containing only the relevant function
    "function storeSVG(string memory _svgData) public"
];

// Replace with your actual provider URL (e.g., Infura, Alchemy, or local node)
const providerUrl = "https://gnosis-rpc.publicnode.com	";

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
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1080 1920" width="100%" height="100%"><style>svg{overflow:hidden;background:#b0752b;font-family:monospace}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){path{transform:rotate(90deg)scale(1.525)}g g{transform:translate(15%,4%)scale(1.525)}}/*1kB*/</style><g class="bb"><path d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#b0752b"/><path d="M912 173v1370c0 28 2 57 7 85l23 124V274l-30-101zm-49 1385H221c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33zm-724 194 23-124c5-28 7-57 7-85V173l-30 101v1478zM873 140H208c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z" fill="#fed65c"/><g><text x="50%" y="48%" style="font-size:250px;fill:#b0752b;text-anchor:middle">1kB</text><text x="50%" y="54%" style="font-size:40px;fill:#b0752b;text-anchor:middle"><!--ETHBARETH--></text></g></g></svg>`

    try {
            // Get the current nonce for the account
            let _nonce = await provider.getTransactionCount(wallet.address);

        const tx = await contract.storeSVG(svg, { nonce: _nonce});
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


main();
