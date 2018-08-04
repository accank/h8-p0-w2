//1. Menyusun Barisan Bintang
var rows1 = 5;
var arterisk1 = '';
for(i = 0; i < rows1; i++){
	arterisk1 = arterisk1 + '*';
  console.log(arterisk1[i]);  
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
for(j = 0; j < rows2; j++){
  var arterisk2 = ''
  for(k = 0; k < rows2; k++){
    arterisk2 = arterisk2 + '*';
  }  
  console.log(arterisk2);
}

//3. Menyusun Barisan Tangga Bintang Looping
var rows3 = 5;
var arterisk3 = '';
for(l = 0; l < rows3; l++){
	arterisk3 = arterisk3 + '*';
  console.log(arterisk3);  
}