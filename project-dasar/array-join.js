// program perubahan data array ke string dg join
function panggilJoin() {
  var kota = ["jakarta","medan","bandung","solo"]
  console.log(kota);

  var result = kota.join(", ");

  return result
}

console.log(panggilJoin());
