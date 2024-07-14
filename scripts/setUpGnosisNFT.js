const { ethers } = require("ethers");

// Replace these values with your actual contract address and ABI
const contractAddress = "0x9405Aaa93Db04267cBd26E662F79765c9A9CdeBA";
const abi = [
    // Simplified ABI containing only the relevant function
    "function storeSVG1(string memory _svgData) public",
    "function storeSVG2(string memory _svgData) public",
    "function storeSVG4(string memory _svgData) public",
    "function storeSVG8(string memory _svgData) public",
    "function storeSVG16(string memory _svgData) public"

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
    const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1080 1920" width="100%" height="100%"><style>svg{overflow:hidden;background:#b0752b;font-family:monospace}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){path{transform:rotate(90deg)scale(1.525)}g g{transform:translate(15%,4%)scale(1.525)}}/*1kB*/</style><g class="bb"><path d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#b0752b"/><path d="M912 173v1370c0 28 2 57 7 85l23 124V274l-30-101zm-49 1385H221c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33zm-724 194 23-124c5-28 7-57 7-85V173l-30 101v1478zM873 140H208c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z" fill="#fed65c"/><g><text x="50%" y="48%" style="font-size:250px;fill:#b0752b;text-anchor:middle">1kB</text><text x="50%" y="54%" style="font-size:40px;fill:#b0752b;text-anchor:middle"><!--ETHBARETH--></text></g></g></svg>`
    const svg2 = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <svg xmlns="http://www.w3.org/2000/svg" id="bitbar2kb" class="gold sat" xml:space="preserve" style="font-family:monospace" viewBox="0 0 1080 1920" width="100%" height="100%">
      <style>*::selection{background:none}svg{overflow:hidden;background:#ffd4bf;pointer-events:none}svg.sat #sat{display:inline-block}#sat{display:none}.js g.art{animation:a ease-in-out 20s infinite}@keyframes a{from{transform:translateY(-0.7%)}50%{transform:translateY(0.7%)}to{transform:translateY(-0.7%)}}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){path{transform:rotate(90deg)scale(1.525)}g g{transform:translate(15%,4%)scale(1.525)}}.gold{background-color:#b0752b}.gold .art path{fill:#fed65c}.gold .art path:nth-child(1),.gold text{fill:#b0752b!important}</style>
      <g class="art">
        <path d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#ff635a"/>
        <path d="M912 173v1370c0 28 2 57 7 85l23 124V274l-30-101zm-49 1385H221c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33zm-724 194 23-124c5-28 7-57 7-85V173l-30 101v1478zM873 140H208c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z" fill="#db3434"/>
        <g>
          <text x="50%" y="49%" fill="#ff635a" text-anchor="middle" style="font-size:250px">2kB</text>
          <text id="sat" x="50%" y="54%" fill="#ff635a" text-anchor="middle" style="font-size:40px">123456789012345</text>
        </g>
      </g>
      <script type="text/javascript">//&#xD;
    const bitbar = document.getElementById('bitbar2kb');&#xD;
    bitbar.addEventListener('keydown', (event) =&gt; {if (event.key == ' ' || event.code == "Space" || event.keyCode == 32 ) {bitbar.classList.toggle('gold')}});&#xD;
    bitbar.addEventListener('dblclick', event =&gt; {bitbar.classList.toggle('gold')});&#xD;
    bitbar.addEventListener('keydown', (event) =&gt; {if (event.key == 's' || event.code == "KeyS" || event.keyCode == 83 ) {bitbar.classList.toggle('sat')}});&#xD;
    //BITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITB&#xD;
    //</script>
    </svg>`
    const svg4 = `<svg xmlns="http://www.w3.org/2000/svg" id="bitbar4kB" class="gold sat" xml:space="preserve" style="font-family:monospace" viewBox="0 0 1080 1920" width="100%" height="100%"><style>*::selection{background:none}svg{overflow:hidden;background:#00005e;pointer-events:none}svg.sat #sat{display:inline-block}#sat{display:none}.js .bkg{fill:#00005e}.js g.art{filter:url(#textglow);animation:a ease-in-out 20s infinite}@keyframes a{from{transform:translateY(-0.7%)}50%{transform:translateY(0.7%)}to{transform:translateY(-0.7%)}}.js text{filter:url(#textglow)}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){g.art path{transform:rotate(90deg)scale(1.525)}g g.size{transform:translate(15%,4%)scale(1.525)}}g.faces{transform-origin:50%;animation:barcycle 16s ease-in-out 0s infinite forwards}@keyframes barcycle{from{filter:brightness(1)}50%{filter:brightness(1.38)}to{filter:brightness(1)}}.innerglow{filter:blur(4px)}.gold{background-color:#b0752b}.gold .art path:nth-child(2){fill:#fed65c}.gold text,.gold .bkg,.gold .base{fill:#b0752b!important;stroke:none}.gold .faces path{fill:#fed65c !important}.gold #glow feDropShadow,.gold #textglow feDropShadow{flood-opacity:0}.gold g.faces{animation:none}</style>
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
    </svg>`
    const svg8 = `<svg xmlns="http://www.w3.org/2000/svg" id="bitbar8kB" class="gold sat" xml:space="preserve" style="font-family:monospace" viewBox="0 0 1080 1920" width="100%" height="100%"><style>*::selection{background:none}svg{overflow:hidden;background:#0e0e0e;animation:artcycle 5s ease-in-out 0s infinite forwards;pointer-events:none}svg.sat #sat{display:inline-block}#sat{display:none}.bkg{display:none}.js .bkg{display:inline-block}.js g.art{animation:a ease-in-out 20s infinite}@keyframes a{from{transform:translateY(-0.7%)}50%{transform:translateY(0.7%)}to{transform:translateY(-0.7%)}}path,g{transform-origin:50%}
    g.faces{animation:barcycle 30s ease-in-out 0s infinite forwards;opacity:0.3;transform:none}
    g.faces *{animation:facecycle 5s ease-in-out -1s infinite forwards}
    g.faces *:nth-child(1){animation-delay:-5.25s}
    g.faces *:nth-child(2){animation-delay:-6s}
    g.faces *:nth-child(3){animation-delay:-6.75s}
    g.faces *:nth-child(4){animation-delay:-2.75s}
    @keyframes facecycle{from{opacity:0}10%{opacity:0}30%{opacity:0.9}60%{opacity:0}to{opacity:0}}
    @keyframes barcycle{from{filter:hue-rotate(0deg)}to{filter:hue-rotate(0deg)}}
    @keyframes artcycle{from{filter:contrast(92%)sepia(50%)saturate(100%)hue-rotate(0deg)}to{filter:contrast(92%)sepia(50%)saturate(100%)hue-rotate(360deg)}}
    .gold{background-color:#b0752b;animation:none}.gold .art path:nth-child(6){fill:#fed65c}.gold .art path:nth-child(5),.gold text,.gold .bkg{fill:#b0752b !important;stroke:none}.gold .faces,.gold .shadow{display:none}.gold #glow feDropShadow{flood-opacity:0}.gold g.faces,.gold g.faces *{animation:none}
    .shadow{fill:#0000FF15;filter:blur(100px);animation:facecycle 5s ease-in-out 0s infinite forwards}
    .s1{animation-delay:-5.25s}
    .s2{animation-delay:-6s}
    .s3{animation-delay:-6.75s}
    .s4{transform:rotate(180deg);animation-delay:-4.5s}
    @media(min-aspect-ratio:16.05/9){g.art path,g.art .shadow{transform:rotate(90deg)scale(1.525)}g.art .s4{transform:rotate(-90deg)scale(1.525)}g g{transform:translate(15%,4%)scale(1.525)}}
    </style>
    <filter id="glow"><feDropShadow dx="0" dy="0" flood-color="#0734fb" flood-opacity="0.5" stdDeviation="16"/></filter>
    <rect class="bkg" x="-2755.9" y="-1816.9" width="6592" height="5553.8" fill="#0e0e0e"/>
    <g class="art" filter="url(#glow)">
    <path class="shadow s1" d="M117.9,1774.1c-9.7,0-419.5-73.9-543.3-96.3c-20.3-3.7-35.1-21.4-35.1-42V315.8c0-19.9,13.7-37.1,33.1-41.6 c125.1-28.8,542.2-119.6,588.5-129.3c11.2-2.3,28.8-4.9,59.3-4.9l85.3,99.8c22.9,26.8,35.5,60.9,35.5,96.1l0.2,1259.8 c0,42-17.8,81.9-49,110C255,1739.3,206.9,1779,188,1779C155.3,1779,117.9,1774.1,117.9,1774.1z"/><path class="shadow s2" d="M141.1,1752c0-18.9,39.7-49.3,73.3-86.6c28.1-31.2,68.1-49,110-49l428.3,0.2c35.2,0,69.3,12.6,96.1,35.5 l95.3,100c0,30.4-2.6,48.1-4.9,59.3c-9.7,46.2-47.2,108.7-124.8,240.3c-10.1,17.1-21.7,33.1-41.6,33.1H284.3 c-20.6,0-33.3-16.4-42-35.1c-60.2-129.6-98.9-233.6-98.9-243.3C143.4,1806.3,141.1,1784.8,141.1,1752z"/><path class="shadow s3" d="M897.1,1779c-18.9,0-58-39.7-95.3-73.3c-31.2-28.1-49-68.1-49-110l0.2-1259.8c0-35.2,12.6-69.3,35.5-96.1 l85.3-99.8c30.4,0,48.1,2.6,59.3,4.9c46.2,9.7,463.3,100.5,588.5,129.3c19.4,4.5,33.1,21.7,33.1,41.6v1319.9 c0,20.6-14.8,38.3-35.1,42c-123.8,22.4-533.6,96.3-543.3,96.3C976.1,1774.1,929.9,1779,897.1,1779z"/><path class="shadow s4" d="M141.1,1752c0-18.9,39.7-49.3,73.3-86.6c28.1-31.2,68.1-49,110-49l428.3,0.2c35.2,0,69.3,12.6,96.1,35.5 l95.3,100c0,30.4-2.6,48.1-4.9,59.3c-9.7,46.2-47.2,108.7-124.8,240.3c-10.1,17.1-21.7,33.1-41.6,33.1H284.3 c-20.6,0-33.3-16.4-42-35.1c-60.2-129.6-98.9-233.6-98.9-243.3C143.4,1806.3,141.1,1784.8,141.1,1752z"/><path d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="20"/><path d="M912 173v1370c0 28 2 57 7 85l23 124V274l-30-101zm-49 1385H221c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33zm-724 194 23-124c5-28 7-57 7-85V173l-30 101v1478zM873 140H208c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z" fill="#0e0e0e"/>
    <g class="faces" fill="#0000FF">
      <path d="m138.5 1752 23-124c5-28 7-57 7-85V173l-30 101v1478z"/>
      <path d="M862.5 1558h-642c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33z"/>
      <path d="M911.5 173v1370c0 28 2 57 7 85l23 124V274l-30-101z"/>
      <path d="M872.5 140h-665c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z"/>
    </g>
    <g><text x="50%" y="49%" text-anchor="middle" filter="url(#glow)" fill="#FFFFFF" style="font-size:250px">8kB</text><text id="sat" x="50%" y="54%" text-anchor="middle" filter="url(#glow)" fill="#FFFFFF" style="font-size:40px">1367688590764866</text></g></g>
    <script type="text/javascript">//<![CDATA[
    const bitbar = document.getElementById('bitbar8kB');
    bitbar.classList.add('js');
    bitbar.addEventListener('keydown', (event) => {if (event.key == ' ' || event.code == "Space" || event.keyCode == 32 ) {bitbar.classList.toggle('gold')}});
    bitbar.addEventListener('dblclick', event => {bitbar.classList.toggle('gold')});
    bitbar.addEventListener('keydown', (event) => {if (event.key == 's' || event.code == "KeyS" || event.keyCode == 83 ) {bitbar.classList.toggle('sat')}});
    //BITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITB
    //]]></script>
    </svg>`
    const svg16 = `<svg xmlns="http://www.w3.org/2000/svg" id="bitbar16kB" class="gold sat" xml:space="preserve" style="font-family:monospace" viewBox="0 0 1080 1920" width="100%" height="100%"><style>*::selection{background:none}svg{overflow:hidden;background:#c2ff36;pointer-events:none}svg.sat #sat{display:inline-block}#sat{display:none}.bkg{display:none}.js .bkg{display:inline-block}.js g.art{animation:a ease-in-out 20s infinite}@keyframes a{from{transform:translateY(-0.7%)}50%{transform:translateY(0.7%)}to{transform:translateY(-0.7%)}}path,g{transform-origin:50%}@media(min-aspect-ratio:16.05/9){g.art path{transform:rotate(90deg)scale(1.525)}g g{transform:translate(15%,4%)scale(1.525)}}
    g.r2 *{animation:ringcycle 6s ease-in-out 0s infinite forwards;opacity:0.4}
    g.r2 *:nth-child(1){animation-delay:-0.5s}
    g.r2 *:nth-child(2){animation-delay:-1s}
    g.r2 *:nth-child(3){animation-delay:-1.5s}
    g.r2 *:nth-child(4){animation-delay:-2s}
    g.r2 *:nth-child(5){animation-delay:-2.5s}
    g.r2 *:nth-child(6){animation-delay:-3s}
    g.r2 *:nth-child(7){animation-delay:-3.5s}
    g.r2 *:nth-child(8){animation-delay:-4s}
    g.r2 *:nth-child(9){animation-delay:-4.5s}
    g.r2 *:nth-child(10){animation-delay:-5s}
    g.r2 *:nth-child(11){animation-delay:-5.5s}
    g.r2 *:nth-child(12){animation-delay:-6s}
    g.r2 *:nth-child(13){animation-delay:-6.5s}
    g.r2 *:nth-child(14){animation-delay:-7s}
    g.r2 *:nth-child(15){animation-delay:-7.5s}
    g.r2 *:nth-child(16){animation-delay:-8s}
    g.r2 *:nth-child(17){animation-delay:-8.5s}
    g.r2 *:nth-child(18){animation-delay:-9s}
    g.r2 *:nth-child(19){animation-delay:-9.5s}
    g.r2 *:nth-child(20){animation-delay:-10s}
    g.r2 *:nth-child(21){animation-delay:-10.5s}
    g.r2 *:nth-child(22){animation-delay:-11s}
    g.r2 *:nth-child(23){animation-delay:-11.5s}
    g.r2 *:nth-child(24){animation-delay:-12s}
    g.r2 *:nth-child(25){animation-delay:-12.5s}
    g.r2 *:nth-child(26){animation-delay:-13s}
    g.r2 *:nth-child(27){animation-delay:-13.5s}
    g.r2 *:nth-child(28){animation-delay:-14s}
    g.r2 *:nth-child(29){animation-delay:-14.5s}
    g.r2 *:nth-child(30){animation-delay:-15s}
    g.r2 *:nth-child(31){animation-delay:-15.5s}
    g.r2 *:nth-child(32){animation-delay:-16s}
    @keyframes ringcycle{from{filter:brightness(20%)hue-rotate(30deg)}50%{filter:brightness(100%)hue-rotate(0deg)}to{filter:brightness(20%)hue-rotate(30deg)}}
    .gold{background-color:#b0752b}.gold .art path:nth-child(2){fill:#fed65c}.gold .art path:nth-child(1),.gold text,.gold .bkg{fill:#b0752b!important;stroke:none}.gold .r1,.gold .r2{display:none}.gold g.r2 *{animation:none}
    </style>
    <rect class="bkg" x="-2755.9" y="-1816.9" width="6592" height="5553.8" fill="#c2ff36"/>
    <g class="r2" fill="#c2ff36"><path d="M540-1576.8c-1398.8 0-2536.8 1138-2536.8 2536.8S-858.8 3496.8 540 3496.8 3076.8 2358.8 3076.8 960 1938.8-1576.8 540-1576.8zm0 5007c-1362 0-2470.1-1108.1-2470.1-2470.2C-1930.1-402-822-1510.1 540-1510.1S3010.1-402 3010.1 960c0 1362.1-1108 2470.2-2470.1 2470.2z"/><path d="M540-1510.1C-822-1510.1-1930.1-402-1930.1 960c0 1362.1 1108.1 2470.2 2470.1 2470.2 1362.1 0 2470.1-1108.1 2470.1-2470.2C3010.1-402 1902-1510.1 540-1510.1zm0 4873C-784.9 3362.9-1862.8 2285-1862.9 960c0-1325 1078-2402.9 2402.9-2402.9 1325 0 2402.9 1078 2402.9 2402.9 0 1325-1077.9 2402.9-2402.9 2402.9z"/><path d="M540-1442.9C-784.9-1442.9-1862.9-365-1862.9 960c.1 1325 1078 2402.9 2402.9 2402.9 1325 0 2402.9-1077.9 2402.9-2402.9C2942.9-364.9 1865-1442.9 540-1442.9zm0 4738.1c-1287.6 0-2335.1-1047.6-2335.1-2335.2S-747.6-1375.1 540-1375.1 2875.1-327.6 2875.1 960c0 1287.7-1047.5 2335.2-2335.1 2335.2z"/><path d="M540-1375.1c-1287.6 0-2335.1 1047.5-2335.1 2335.1S-747.6 3295.2 540 3295.2 2875.1 2247.7 2875.1 960c0-1287.6-1047.5-2335.1-2335.1-2335.1zm0 4600c-1248.8 0-2264.8-1016-2264.9-2264.9 0-1248.9 1016-2264.9 2264.9-2264.9S2804.9-288.9 2804.9 960 1788.9 3224.9 540 3224.9z"/><path d="M540-1304.9c-1248.9 0-2264.9 1016-2264.9 2264.9.1 1248.9 1016.1 2264.9 2264.9 2264.9 1248.9 0 2264.9-1016 2264.9-2264.9S1788.9-1304.9 540-1304.9zm0 4460.7c-1210.7 0-2195.8-985-2195.8-2195.8s985-2195.8 2195.8-2195.8S2735.8-250.8 2735.8 960 1750.8 3155.8 540 3155.8z"/><path d="M540-1235.8c-1210.8 0-2195.8 985-2195.8 2195.8S-670.7 3155.8 540 3155.8c1210.8 0 2195.8-985 2195.8-2195.8S1750.8-1235.8 540-1235.8zm0 4319.4c-1170.9 0-2123.6-952.6-2123.6-2123.6 0-1170.9 952.6-2123.6 2123.6-2123.6S2663.6-211 2663.6 960c0 1170.9-952.6 2123.6-2123.6 2123.6z"/><path d="M540-1163.6c-1171 0-2123.6 952.7-2123.6 2123.6 0 1171 952.7 2123.6 2123.6 2123.6 1171 0 2123.6-952.7 2123.6-2123.6 0-1171-952.6-2123.6-2123.6-2123.6zm0 4176.4c-1131.9 0-2052.8-920.9-2052.8-2052.8S-591.9-1092.8 540-1092.8 2592.8-171.9 2592.8 960 1671.9 3012.8 540 3012.8z"/><path d="M540-1092.8c-1131.9 0-2052.8 920.9-2052.8 2052.8S-591.9 3012.8 540 3012.8 2592.8 2091.9 2592.8 960 1671.9-1092.8 540-1092.8zm0 4036.2c-1093.6 0-1983.3-889.7-1983.4-1983.4 0-1093.7 889.7-1983.4 1983.4-1983.4S2523.4-133.7 2523.4 960 1633.7 2943.4 540 2943.4z"/><path d="M540-1023.4c-1093.7 0-1983.4 889.7-1983.4 1983.4.1 1093.7 889.8 1983.4 1983.4 1983.4 1093.7 0 1983.4-889.7 1983.4-1983.4S1633.7-1023.4 540-1023.4zm0 3899.9c-1056.7 0-1916.5-859.7-1916.5-1916.5S-516.7-956.5 540-956.5 2456.5-96.8 2456.5 960 1596.8 2876.5 540 2876.5z"/><path d="M540-956.5C-516.7-956.5-1376.5-96.8-1376.5 960S-516.7 2876.5 540 2876.5c1056.8 0 1916.5-859.7 1916.5-1916.5S1596.7-956.5 540-956.5zm0 3766c-1019.8 0-1849.5-829.7-1849.5-1849.5S-479.8-889.5 540-889.5c1019.9 0 1849.6 829.7 1849.5 1849.5 0 1019.8-829.7 1849.5-1849.5 1849.5z"/><path d="M540-889.5C-479.8-889.5-1309.5-59.8-1309.5 960S-479.8 2809.5 540 2809.5 2389.5 1979.8 2389.5 960C2389.6-59.8 1559.9-889.5 540-889.5zm0 3632.1c-982.9 0-1782.6-799.7-1782.6-1782.6S-442.9-822.6 540-822.6c983 0 1782.7 799.7 1782.7 1782.6S1523 2742.6 540 2742.6z"/><path d="M540-822.6c-982.9 0-1782.6 799.7-1782.6 1782.6S-442.9 2742.6 540 2742.6c983 0 1782.7-799.7 1782.7-1782.6S1523-822.6 540-822.6zm1213.3 2992c-670 670-1756.3 670-2426.4 0s-670-1756.3 0-2426.4 1756.3-670 2426.4 0 670 1756.4 0 2426.4z"/><path d="M-673.1-256.9c-670 670-670 1756.3 0 2426.4s1756.3 670 2426.4 0 670-1756.3 0-2426.4-1756.4-670-2426.4 0zm2378.9 2379C1061.9 2766 18 2766-625.8 2122.1s-643.9-1687.8 0-2331.6 1687.8-643.9 2331.6 0 643.9 1687.8 0 2331.6z"/><path d="M-625.8-209.5c-643.9 643.9-643.9 1687.8 0 2331.6s1687.8 643.9 2331.6 0 643.9-1687.8 0-2331.6S18-853.3-625.8-209.5zM540 2541.8c-872.2 0-1581.7-709.6-1581.8-1581.8 0-872.2 709.6-1581.8 1581.8-1581.8S2121.8 87.8 2121.8 960 1412.2 2541.8 540 2541.8z"/><path d="M540-621.8c-872.2 0-1581.8 709.6-1581.8 1581.8.1 872.2 709.6 1581.8 1581.8 1581.8S2121.8 1832.2 2121.8 960 1412.2-621.8 540-621.8zm1071.3 2653c-591.6 591.6-1550.8 591.6-2142.4 0s-591.6-1550.8 0-2142.4 1550.8-591.6 2142.4 0 591.6 1550.8 0 2142.4z"/><path d="M-531.1-111.2c-591.6 591.6-591.6 1550.8 0 2142.4s1550.8 591.6 2142.4 0 591.6-1550.8 0-2142.4-1550.8-591.6-2142.4 0zm2094.9 2095.1c-565.4 565.4-1482.2 565.4-2047.6 0s-565.4-1482.2 0-2047.6 1482.2-565.4 2047.6 0 565.5 1482.1 0 2047.6z"/><path d="M-483.8-63.8c-565.4 565.4-565.4 1482.2 0 2047.6s1482.2 565.4 2047.6 0 565.4-1482.2 0-2047.6-1482.2-565.4-2047.6 0zm2000.4 2000.3c-539.3 539.3-1413.7 539.3-1953 0s-539.3-1413.7 0-1953 1413.7-539.3 1953 0 539.3 1413.7 0 1953z"/><path d="M-436.4-16.6c-539.3 539.3-539.3 1413.7 0 1953s1413.7 539.3 1953 0 539.3-1413.7 0-1953-1413.7-539.3-1953 0zm1905.7 1905.8c-513.2 513.2-1345.2 513.2-1858.4 0S-902.3 544-389.1 30.8s1345.2-513.2 1858.4 0 513.2 1345.2 0 1858.4z"/><path d="M-389.1 30.8c-513.2 513.2-513.2 1345.2 0 1858.4s1345.2 513.2 1858.4 0 513.2-1345.2 0-1858.4-1345.2-513.2-1858.4 0zm1811 1811c-487 487-1276.6 487-1763.7 0s-487-1276.6 0-1763.7 1276.6-487 1763.7 0 487 1276.7 0 1763.7z"/><path d="M-341.8 78.1c-487 487-487 1276.6 0 1763.7s1276.6 487 1763.7 0 487-1276.6 0-1763.7-1276.6-487-1763.7 0zM540 2140.2c-650.7 0-1180.1-529.4-1180.1-1180.2S-110.7-220.2 540-220.2c257.9 0 496.6 83.1 691 223.9C1527.2 218.3 1720.3 567 1720.2 960c0 650.8-529.4 1180.2-1180.2 1180.2z"/><path d="M1231 3.7c-194.4-140.8-433.1-223.9-691-223.9-650.7 0-1180.1 529.4-1180.1 1180.2S-110.7 2140.2 540 2140.2c650.8 0 1180.2-529.4 1180.2-1180.2.1-393-193-741.7-489.2-956.3zM540 2073.3c-613.9 0-1113.3-499.4-1113.3-1113.3C-573.2 346.2-73.8-153.3 540-153.3c613.9 0 1113.3 499.4 1113.3 1113.3S1153.9 2073.3 540 2073.3z"/><path d="M540-153.3C-73.8-153.3-573.2 346.2-573.3 960c0 613.9 499.4 1113.3 1113.3 1113.3S1653.3 1573.9 1653.3 960 1153.9-153.3 540-153.3zm739.9 1853.1c-408.6 408.6-1071.1 408.6-1479.7 0s-408.6-1071.1 0-1479.7 1071.1-408.6 1479.7 0 408.6 1071.1 0 1479.7z"/><path d="M-199.8 220.1c-408.6 408.6-408.6 1071.1 0 1479.7s1071.1 408.6 1479.7 0 408.6-1071.1 0-1479.7-1071.1-408.6-1479.7 0zM540 1939.4C0 1939.4-439.4 1500-439.4 960S0-19.4 540-19.4c540.1 0 979.4 439.4 979.4 979.4 0 540.1-439.4 979.4-979.4 979.4z"/><path d="M540-19.4C0-19.4-439.4 420-439.4 960S0 1939.4 540 1939.4s979.4-439.3 979.4-979.4c0-540-439.3-979.4-979.4-979.4zm.1 1891.9c-503.2 0-912.5-409.4-912.5-912.5S36.9 47.5 540.1 47.5s912.5 409.4 912.5 912.5c0 503.2-409.4 912.5-912.5 912.5z"/><path d="M540.1 47.5C36.9 47.5-372.4 456.9-372.4 960s409.3 912.5 912.5 912.5c503.1 0 912.5-409.3 912.5-912.5 0-503.1-409.3-912.5-912.5-912.5zm-.1 1758c-466.2 0-845.5-379.3-845.5-845.5S73.8 114.5 540 114.5s845.6 379.3 845.6 845.5-379.3 845.5-845.6 845.5z"/><path d="M540 114.5c-466.2 0-845.5 379.3-845.5 845.5S73.8 1805.5 540 1805.5c466.3 0 845.6-379.3 845.6-845.5S1006.2 114.5 540 114.5zm0 1624.1c-429.3 0-778.6-349.3-778.6-778.6S110.7 181.4 540 181.4s778.6 349.3 778.6 778.6-349.3 778.6-778.6 778.6z"/><path d="M540 181.4c-429.3 0-778.6 349.3-778.6 778.6s349.3 778.6 778.6 778.6 778.6-349.3 778.6-778.6S969.3 181.4 540 181.4zm.1 1490.3c-392.5 0-711.7-319.3-711.7-711.7 0-392.4 319.3-711.7 711.7-711.7s711.7 319.3 711.7 711.7-319.3 711.7-711.7 711.7z"/><path d="M540.1 248.3c-392.4 0-711.7 319.3-711.7 711.7s319.2 711.7 711.7 711.7c392.4 0 711.7-319.3 711.7-711.7S932.5 248.3 540.1 248.3zm455.8 1167.6c-251.8 251.8-660 251.8-911.7 0s-251.8-660 0-911.7 660-251.8 911.7 0 251.7 659.9 0 911.7z"/><path d="M84.1 504.2c-251.8 251.8-251.8 660 0 911.7s660 251.8 911.7 0 251.8-660 0-911.7-659.9-251.8-911.7 0zM540 1537.8c-318.6 0-577.8-259.2-577.8-577.8S221.4 382.2 540 382.2s577.8 259.2 577.8 577.8c.1 318.6-259.1 577.8-577.8 577.8z"/><path d="M540 382.2C221.4 382.2-37.8 641.4-37.8 960s259.2 577.8 577.8 577.8c318.7 0 577.9-259.2 577.8-577.8 0-318.6-259.2-577.8-577.8-577.8zm.1 1088.7c-281.7 0-510.9-229.2-510.9-510.9s229.2-510.9 510.9-510.9S1051 678.3 1051 960s-229.2 510.9-510.9 510.9z"/><path d="M540.1 449.1C258.4 449.1 29.2 678.3 29.2 960s229.2 510.9 510.9 510.9S1051 1241.7 1051 960 821.8 449.1 540.1 449.1zm0 954.8c-244.8 0-444-199.1-444-443.9S295.3 516.1 540 516.1c244.8 0 444 199.1 444 443.9s-199.1 443.9-443.9 443.9z"/><path d="M540 516.1C295.3 516.1 96.1 715.2 96.1 960s199.2 443.9 444 443.9S984 1204.8 984 960 784.8 516.1 540 516.1zm.1 820.7c-207.8 0-376.8-169-376.8-376.8s169.1-376.8 376.8-376.8c207.7 0 376.8 169.1 376.8 376.8 0 207.8-169 376.8-376.8 376.8z"/>
    </g>
    <g class="r1" fill="none" stroke="#406186" stroke-width="8" stroke-miterlimit="10"><path d="M540 3496.8c1398.8 0 2536.8-1138 2536.8-2536.8 0-1398.8-1138-2536.8-2536.8-2536.8-1398.8 0-2536.8 1138-2536.8 2536.8 0 1398.8 1138 2536.8 2536.8 2536.8z"/><path d="M540 3430.2c1362.1 0 2470.1-1108.1 2470.1-2470.2C3010.1-402 1902-1510.1 540-1510.1S-1930.1-402-1930.1 960c0 1362.1 1108.1 2470.2 2470.1 2470.2z"/><path d="M540 3362.9c1325 0 2402.9-1077.9 2402.9-2402.9C2942.9-364.9 1865-1442.9 540-1442.9-784.9-1442.9-1862.9-365-1862.9 960c.1 1325 1078 2402.9 2402.9 2402.9z"/><path d="M540 3295.2c1287.6 0 2335.1-1047.5 2335.1-2335.2 0-1287.6-1047.5-2335.1-2335.1-2335.1S-1795.1-327.6-1795.1 960-747.6 3295.2 540 3295.2z"/><path d="M540 3224.9c1248.9 0 2264.9-1016 2264.9-2264.9S1788.9-1304.9 540-1304.9-1724.9-288.9-1724.9 960c.1 1248.9 1016.1 2264.9 2264.9 2264.9z"/><path d="M540 3155.8c1210.8 0 2195.8-985 2195.8-2195.8 0-1210.8-985-2195.8-2195.8-2195.8-1210.8 0-2195.8 985-2195.8 2195.8 0 1210.8 985.1 2195.8 2195.8 2195.8z"/><path d="M540 3083.6c1171 0 2123.6-952.7 2123.6-2123.6 0-1171-952.6-2123.6-2123.6-2123.6S-1583.6-210.9-1583.6 960c0 1171 952.7 2123.6 2123.6 2123.6z"/><path d="M540 3012.8c1131.9 0 2052.8-920.9 2052.8-2052.8S1671.9-1092.8 540-1092.8-1512.8-171.9-1512.8 960-591.9 3012.8 540 3012.8z"/><path d="M540 2943.4c1093.7 0 1983.4-889.7 1983.4-1983.4S1633.7-1023.4 540-1023.4-1443.4-133.7-1443.4 960c.1 1093.7 889.8 1983.4 1983.4 1983.4z"/><path d="M540 2876.5c-1056.7 0-1916.5-859.7-1916.5-1916.5S-516.7-956.5 540-956.5 2456.5-96.8 2456.5 960 1596.8 2876.5 540 2876.5"/><path d="M540-889.5C-479.8-889.5-1309.5-59.8-1309.5 960S-479.8 2809.5 540 2809.5 2389.5 1979.8 2389.5 960C2389.6-59.8 1559.9-889.5 540-889.5"/><path d="M540-822.6c983 0 1782.7 799.7 1782.7 1782.6S1523 2742.6 540 2742.6c-982.9 0-1782.6-799.7-1782.6-1782.6S-442.9-822.6 540-822.6z"/><circle cx="540.1" cy="956.3" r="1715.7"/><circle cx="540" cy="956.3" r="1648.7"/><path d="M540 2541.8c872.2 0 1581.8-709.6 1581.8-1581.8 0-872.2-709.6-1581.8-1581.8-1581.8-872.2 0-1581.8 709.6-1581.8 1581.8.1 872.2 709.6 1581.8 1581.8 1581.8z"/><circle cx="540.1" cy="960" r="1514.9"/><circle cx="540" cy="960" r="1447.9"/><circle cx="540.1" cy="960" r="1381"/><circle cx="540.1" cy="960" r="1314.1"/><circle cx="540.1" cy="960" r="1247.1"/><path d="M1231 3.7c-194.4-140.8-433.1-223.9-691-223.9-650.7 0-1180.1 529.4-1180.1 1180.2S-110.7 2140.2 540 2140.2c650.8 0 1180.2-529.4 1180.2-1180.2.1-393-193-741.7-489.2-956.3"/><path d="M540-153.3c613.9 0 1113.3 499.4 1113.3 1113.3S1153.9 2073.3 540 2073.3-573.3 1573.9-573.3 960C-573.2 346.2-73.8-153.3 540-153.3z"/><circle cx="540.1" cy="960" r="1046.3"/><path d="M540-19.4c540.1 0 979.4 439.4 979.4 979.4 0 540.1-439.4 979.4-979.4 979.4S-439.4 1500-439.4 960 0-19.4 540-19.4z"/><path d="M-372.4 960c0 503.1 409.3 912.5 912.5 912.5 503.1 0 912.5-409.3 912.5-912.5 0-503.1-409.3-912.5-912.5-912.5S-372.4 456.9-372.4 960z"/><path d="M-305.5 960c0-466.2 379.3-845.5 845.5-845.5s845.6 379.3 845.6 845.5-379.3 845.5-845.6 845.5c-466.2 0-845.5-379.3-845.5-845.5"/><path d="M-238.6 960c0 429.3 349.3 778.6 778.6 778.6s778.6-349.3 778.6-778.6S969.3 181.4 540 181.4-238.6 530.7-238.6 960z"/><path d="M-171.6 960c0-392.4 319.3-711.7 711.7-711.7 392.4 0 711.7 319.3 711.7 711.7 0 392.4-319.3 711.7-711.7 711.7-392.5 0-711.7-319.3-711.7-711.7"/><circle cx="540" cy="960" r="644.7"/><path d="M540 1537.8c-318.6 0-577.8-259.2-577.8-577.8 0-318.6 259.2-577.8 577.8-577.8 318.6 0 577.8 259.2 577.8 577.8.1 318.6-259.1 577.8-577.8 577.8z"/><path d="M29.2 960c0 281.7 229.2 510.9 510.9 510.9S1051 1241.7 1051 960 821.8 449.1 540.1 449.1 29.2 678.3 29.2 960z"/><path d="M96.1 960c0-244.8 199.2-443.9 443.9-443.9 244.8 0 444 199.1 444 443.9 0 244.8-199.1 443.9-443.9 443.9-244.8 0-444-199.1-444-443.9"/>
    </g>
    <g class="art"><path d="M942 1752V274l-30-101c-4-12-13-33-39-33H207c-25 0-35 22-38 33l-30 101v1483c0 18 19 22 42 22h718c30 0 43-12 43-27" fill="#00005e" stroke="#00005e" stroke-width="20"/><path d="M912 173v1370c0 28 2 57 7 85l23 124V274l-30-101zm-49 1385H221c-21 0-39 15-42 35l-26 151c-4 21 16 35 33 35h709c17 0 37-17 34-35l-27-153c-3-20-20-33-39-33zm-724 194 23-124c5-28 7-57 7-85V173l-30 101v1478zM873 140H208c-16 0-28 12-28 27v1348c0 17 14 31 31 31h659c17 0 31-14 31-31V167c0-15-13-27-28-27z" fill="#406186"/><g><text x="50%" y="49%" text-anchor="middle" fill="#c2ff36" style="font-size:250px">16kB</text><text id="sat" x="50%" y="54%" text-anchor="middle" fill="#c2ff36" style="font-size:40px">1367688588777725</text></g></g>
    <script type="text/javascript">//<![CDATA[
    const bitbar = document.getElementById('bitbar16kB');
    bitbar.classList.add('js');
    bitbar.addEventListener('keydown', (event) => {if (event.key == ' ' || event.code == "Space" || event.keyCode == 32 ) {bitbar.classList.toggle('gold')}});
    bitbar.addEventListener('dblclick', event => {bitbar.classList.toggle('gold')});
    bitbar.addEventListener('keydown', (event) => {if (event.key == 's' || event.code == "KeyS" || event.keyCode == 83 ) {bitbar.classList.toggle('sat')}});
    //BITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITBARBITB
    //]]></script>
    </svg>`

    try {
            // Get the current nonce for the account
        let _nonce = await provider.getTransactionCount(wallet.address);

        const tx1 = await contract.storeSVG1(svg1, { nonce: _nonce});
        console.log("Transaction sent: ", tx1.hash);
        await tx1.wait();

        _nonce = await provider.getTransactionCount(wallet.address);
        const tx2 = await contract.storeSVG2(svg2, { nonce: _nonce});
        console.log("Transaction sent: ", tx2.hash);
        await tx2.wait();

        _nonce = await provider.getTransactionCount(wallet.address);
        const tx4 = await contract.storeSVG4(svg4, { nonce: _nonce});
        console.log("Transaction sent: ", tx4.hash);
        await tx4.wait();

        _nonce = await provider.getTransactionCount(wallet.address);
        const tx8 = await contract.storeSVG8(svg8, { nonce: _nonce});
        console.log("Transaction sent: ", tx8.hash);
        await tx8.wait();

        _nonce = await provider.getTransactionCount(wallet.address);
        const tx16 = await contract.storeSVG16(svg16, { nonce: _nonce});
        console.log("Transaction sent: ", tx16.hash);
        await tx16.wait();


      


        // Wait for the transaction to be mined
        //console.log("Transaction mined");
        await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
    }


main();
