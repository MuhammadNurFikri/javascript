function panggilFilter() {
  var array = [
    {negara: 'Indonesia', benua: 'Asia'},
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'Spanyol', benua: 'Eropa'},
    {negara: 'Korea', benua: 'Asia'},
    {negara: 'Portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat', benua: 'Amerika'},
  ];

  var benuaEropa = array.filter(function(item) {
    return item.benua === 'Amerika';
  });

  return benuaEropa;
}

console.log(panggilFilter());
