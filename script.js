const TallArr = [
    "12","29","11","92","14","1338","1336","1337","1339",

];


function generateLeet() {
    const  index = Math.floor(Math.random() * TallArr.length);
    let randomLeet;

    for (let i = 0; i < TallArr.length; i++) {
     if (i === index) {
        randomLeet = TallArr[i];
        document.getElementById('randomElementOutput').textContent = randomLeet;
     }

     
}
document.getElementById('randomElementOutput').textContent = randomLeet;
}

