function panggilFilterParameters(value) {
  var arr = [
    {negara: 'Indonesia', benua: 'Asia'},
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'Spanyol', benua: 'Eropa'},
    {negara: 'Korea', benua: 'Asia'},
    {negara: 'Portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat', benua: 'Amerika'}
  ];

// Parameter Untuk Benua Asia

// var benuaAsia = arr.filter(function(item) {
//   return item.benua === 'Asia';
// });
//   return benuaAsia;
// }
// console.log(panggilFilterParameters());


// Parameter Untuk Benua Eropa
var benuaEropa = arr.filter(function(item) {
  return item.benua === 'Eropa';
});
  return benuaEropa;
}
console.log(panggilFilterParameters());
