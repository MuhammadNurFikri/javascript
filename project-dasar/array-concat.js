// program penggabungan dua variabel menjadi satu di dalam array dengan concat
function panggilConcat() {
  var kota = ["jakarta","medan","bekasi","malang"];
  var provinsi = ["Jawa Tengah","Sumatra","Jawa Barat","Jawa Timur"];

  var hasil  = kota.concat(provinsi)
  return hasil
}

console.log(panggilConcat());
