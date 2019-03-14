var arr = [1, 2, 3, 4, 5]
var arrGanjil = arr.filter(function (el) {
  return el % 2 !== 0
})

console.log(arrGanjil);
