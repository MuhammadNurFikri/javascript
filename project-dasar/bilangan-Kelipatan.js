function panggilBilanganKelipatan() {
  var bilangankelipatan = []
  for (var i = 1; i < 50; i++) {
    if (i%5 === 0) {
      bilangankelipatan.push(i)
    }
  }
  return bilangankelipatan;
}


console.log(panggilBilanganKelipatan());
