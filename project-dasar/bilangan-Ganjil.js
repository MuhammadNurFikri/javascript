//  Program bilangan ganjil
function panggilGanjil() {
  var bilanganGanjil = []
  for (var i = 1; i < 30; i++) {
    if (i%2 !== 0) {
      bilanganGanjil.push(i)
    }
  }
  return bilanganGanjil
}

console.log(panggilGanjil());
