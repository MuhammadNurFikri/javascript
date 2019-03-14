//  Program penyisipan data array dengan menggunakan splice
function panggilSplice() {
  var kota = ['jakarta','medan','padang','malang'];
  console.log(kota);
  // kota.splice(3,1,'solo')

  // untuk menghapus data array
  kota.splice(1,2)


  return kota
}

console.log(panggilSplice ());
