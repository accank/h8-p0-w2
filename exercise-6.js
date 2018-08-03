//1. Melakukan Looping Menggunakan While

var deret = 2;
console.log('LOOPING PERTAMA');
while(deret <= 20){
  console.log(deret + ' - I Love Coding');
  deret += 2;
}


var deret2 = 22;
console.log('LOOPING KEDUA');
while(deret2 > 2){ 
  deret2 -= 2; 
  console.log(deret2 + ' - I will become fullstack developer')
}

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for(var deret3 = 1; deret3 <= 20; deret3++) {
  console.log(deret3 + ' - I Love Coding');
}

console.log('LOOPING KEDUA');
for(var deret4 = 20; deret4 > 0; deret4 -= 1) {
  console.log(deret4 + ' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap

var counter = 1;
console.log('LOOPING PERTAMA');
while(counter <= 100){
  console.log('Counter sekarang - ' + counter);
  if(counter%2 == 0){
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
  counter += 1;
  
}


//contoh - untuk pertambahan counter 2

var counter2 = 1;
console.log('LOOPING KEDUA');
while(counter2 <= 100){
  console.log('Counter sekarang - ' + counter2);
  if(counter2%3 == 0){
    console.log(counter2 + ' KELIPATAN 3');
  } else {
    console.log(' ');
  }
  counter2 += 2;
  
}


//contoh - untuk pertambahan counter 5

var counter3 = 1;
console.log('LOOPING KETIGA');
while(counter3 <= 100){
  console.log('Counter sekarang - ' + counter3);
  if(counter3%6 == 0){
    console.log(counter3 + ' KELIPATAN 6');
  } else {
    console.log(' ');
  }
  counter3 += 5;
  
}

//contoh - untuk pertambahan counter 9

var counter4 = 1;
console.log('LOOPING KETIGA');
while(counter4 <= 100){
  console.log('Counter sekarang - ' + counter4);
  if(counter4%10 == 0){
    console.log(counter4 + ' KELIPATAN 10');
  } else {
    console.log(' ');
  }
  counter4 += 9;
  
}