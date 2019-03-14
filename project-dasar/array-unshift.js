// program manipulasi penambahan data array pada indeks pertama dengan unshift
function panggilUnshift() {
  var data = ["bandung","jakarta","medan","malang"];
  console.log(data);

  //menambahkan data ke dalam array
  data.unshift("surabaya");

  return data

}

console.log(panggilUnshift());
