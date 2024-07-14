const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0x937E7e6E8D8a06CEf5425D212b90ae40BE6c9a75";
const abi = [
    // Simplified ABI containing only the relevant function
    "function mint1(address account, uint amount) public",
    "function mint2(address account, uint amount) public",
    "function mint4(address account, uint amount) public",
    "function mint8(address account, uint amount) public",
    "function mint16(address account, uint amount) public",

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

    try {
        // Get the current nonce for the account
    let _nonce = await provider.getTransactionCount(wallet.address);

    // const tx1 = await contract.mint1("0xf6ED94cc39d98f708e364d886A8c60a9A753BC57", 1, { nonce: _nonce});
    // console.log("Transaction sent: ", tx1.hash);
    // await tx1.wait();

    // _nonce = await provider.getTransactionCount(wallet.address);
    // const tx2 = await contract.mint2("0xf6ED94cc39d98f708e364d886A8c60a9A753BC57", 1, { nonce: _nonce,gasLimit: 17000000});
    // console.log("Transaction sent: ", tx2.hash);
    // await tx2.wait();

    // _nonce = await provider.getTransactionCount(wallet.address);
    // const tx4 = await contract.mint4("0xf6ED94cc39d98f708e364d886A8c60a9A753BC57", 1, { nonce: _nonce,gasLimit: 17000000});
    // console.log("Transaction sent: ", tx4.hash);
    // await tx4.wait();

    // _nonce = await provider.getTransactionCount(wallet.address);
    // const tx8 = await contract.mint8("0xf6ED94cc39d98f708e364d886A8c60a9A753BC57", 1, { nonce: _nonce,gasLimit: 17000000});
    // console.log("Transaction sent: ", tx8.hash);
    // await tx8.wait();
    _nonce = await provider.getTransactionCount(wallet.address);

        for (let j=0;j<100;j++){
    const tx16 = await contract.mint16("0xf6ED94cc39d98f708e364d886A8c60a9A753BC57", 1, { nonce: _nonce+j,gasLimit: 17000000});
    console.log("Transaction sent: ", tx16.hash);
    //await tx16.wait();
        }


  


    // Wait for the transaction to be mined
    //console.log("Transaction mined");
    await new Promise(resolve => setTimeout(resolve, 2000));
} catch (error) {
    console.error("Error sending transaction:", error);
}
}


main();
