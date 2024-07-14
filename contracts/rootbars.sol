// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract gnosisBars is ERC1155 {
    uint256 public mintDeadline;

    modifier beforeDeadline() {
        require(block.timestamp < mintDeadline, "Minting period has ended");
        _;
    }
  
    string public svg1;
    uint public count1;
    mapping(uint => string) array1;

    string public svg2; 
    uint public count2;
    mapping(uint => string) array2;

    string public svg4;
    uint public count4;
    mapping(uint => string) array4;

    string public svg8;
    uint public count8;
    mapping(uint => string) array8;

    string public svg16;
    uint public count16;
    mapping(uint => string) array16;


      constructor() ERC1155("Gnosis Bars") 
    {
        mintDeadline = block.timestamp + 1 weeks;
    }


//store 
//ids 
//0 = 1kB
//1 = 2kB
//2 = 4kB
//3 = 8kB
//4 = 16kB
    function storeSVG1( string memory _svgData) public beforeDeadline {
        svg1 = _svgData;
    }
    function storeSVG2( string memory _svgData) public beforeDeadline{
        svg2 = _svgData;
    }
    function storeSVG4( string memory _svgData) public beforeDeadline{
        svg4 = _svgData;
    }
    function storeSVG8( string memory _svgData) public beforeDeadline{
        svg8 = _svgData;
    }
    function storeSVG16( string memory _svgData) public beforeDeadline{
        svg16 = _svgData;
    }

    function mint1(address account, uint256 amount)
        public
        beforeDeadline
    {
        for(uint k = 0; k<amount; k++){
            array1[count1+k] = svg1;
        }
        count1 += amount;
 
        _mint(account, 0, amount,"");
    }

    function mint2(address account, uint256 amount)
        public
        beforeDeadline
    {
        for(uint k = 0; k<amount; k++){
            array2[count2+k] = svg2;
        }
        count2 += amount;
 
        _mint(account, 0, amount,"");
    }

    function mint4(address account, uint256 amount)
        public
        beforeDeadline
    {
        for(uint k = 0; k<amount; k++){
            array4[count4+k] = svg4;
        }
        count4 += amount;
 
        _mint(account, 0, amount,"");
    }

    function mint8(address account, uint256 amount)
        public
        beforeDeadline
    {
        for(uint k = 0; k<amount; k++){
            array8[count8+k] = svg8;
        }
        count8 += amount;
 
        _mint(account, 0, amount,"");
    }

    function mint16(address account, uint256 amount)
        public
        beforeDeadline
    {
        for(uint k = 0; k<amount; k++){
            array16[count16+k] = svg16;
        }
        count16 += amount;
 
        _mint(account, 0, amount,"");
    }

    // function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    //     public
    //     beforeDeadline
    // {
    //     _mintBatch(to, ids, amounts, data);
    // }
}
