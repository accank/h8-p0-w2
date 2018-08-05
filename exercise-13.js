//Logic Challenge - X dan O
function xo(str){  
  var stro = '';
  var strx = '';
  
  //loop untuk mendeteksi huruf o dan x
    for(var i = 0; i < str.length; i++){

      //mendeteksi huruf 'o' dan mengembalikan ke 'stro'
      if(str[i] == 'o'){
      stro += 'o'            
      } else {

        //mendeteksi huruf 'x' dan mengembalikan ke 'strx'
        strx += 'x'
      }                  
    }
   //me-return 'true' jika jumlah huruf 'o' sama dengan huruf 'x' 
    if(strx.length == stro.length){   
      return 'true'

      //me-return 'false' jika jumlah huruf 'o' tidak sama dengan huruf 'x'
    } else {    
      return 'false'
    }
}

// // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true