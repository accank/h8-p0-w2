//menghitung konversi menit
function konversiMenit(menit) {

	var hitungMenit = menit/60;
	var sisaMenit = menit%60;
	var nilaiKonversi = Math.floor(hitungMenit) + ':0' + sisaMenit;

		if(sisaMenit < 10){
		  return nilaiKonversi
		} else {
		  var nilaiKonversi1 = Math.floor(hitungMenit) + ':' +sisaMenit;
			return nilaiKonversi1
		}

}

//TES CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00