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

Recommended range: 4000 - 60000.

## Addresses

arweave: [AihZmVjdtFhnyjkrejfhN2Ve1FUp505RegoVx75fN6I](https://aiuftgky3w2fqz6khevxun7bg5sv5vcvfhtu4ul2bik4pps7g6ra.arweave.net/AihZmVjdtFhnyjkrejfhN2Ve1FUp505RegoVx75fN6I)

terraformSVG: [0x49e0872d6b0758f70c86b29fce306aad66b3e391](https://etherscan.io/address/0x49e0872d6b0758f70c86b29fce306aad66b3e391#code)

terraformSandbox: [0x0ffe9697c852cbbb35e4eef49cbc948daf855d63](https://etherscan.io/address/0x0ffe9697c852cbbb35e4eef49cbc948daf855d63#code)

## Attribution
Terraform Sandbox is not an original work, rather it is a visualization tool of terraforms based on the immense talent of [@mathcastles](https://twitter.com/mathcastles) and others, including without limitation:

* [@113](https://twitter.com/0x113d)
* [@xaltgeist](https://twitter.com/xaltgeist)
* [@el_rayne](https://twitter.com/el__ranye)
