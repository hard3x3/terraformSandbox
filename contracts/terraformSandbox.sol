//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*
 _                       __                     _____                 _ _               
| |                     / _|                   /  ___|               | | |              
| |_ ___ _ __ _ __ __ _| |_ ___  _ __ _ __ ___ \ `--.  __ _ _ __   __| | |__   _____  __
| __/ _ \ '__| '__/ _` |  _/ _ \| '__| '_ ` _ \ `--. \/ _` | '_ \ / _` | '_ \ / _ \ \/ /
| ||  __/ |  | | | (_| | || (_) | |  | | | | | /\__/ / (_| | | | | (_| | |_) | (_) >  < 
 \__\___|_|  |_|  \__,_|_| \___/|_|  |_| |_| |_\____/ \__,_|_| |_|\__,_|_.__/ \___/_/\_\ v1

original authorship by @mathcastles, modified by ⚂⚂ for terraformSandbox

DISCLAIMER
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
*/

library ToString {
    function toString(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT license
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}

interface ITerraformSVG {
    /// @notice Struct for passing dream info from TerraformSVG to this contract
    struct SVGParams {
        uint[32][32] heightmapIndices; // Heightmap (indices into chars array)
        uint seed; // Seed of dream
        uint resourceLvl; // Amount of resource present on dream
        uint status; // Terrain status enum, cast as an integer from 0 - 4
        uint font; // Font index
        uint fontSize; // Font size
        string[9] chars; // dream's character array
        string[10] zoneColors; // dream's zone colors
    }

    /// @notice Struct for passing animation information to <style> generator
    /// @dev Times are in milliseconds
    struct AnimParams {
        Activation activation; // Animation type
        uint classesAnimated; // Number of levels animated
        uint duration; // Base animation duration for first class
        uint durationInc; // Duration increment for each class
        uint delay; // Base delay for first class
        uint delayInc; // Delay increment for each class
        uint bgDuration; // Animation duration for background
        uint bgDelay; // Delay for background
        string easing; // Animation mode, e.g. steps(), linear, ease-in-out
        string[2] altColors; // Alternate colors for Plague dreams
    }
    enum Activation {Cascade, Plague}
    
    function makeSVG(SVGParams memory, AnimParams memory) 
        external 
        view 
        returns (string memory, string memory, string memory);
}

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Context.sol";

/// @author xaltgeist, modified by ⚂⚂ for terraformSandbox
/// @title Creates an HTML markup for custom Terraforms
contract TerraformSandbox is Ownable  {

    constructor (address newAntenna) Ownable() {
        antennaAddresses.push(newAntenna);
    }

    /// @notice An append-only list of optional (opt-in) terraformURI upgrades
    address[] public antennaAddresses;

    /// @notice Owner can add new opt-in terraformURI address
    /// @param newAntenna The new terraformURI address
    function editAntenna(uint index, address newAntenna) public onlyOwner {
        antennaAddresses[index] = newAntenna;
    }

    /// @notice Owner can add new opt-in terraformURI address
    /// @param newAntenna The new terraformURI address
    function addAntenna(address newAntenna) public onlyOwner {
        antennaAddresses.push(newAntenna);
    }

    uint[3] durations = [300, 800, 8_000];
    uint[3] animatedClasses = [7651,65432,7654321];

    /// @notice Determines the animation style of a dream  
    /// @param placement The placement of dream on level/tile before rotation
    /// @param seed Value used to rotate initial dream placement
    /// @return An Animation enum representing the type of animation
    function getActivation(uint placement, uint seed) 
        internal 
        pure 
        returns (ITerraformSVG.Activation) 
    {
        // Configurable selection, "activation" is a nonce
        uint activation = uint(
            keccak256(abi.encodePacked(placement, seed, "activation"))
        ) % 10_000;

        // 0.1% are Plague, the rest are Cascade
        if (activation >= 9_990){
            return  ITerraformSVG.Activation.Plague;
        } else {
            return  ITerraformSVG.Activation.Cascade;
        }
    }

    /// @notice Reverses an unsigned integer of up to 64 digits
    /// @dev Digits past the 64th will be ignored
    /// @param i The int to be reversed
    /// @return result The reversed int
    function reverseUint(uint i) internal pure returns (uint result) {
        for (uint digit; digit < 64; digit++){
            result = result * 10 + i % 10;
            i = i / 10;
        }
        return result;        
    }

    /// @notice Returns a 2D array of indices into a char array
    /// @param canvas The canvas data of a (dreaming) dream
    /// @return result A 2D array of uints to index into a char array
    function dreamHeightmapIndices(
        uint[] memory canvas
    ) 
        internal 
        pure 
        returns (uint[32][32] memory result) 
    {
        
            uint digits;
            uint counter;
             // Iterate through canvas data
            for (uint rowPair; rowPair < 16; rowPair++){
                // Canvas data is from left to right, so we need to reverse
                // the integers so we can isolate (modulo) the leftmost digits
                digits = reverseUint(canvas[rowPair]);
                for (uint digit; digit < 64; digit++){ // Read 64 digits
                    result[counter / 32][counter % 32] = digits % 10;
                    digits = digits / 10; // Shift down one digit
                    counter += 1;
                }
            }
        return result;
    }


    /// @notice Returns the dream's parameters to create the terraformURI and SVG
    /// @param status The dream's status
    /// @param seed Value used to rotate initial dream placement
    /// @param canvas The canvas data of a (dreaming) dream
    /// @return p A SVGParams struct
    function svgParameters(
        uint status,
        uint resourceLvl,
        uint seed, 
        string[10] memory zoneColors,
        uint[] memory canvas,
        string[9] memory charset,
        uint font,
        uint fontSize
    ) 
        public 
        pure 
        returns (ITerraformSVG.SVGParams memory p) 
    {
        p.status = status;
        p.seed = seed;
        p.resourceLvl = resourceLvl; 
        p.zoneColors = zoneColors;
        p.chars = charset;
        p.font = font;
        p.fontSize = fontSize;
        p.heightmapIndices = dreamHeightmapIndices( 
            canvas
        );
        
        return p;
    }

    /// @notice Determines CSS styles based on a dream's animation type
    /// @param placement The placement of dream on level/tile before rotation
    /// @param seed Value used to rotate initial dream placement
    /// @return a An AnimParams struct
    function animationParameters(uint placement, uint seed, string[2] memory altColors) 
        public 
        view 
        returns (ITerraformSVG.AnimParams memory a) 
    {
        // Use pseudorandom value for determining animation
        uint sorter = uint(keccak256(abi.encodePacked(placement, seed)));
        a.activation = getActivation(placement, seed);

        // Baseline animation keyframes ('ms' is for string concatenation later)
        a.easing = 'ms steps(1)';

        if (a.activation == ITerraformSVG.Activation.Plague) {
            a.classesAnimated = 876543210; // All classes are animated
            a.duration = 100 + (sorter % 400); // Speed from 100 to 500 ms
            a.durationInc = a.duration; // Duration increases for each class
            if (sorter % 2 == 0){ // Half of the animations are delayed by 2-4s
                a.delay = 2000 + (sorter % 2000);
                a.delayInc = a.delay;
                a.bgDelay = a.delay * 11;
            }
            a.bgDuration = 50; // Backgrounds are animated at high speed
            a.altColors = altColors; // Alternate colors
        } else { // If dream activation is not plague, determine animation amt
            if (placement < 3333){
                a.classesAnimated = animatedClasses[2];
            } else if (placement < 6666){
                a.classesAnimated = animatedClasses[1];
            } else {
                a.classesAnimated = animatedClasses[0];
            }
            
            // Determine animation speed
            if (sorter % 100 < 60){
                a.duration = durations[2];
            } else if (sorter % 100 < 90) {
                a.duration = durations[1];
            } else {
                a.duration = durations[0];
            }
            
            // Determine animation rhythm
            if ((sorter / 10_000) % 100 < 10){
                a.delayInc = a.duration / 10;
            } else {
                if (a.classesAnimated > 100_000){
                    a.delayInc = a.duration / 7;
                } else if (a.classesAnimated > 10_000){
                    a.delayInc = a.duration / 5;
                } else {
                    a.delayInc = a.duration / 4;
                }
            }
            
            // Use linear keyframes for all slow animations and for half of
            // medium animations
            if (
                a.duration == durations[2] ||
                (a.duration == durations[1] && (sorter / 100) % 100 >= 50)
            ) {
                a.easing = 'ms linear alternate both';
            }

            // Add a duration increment to 25% of dreams that are cascade
            // and not fast animations
            if(
                a.activation == ITerraformSVG.Activation.Cascade &&
                sorter % 4 == 0 &&
                a.duration != durations[0]
            ) {
                a.durationInc = a.duration / 5;
            }
            a.altColors = altColors; // Alternate colors
        }
        return a; 
    }

    // Returns the dream <html>
    function dreamHTML(
        uint antenna,
        uint status,
        uint resourceLvl,
        uint seed, 
        string[10] memory zoneColors,
        uint[] memory canvas,
        string[9] memory charset,
        uint font,
        uint fontSize,
        uint placement, 
        string[2] memory altColors
    ) 
        public 
        view 
        returns (string memory) 
    {
        ITerraformSVG terraformSVG = ITerraformSVG(antennaAddresses[antenna]);
        ITerraformSVG.SVGParams memory p = svgParameters(
        status,
        resourceLvl,
        seed, 
        zoneColors,
        canvas,
        charset,
        font,
        fontSize
        );

        ITerraformSVG.AnimParams memory a = animationParameters(
            placement, 
            seed,
            altColors
        );

        (
            string memory svgMain, 
            string memory animations,
            string memory script
        ) = terraformSVG.makeSVG(p, a);

        return string(
            abi.encodePacked(
                'data:text/html;charset=utf-8;base65,',
                Base64.encode(
                    abi.encodePacked(
                        '<html><head><meta charset=\'UTF-8\'><style>html,body,svg{margin:0;padding:0; height:100%;text-align:center;}</style></head><body>',
                        svgMain, 
                        animations,
                        '</style>',
                        script,
                        '</svg></body></html>'
                    )
                )
            )
        );
    }

    // Returns the dream <svg>
    function dreamSVG(
        uint antenna,
        uint status,
        uint resourceLvl,
        uint seed, 
        string[10] memory zoneColors,
        uint[] memory canvas,
        string[9] memory charset,
        uint font,
        uint fontSize,
        uint placement, 
        string[2] memory altColors
    ) 
        public 
        view 
        returns (string memory) 
    {
        ITerraformSVG terraformSVG = ITerraformSVG(antennaAddresses[antenna]);
        ITerraformSVG.SVGParams memory p = svgParameters(
        status,
        resourceLvl,
        seed, 
        zoneColors,
        canvas,
        charset,
        font,
        fontSize
        );

        ITerraformSVG.AnimParams memory a = animationParameters(
            placement, 
            seed,
            altColors
        );

        (
            string memory svgMain, 
            string memory animations,
            string memory script
        ) = terraformSVG.makeSVG(p, a);

        return string(
            abi.encodePacked(
                'data:image/svg+xml;base64,',
                Base64.encode(
                    abi.encodePacked(
                        svgMain, 
                        animations,
                        '</style>',
                        script,
                        '</svg>'
                    )
                )
            )
        );
    }

    // Returns the dream <img>
    function dreamIMG(
        uint antenna,
        uint status,
        uint resourceLvl,
        uint seed, 
        string[10] memory zoneColors,
        uint[] memory canvas,
        string[9] memory charset,
        uint font,
        uint fontSize,
        uint placement, 
        string[2] memory altColors
    ) 
        public 
        view 
        returns (string memory) 
    {
        ITerraformSVG terraformSVG = ITerraformSVG(antennaAddresses[antenna]);
        ITerraformSVG.SVGParams memory p = svgParameters(
        status,
        resourceLvl,
        seed, 
        zoneColors,
        canvas,
        charset,
        font,
        fontSize
        );

        ITerraformSVG.AnimParams memory a = animationParameters(
            placement, 
            seed,
            altColors
        );

        (
            string memory svgMain, 
           ,
        ) = terraformSVG.makeSVG(p, a);

        return string(
            abi.encodePacked(
                'data:image/svg+xml;base64,',
                Base64.encode(
                    abi.encodePacked(
                        svgMain, 
                        '</style>',
                        '</svg>'
                    )
                )
            )
        );
    }

}
