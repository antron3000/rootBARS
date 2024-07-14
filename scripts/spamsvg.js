const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0xeEC2fC070E445C79b198aaA3bb349Cc86CBC9Faa";
const abi = [
    // Simplified ABI containing only the relevant function
    "function storeSVG(string memory _svgData) public"
];

// Replace with your actual provider URL (e.g., Infura, Alchemy, or local node)
const providerUrl = "https://public-node.testnet.rsk.co";

// Replace with your actual private key
const privateKey = "0xbf3151311a1d87b08ee79914f79568038fbd6efcc5b9c75580ec7800c7181c0b";



async function main() {
    // Connect to the provider
    const provider = new ethers.JsonRpcProvider(providerUrl);

    // Create a wallet instance
    const wallet = new ethers.Wallet(privateKey, provider);

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, abi, wallet);

    // Call the storeData function with size 3000
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="bitbar4kB" class="gold sat" xml:space="preserve" style="font-family:monospace" viewBox="0 0 1080 1920" width="100%" height="100%"><style>*::selection{background:none}svg{overflow:hidden;background:#00005e;pointer-events:none}svg.sat #sat{display:inline-block}#sat{display:none}.js .bkg{fill:#00005e}.js g.art{filter:url(#textglow);animation:a ease-in-out 20s infinite}@keyframes a{from{transform:translateY(-0.7%)}50%{transform:translateY(0.7%)}to{transform:translateY(-0.7%)}}.js text{filter:url(#textglow)}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){g.art path{transform:rotate(90deg)scale(1.525)}g g.size{transform:translate(15%,4%)scale(1.525)}}g.faces{transform-origin:50%;animation:barcycle 16s ease-in-out 0s infinite forwards}@keyframes barcycle{from{filter:brightness(1)}50%{filter:brightness(1.38)}to{filter:brightness(1)}}.innerglow{filter:blur(4px)}.gold{background-color:#b0752b}.gold .art path:nth-child(2){fill:#fed65c}.gold text,.gold .bkg,.gold .base{fill:#b0752b!important;stroke:none}.gold .faces path{fill:#fed65c !important}.gold #glow feDropShadow,.gold #textglow feDropShadow{flood-opacity:0}.gold g.faces{animation:none}</style>
    <filter id="glow"><feDropShadow dx="0" dy="0" flood-color="#0734fb" flood-opacity="0.7" stdDeviation="32"/></filter><filter id="textglow"><feDropShadow dx="0" dy="0" flood-color="#8cd3fb" flood-opacity="0.4" stdDeviation="18"/></filter>
    <rect class="bkg" x="-2756" y="-1817" width="6592" height="5554" fill="none"/>
    <g class="art"><path class="base" d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#8cd3fb" stroke="#0227cb" stroke-width="3" stroke-linejoin="round"/>
    <g class="faces" fill="#0734fb"><path d="m138.5 1752 23-124c5-28 7-57 7-85V173l-30 101v1478z" fill="#0734fbdd"/>
    <path d="M862.5 1558h-642c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33z" fill="#0734fbdd"/><path d="M911.5 173v1370c0 28 2 57 7 85l23 124V274l-30-101z" fill="#0227cb"/><path d="M872.5 140h-665c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z"/></g>
    <g class="size"><text x="50%" y="49%" text-anchor="middle" fill="#8cd3fb" style="font-size:250px">4kB</text><text id="sat" x="50%" y="54%" text-anchor="middle" fill="#8cd3fb" style="font-size:40px">605504255776172</text></g></g>
    <script type="text/javascript">//<![CDATA[
    const bitbar = document.getElementById('bitbar4kB');
    bitbar.classList.add('js');
    bitbar.addEventListener('keydown', (event) => {if (event.key == ' ' || event.code == "Space" || event.keyCode == 32 ) {bitbar.classList.toggle('gold')}});
    bitbar.addEventListener('dblclick', event => {bitbar.classList.toggle('gold')});
    bitbar.addEventListener('keydown', (event) => {if (event.key == 's' || event.code == "KeyS" || event.keyCode == 83 ) {bitbar.classList.toggle('sat')}});
    //BITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARB
    //]]></script>
    </svg>`;
    for (let i=0; i<16; i++){

    try {
            // Get the current nonce for the account
            let _nonce = await provider.getTransactionCount(wallet.address);

        const tx = await contract.storeSVG(svg, { nonce: _nonce+i });
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
