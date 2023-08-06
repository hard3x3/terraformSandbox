# ▚ ⍝ ⩎ ▟ ▙ ◍ ✗
[Terraform Sandbox](https://terraformsandbox.hard3x3.eth.limo/) is a digital playground for artists, creators, and enthusiasts to explore [terraforms by mathcastles](https://terraformexplorer.xyz/).  This tool creates custom base64 encoded terraform parcels (e.g. html, svg, and img) via its front end or by calling the [terraformSandbox contract](https://etherscan.io/address/0x0ffe9697c852cbbb35e4eef49cbc948daf855d63#code) directly. Relevant parameters include:

* Antenna
* Status
* ResourceLvl
* Seed
* ZoneColors
* Canvas
* Charset
* Font
* FontSize
* Placement
* AltColors

### Antenna [uint256]
Terraform implementations within the terraformSandbox are contract specific and each address is stored in the antennaAddresses[] array. Calling "0" will provide the original implementation. Future antennas released by @mathcastles may, upon their permission, be added.

### Status [uint256]
Status set the mode of the terraform parcels, which include:
* Terrain: "0"
* Daydream: "1"
* Terraform: "2"
* Origin Daydream: "3"

### ResourceLvl [uint256]
The resource level modifies the animation of cycling characters. Lower numbers will result in a more static parcel, while higher numbers cycle characters across the entire grid. 

Recommended range: "4000" - "60000".

### Seed [uint256]
The seed has multiple purposes determining the animation distortion, speed of parcels, chroma, and character set. 
* 0 < 5000: less distortion when terraformed
* 5000 < 6500: small distortion with greater speed when terraformed
* 6500 > 9950: large distortion with slower speed when terraformed
* 9500 > 9970: (y) seeds
* 9970 < 10000: (x) seeds

### ZoneColors [string[10]]
Zone colors are an array of ten (10) strings as CSS hex values (i.e. "#ffffff"), where the first 9 colors align to characters and the 10th is the parcel background.

### Canvas [uint256[]]
Also known as a height map, this is an array consisting of 16 values containing a number of 64 digits in length. You can export an example of a canvas from [enter dream](www.enterdream.xyz).

### Charset [string[9]]
The character set is an array of nine (9) strings with a single character.

### Font [uint256]
The font pulled from the original terraform character address. Must be values between 0 and 16.

### FontSize [uint256]
The size of the characters in px.

## Addresses

arweave: [AihZmVjdtFhnyjkrejfhN2Ve1FUp505RegoVx75fN6I](https://aiuftgky3w2fqz6khevxun7bg5sv5vcvfhtu4ul2bik4pps7g6ra.arweave.net/AihZmVjdtFhnyjkrejfhN2Ve1FUp505RegoVx75fN6I)

terraformSVG: [0x49e0872d6b0758f70c86b29fce306aad66b3e391](https://etherscan.io/address/0x49e0872d6b0758f70c86b29fce306aad66b3e391#code)

terraformSandbox: [0x0ffe9697c852cbbb35e4eef49cbc948daf855d63](https://etherscan.io/address/0x0ffe9697c852cbbb35e4eef49cbc948daf855d63#code)

## Attribution
Terraform Sandbox is not an original work, rather it is a visualization tool of terraforms based on the immense talent of [@mathcastles](https://twitter.com/mathcastles) and others, including without limitation:

* [@113](https://twitter.com/0x113d)
* [@xaltgeist](https://twitter.com/xaltgeist)
* [@el_rayne](https://twitter.com/el__ranye)
