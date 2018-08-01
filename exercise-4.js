var tanggal = prompt("masukkan tanggal (1 - 31):", "");
var bulan = prompt("Masukkan bulan (1-12):", "");
var tahun = prompt("Masukkan tahun (1900 - 2200):", "");
switch(bulan){
  case "1": { document.write(tanggal+ " Januari " +tahun); break; }
  case "2": { document.write(tanggal + " Februari " + tahun); break; }
  case "3": { document.write(tanggal + " Maret " + tahun); break; }
  case "4": { document.write(tanggal + " April " + tahun); break; }
  case "5": { document.write(tanggal + " Mei " + tahun); break; }
  case "6": { document.write(tanggal + " Juni " + tahun); break; }
  case "7": { document.write(tanggal + " Juli " + tahun); break; }
  case "8": { document.write(tanggal + " Agustus " + tahun); break; }
  case "9": { document.write(tanggal + " September " + tahun); break; }
  case "10": { document.write(tanggal + " Oktober " + tahun); break; }
  case "11": { document.write(tanggal + " Nopember " + tahun); break; }
  case "12": { document.write(tanggal + " Desember " + tahun); break; }
}