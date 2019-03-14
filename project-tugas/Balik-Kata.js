function balikKataFor(kata) {

    var balikKata = '';

    for (let i = kata.length - 1; i >= 0 ; i--) {
        balikKata += kata[i];
    }

    return balikKata;
}

// testCase
console.log(balikKataFor("Niomic!"));
console.log(balikKataFor("JavaScript"));
console.log(balikKataFor("alohahola"));
console.log(balikKata("Jawa_Barat"));
