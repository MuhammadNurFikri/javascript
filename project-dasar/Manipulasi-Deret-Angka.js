function deretAngka(n) {
 // tulis jawabanmu di sini
 var hasil = ''

 for (var i = 1; i <= n; i++) {
   if (i%3 === 0) {
     hasil += 'NIO '
   }else if (i%5 === 0) {
     hasil += 'MIC '
 }else {
   hasil += i+ ' '
 }
 return hasil
}


deretAngka(10)
console.log(deretAngka(20));
console.log(deretAngka(30));
