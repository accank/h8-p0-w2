//Input nama dan peran -- Ksatria, Tabib, dan Penyihir
var nama = "ahsan";
var peran = "Tabib";

// Output untuk Input nama = '' dan peran = ''
if(nama == ""){
  console.log("Nama harus diisi");
} else {
  if(nama !== "" && peran == ""){

    //Output untuk Input nama = 'any name' dan peran = ''
    document.write("Halo," + nama + " Pilih peranmu untuk memulai game!");
  } else {

    //Output untuk Input nama = 'any name' dan peran 'Ksatria'
    if(nama !== "" && peran == "Ksatria"){
      console.log("Selamat datang di Dunia Proxytia, " + nama + ".");
      console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
          } else {
    
    //Output untuk Input nama = 'any name' dan peran 'Tabib'
    if(nama !== "" && peran == "Tabib"){
      console.log("Selamat datang di Dunia Proxytia, " + nama + ".");
      console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
    } else {

      //Output untuk Input nama = 'any name' dan peran 'Penyihir'
      if(nama !== "" && peran == "Penyihir"){
        console.log("Selamat datang di Dunia Proxytia, " + nama + ".");
        console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
      }
    }
  }
  }
}