var arr = [1,2,3,4,5]
var arrGanjil = []

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    arrGanjil.push(arr[i])
  }
}

console.log(arrGanjil);
