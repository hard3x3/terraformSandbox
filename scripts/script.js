function openModal() {
	const modal = document.getElementById('myModal');
	modal.style.display = 'block';
}

function closeModal() {
	const modal = document.getElementById('myModal');
	modal.style.display = 'none';
}

window.onload = function() {
	randomDream();
}

window.oncontextmenu = function () {
	return false;     
}

async function callDream(a, b, c, d, e, f, g, h, i, j, k) {
	var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/[ENTERKEY]");
	const abi = [{"inputs":[{"internalType":"address","name":"newAntenna","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"newAntenna","type":"address"}],"name":"addAntenna","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"string[2]","name":"altColors","type":"string[2]"}],"name":"animationParameters","outputs":[{"components":[{"internalType":"enum ITerraformSVG.Activation","name":"activation","type":"uint8"},{"internalType":"uint256","name":"classesAnimated","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"},{"internalType":"uint256","name":"durationInc","type":"uint256"},{"internalType":"uint256","name":"delay","type":"uint256"},{"internalType":"uint256","name":"delayInc","type":"uint256"},{"internalType":"uint256","name":"bgDuration","type":"uint256"},{"internalType":"uint256","name":"bgDelay","type":"uint256"},{"internalType":"string","name":"easing","type":"string"},{"internalType":"string[2]","name":"altColors","type":"string[2]"}],"internalType":"struct ITerraformSVG.AnimParams","name":"a","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"antennaAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"antenna","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"resourceLvl","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"},{"internalType":"string[9]","name":"charset","type":"string[9]"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontSize","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"string[2]","name":"altColors","type":"string[2]"}],"name":"dreamHTML","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"antenna","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"resourceLvl","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"},{"internalType":"string[9]","name":"charset","type":"string[9]"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontSize","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"string[2]","name":"altColors","type":"string[2]"}],"name":"dreamIMG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"antenna","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"resourceLvl","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"},{"internalType":"string[9]","name":"charset","type":"string[9]"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontSize","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"string[2]","name":"altColors","type":"string[2]"}],"name":"dreamSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"newAntenna","type":"address"}],"name":"editAntenna","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"resourceLvl","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"},{"internalType":"string[9]","name":"charset","type":"string[9]"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontSize","type":"uint256"}],"name":"svgParameters","outputs":[{"components":[{"internalType":"uint256[32][32]","name":"heightmapIndices","type":"uint256[32][32]"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"resourceLvl","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontSize","type":"uint256"},{"internalType":"string[9]","name":"chars","type":"string[9]"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"}],"internalType":"struct ITerraformSVG.SVGParams","name":"p","type":"tuple"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
	const address = '[ENTERADDRESS]';
	var contract = new web3.eth.Contract(abi, address);
	// using the promise
	contract.methods.dreamSVG(a,b,c,d,e,f,g,h,i,j,k).call({from: '0x0000000000000000000000000000000000000000'})
	.then(function(result){
		document.getElementById('view').src = result;
    document.getElementById('exportSVG').innerHTML = result;
	});
}

function getRandomCharacters() {
	const startRange = 0x2500; // U+2580
	const endRange = 0x25FF;   // U+259F
	const randomCodePoint = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
	const randomCharacter = String.fromCharCode(randomCodePoint);
	return randomCharacter;
}

function getRandomColors() {
	const randomColors = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	return randomColors;
}

function randomDream() {
	const canvas_ = "[5432100013445566554333334455555443210000023455776544333344567655,4321000001234557755443344557765443210000001234556655444455666544,4321000000023345566555555666544332100000000123455676666677655432,3210000000012345567777788765421021000000001233455567778887543100,1000000002234445555557788754200000000001234445554444556787542000,0000001234555555443344567654200000000123445555543333345565543100,1111122344555544322233455554321122222233444444432222334556554322,3333333333333332222233455765443344333333222222221112234556655444,4444332211111110000122345555544454443220000000000000122344444444,5443320000000000000001223344333454332000000000000000001233333333,5432100000000111000000122322222243210000000012222100012233221112,4321000000012333321112233322101143210000001234443322223444321011,4321000000234555443333455432111143210000012345555444445665431001,4321000002344556655556787542100043321000023345567777888885421000,5432100012334455788888887532000054332100122333456888888754310000,5443211112233344578887654321000055432211223333445788755432100000]";
	var canvas = canvas_.slice(1, -1).split(',').map(item => item.trim());
	const antenna = 0;
	const status = Math.floor(Math.random() * 4);
	const resourceLvl = Math.floor(Math.random() * 100000);
	const seed = Math.floor(Math.random() * 10000);
	const font = Math.floor(Math.random() * 14);
	const fontSize = Math.floor(Math.random() * 9) + 16;
	const placement = Math.floor(Math.random() * 10000);
	const charset_0 = getRandomCharacters();
	const charset_1 = getRandomCharacters();
	const charset_2 = getRandomCharacters();
	const charset_3 = getRandomCharacters();
	var zoneColors_0 = getRandomColors();
	var zoneColors_1 = getRandomColors();
	var zoneColors_2 = getRandomColors(); 
	var zoneColors_3 = getRandomColors(); 
	const z0 = document.getElementsByClassName("zoneColors")[0];
	const z1 = document.getElementsByClassName("zoneColors")[1];
	const z2 = document.getElementsByClassName("zoneColors")[2];
	const z3 = document.getElementsByClassName("zoneColors")[3];
	const z4 = document.getElementsByClassName("zoneColors")[4];
	const z5 = document.getElementsByClassName("zoneColors")[5];
	const z6 = document.getElementsByClassName("zoneColors")[6];
	const z7 = document.getElementsByClassName("zoneColors")[7];
	const z8 = document.getElementsByClassName("zoneColors")[8];
	const z9 = document.getElementsByClassName("zoneColors")[9];
	const c0 = document.getElementsByClassName("charset")[0];
	const c1 = document.getElementsByClassName("charset")[1];
	const c2 = document.getElementsByClassName("charset")[2];
	const c3 = document.getElementsByClassName("charset")[3];
	const c4 = document.getElementsByClassName("charset")[4];
	const c5 = document.getElementsByClassName("charset")[5];
	const c6 = document.getElementsByClassName("charset")[6];
	const c7 = document.getElementsByClassName("charset")[7];
	const c8 = document.getElementsByClassName("charset")[8];
	const a0 = document.getElementsByClassName("altColors")[0];
	const a1 = document.getElementsByClassName("altColors")[1];
	document.querySelector(".antenna").value = antenna;
	document.querySelector(".status").value = status;
	document.querySelector(".resourceLvl").value = resourceLvl;
	document.querySelector(".seed").value = seed;
	document.querySelector(".canvas").value = canvas_;
	document.querySelector(".font").value = font;
	document.querySelector(".fontSize").value = fontSize;
	document.querySelector(".placement").value = placement;
	var colorCount = Math.floor(Math.random() * 3) + 2;
	if(colorCount == 2) {
		z0.value = zoneColors_0;
		z1.value = zoneColors_0;
		z2.value = zoneColors_0;
		z3.value = zoneColors_0;
		z4.value = zoneColors_0;
		z5.value = zoneColors_0;
		z6.value = zoneColors_0;
		z7.value = zoneColors_0;
		z8.value = zoneColors_0;
		z9.value = zoneColors_3;
	} else if(colorCount == 3) {
		z0.value = zoneColors_0;
		z1.value = zoneColors_0;
		z2.value = zoneColors_1;
		z3.value = zoneColors_1;
		z4.value = zoneColors_1;
		z5.value = zoneColors_0;
		z6.value = zoneColors_0;
		z7.value = zoneColors_0;
		z8.value = zoneColors_0;
		z9.value = zoneColors_2;
	} else {
		z0.value = zoneColors_0;
		z1.value = zoneColors_1;
		z2.value = zoneColors_2;
		z3.value = zoneColors_0;
		z4.value = zoneColors_1;
		z5.value = zoneColors_2;
		z6.value = zoneColors_0;
		z7.value = zoneColors_1;
		z8.value = zoneColors_2;
		z9.value = zoneColors_3;
	}
	var charCount = Math.floor(Math.random() * 3) + 2;
	if(charCount == 2) {
		c0.value = charset_0;
		c1.value = charset_0;
		c2.value = charset_0;
		c3.value = charset_1;
		c4.value = charset_1;
		c5.value = charset_1;
		c6.value = charset_1;
		c7.value = charset_1;
		c8.value = charset_0;
	} else if(charCount == 3) {
		c0.value = charset_0;
		c1.value = charset_0;
		c2.value = charset_0;
		c3.value = charset_1;
		c4.value = charset_1;
		c5.value = charset_2;
		c6.value = charset_2;
		c7.value = charset_2;
		c8.value = charset_2;
	} else {
		c0.value = charset_0;
		c1.value = charset_0;
		c2.value = charset_1;
		c3.value = charset_1;
		c4.value = charset_2;
		c5.value = charset_2;
		c6.value = charset_1;
		c7.value = charset_1;
		c8.value = charset_3;
	}
	a0.value = "#000000";
	a1.value = "#ffffff";
	const zColors = [
		String(z0.value),
		String(z1.value),
		String(z2.value),
		String(z3.value),
		String(z4.value),
		String(z5.value),
		String(z6.value),
		String(z7.value),
		String(z8.value),
		String(z9.value)
	];
	const char = [
		String(c0.value),
		String(c1.value),
		String(c2.value),
		String(c3.value),
		String(c4.value),
		String(c5.value),
		String(c6.value),
		String(c7.value),
		String(c8.value)
	];
	const aColors = [
		String(a0.value),
		String(a1.value)
	];
	callDream(antenna, status, resourceLvl, seed, zColors, canvas, char, font, fontSize, placement, aColors)
}

function configDream(){
	const antenna = document.getElementsByClassName("antenna")[0].value;
	const status = document.getElementsByClassName("status")[0].value;
	const resourceLvl = document.getElementsByClassName("resourceLvl")[0].value;
	const seed = document.getElementsByClassName("seed")[0].value;
	const z0 = document.getElementsByClassName("zoneColors")[0];
	const z1 = document.getElementsByClassName("zoneColors")[1];
	const z2 = document.getElementsByClassName("zoneColors")[2];
	const z3 = document.getElementsByClassName("zoneColors")[3];
	const z4 = document.getElementsByClassName("zoneColors")[4];
	const z5 = document.getElementsByClassName("zoneColors")[5];
	const z6 = document.getElementsByClassName("zoneColors")[6];
	const z7 = document.getElementsByClassName("zoneColors")[7];
	const z8 = document.getElementsByClassName("zoneColors")[8];
	const z9 = document.getElementsByClassName("zoneColors")[9];
	const zColors = [
		String(z0.value),
		String(z1.value),
		String(z2.value),
		String(z3.value),
		String(z4.value),
		String(z5.value),
		String(z6.value),
		String(z7.value),
		String(z8.value),
		String(z9.value)
	];
	var canvas_ = document.getElementsByClassName("canvas")[0].value;
	const canvas = canvas_.slice(1, -1).split(',').map(item => item.trim());
	const c0 = document.getElementsByClassName("charset")[0];
	const c1 = document.getElementsByClassName("charset")[1];
	const c2 = document.getElementsByClassName("charset")[2];
	const c3 = document.getElementsByClassName("charset")[3];
	const c4 = document.getElementsByClassName("charset")[4];
	const c5 = document.getElementsByClassName("charset")[5];
	const c6 = document.getElementsByClassName("charset")[6];
	const c7 = document.getElementsByClassName("charset")[7];
	const c8 = document.getElementsByClassName("charset")[8];
	const char = [
		String(c0.value),
		String(c1.value),
		String(c2.value),
		String(c3.value),
		String(c4.value),
		String(c5.value),
		String(c6.value),
		String(c7.value),
		String(c8.value)
	];
	const font = document.getElementsByClassName("font")[0].value;
	const fontSize = document.getElementsByClassName("fontSize")[0].value;
	const placement = document.getElementsByClassName("placement")[0].value;
	const a0 = document.getElementsByClassName("altColors")[0];
	const a1 = document.getElementsByClassName("altColors")[1];
	const aColors = [
		String(a0.value),
		String(a1.value)
	];
	callDream(antenna, status, resourceLvl, seed, zColors, canvas, char, font, fontSize, placement, aColors);
}

function base64EncodeUnicode(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  let base64String = '';
  for (let i = 0; i < bytes.length; i++) {
    base64String += String.fromCharCode(bytes[i]);
  }
  return btoa(base64String);
}

function openJSONInNewWindow(base64Data) {
  const jsonData = atob(base64Data);
  const utf8Array = new Uint8Array(jsonData.length);
  for (let i = 0; i < jsonData.length; i++) {
    utf8Array[i] = jsonData.charCodeAt(i);
  }
  const blob = new Blob([utf8Array], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}

function exportData() {
	const antenna = document.getElementsByClassName("antenna")[0].value;
	const status = document.getElementsByClassName("status")[0].value;
	const resourceLvl = document.getElementsByClassName("resourceLvl")[0].value;
	const seed = document.getElementsByClassName("seed")[0].value;
	const z0 = document.getElementsByClassName("zoneColors")[0];
	const z1 = document.getElementsByClassName("zoneColors")[1];
	const z2 = document.getElementsByClassName("zoneColors")[2];
	const z3 = document.getElementsByClassName("zoneColors")[3];
	const z4 = document.getElementsByClassName("zoneColors")[4];
	const z5 = document.getElementsByClassName("zoneColors")[5];
	const z6 = document.getElementsByClassName("zoneColors")[6];
	const z7 = document.getElementsByClassName("zoneColors")[7];
	const z8 = document.getElementsByClassName("zoneColors")[8];
	const z9 = document.getElementsByClassName("zoneColors")[9];
	const zColors = [
		String(z0.value),
		String(z1.value),
		String(z2.value),
		String(z3.value),
		String(z4.value),
		String(z5.value),
		String(z6.value),
		String(z7.value),
		String(z8.value),
		String(z9.value)
	];
	var canvas_ = document.getElementsByClassName("canvas")[0].value;
	const canvas = canvas_.slice(1, -1).split(',').map(item => item.trim());
	const c0 = document.getElementsByClassName("charset")[0];
	const c1 = document.getElementsByClassName("charset")[1];
	const c2 = document.getElementsByClassName("charset")[2];
	const c3 = document.getElementsByClassName("charset")[3];
	const c4 = document.getElementsByClassName("charset")[4];
	const c5 = document.getElementsByClassName("charset")[5];
	const c6 = document.getElementsByClassName("charset")[6];
	const c7 = document.getElementsByClassName("charset")[7];
	const c8 = document.getElementsByClassName("charset")[8];
	const char = [
		String(c0.value),
		String(c1.value),
		String(c2.value),
		String(c3.value),
		String(c4.value),
		String(c5.value),
		String(c6.value),
		String(c7.value),
		String(c8.value)
	];
	const font = document.getElementsByClassName("font")[0].value;
	const fontSize = document.getElementsByClassName("fontSize")[0].value;
	const placement = document.getElementsByClassName("placement")[0].value;
	const a0 = document.getElementsByClassName("altColors")[0];
	const a1 = document.getElementsByClassName("altColors")[1];
	const aColors = [
		String(a0.value),
		String(a1.value)
	];
  const svg = document.getElementById("exportSVG").innerHTML;
  var obj = {
  antenna:  antenna, 
  status: status,
  resourceLvl: resourceLvl,
  seed: seed,
  zoneColors: zColors,
  canvas: canvas,
  charset: char,
  font: font,
  fontSize: fontSize,
  placement: placement,
  altColors: aColors,
  svg: svg
  };
  const base64Data = base64EncodeUnicode(JSON.stringify(obj));
	openJSONInNewWindow(base64Data);
}
