//[[A,E,O,U],[O,U,E,A],[E,O,U,E],[U,E,A,H],[O,U,E,Q],[E,Q,H,I]]

// arr.length*2
// var ulang = arr.length * arr.length;
function getVowel(row, column) {
	//Membuat random array
	const vocals = 'AIUEO';
	const dict = 'BCDFGHJKLMNPQRSTVWXYZ';
	let counter = 0;
	let arr = [];
	for (let i = 0; i < row; i++) {
		let temp = [];
		for (let j = 0; j < column; j++) {
			let chance = Math.round(Math.random());
			if (chance === 1) {
				let random = Math.floor(Math.random() * vocals.length);
				temp.push(vocals[random]);
			} else {
				let random = Math.floor(Math.random() * dict.length);
				temp.push(dict[random]);
			}
		}
		arr.push(temp);
	}
 console.log(arr)
	let kotak = [];
	let poros = 0;
	counter = 0;
	let angka = 0;
	for (var i = 0; i < (row * 2) + 2; i++) {
		kotak.push([]);
	}
//membuat array yang diatas menjadi pengelompokkan arr 2X2
	for (var j = 0; j < arr.length; j++) {
		if (kotak[kotak.length - 1].length === 4) {
			break;
		}
		if (kotak[angka].length === 4) {
			angka++;
			j--;
		}
		counter = 0;
		for (var k = 0; k < arr[j].length; k++) {
			if (counter === 2) {
				break;
			} else {
				kotak[angka].push(arr[j][k + poros]);

				counter++;
			}
		}

		if (j === arr.length - 1) {
			poros++;

			j = j - (arr.length - 1);
		}
	}
	// console.log(kotak);
	let hasil = 0;

	for (var i = 0; i < kotak.length; i++) {
		temp = 0;
		for (var j = 0; j < kotak[i].length; j++) {
			for (var k = 0; k < vocals.length; k++) {
				if (kotak[i][j] === vocals[k]) {
					temp++;
				}
			}
		}
		if (temp === 4) {
			hasil++;
		}
	}
	return hasil;
}

console.log(getVowel(5, 4));
