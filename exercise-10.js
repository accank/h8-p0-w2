// membandingkan angka
function bandingkanAngka(angka1, angka2) {

	//jika angka2 lebih besar angka1 bernilai true
  if(angka2 > angka1){
    return 'true';

    //jika angka2 lebih kecil angka1 bernilai false
  } else if(angka2 < angka1){
    return 'false';

    ////jika angka2 sama dengan angka1 bernilai -1
  } else {
    return -1;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false