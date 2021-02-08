///////////////////////////////1//////////////////////////////

function palidrome(str) {
    return str.split("").reverse().join("");
}
palidrome("barev");

/////////////////////////////1-2//////////////////////////////

function palidrome(str) {

}


///////////////////////////////2//////////////////////////////
const isPrime = num => {
    if (num === 0 || num === 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true;
}

function getPrimesCount(limit) {
    let count = 0;

    for (let i = 2; i < limit; i++) {
        if (isPrime(i)) count++;

    }
    return count;
}

getPrimesCount(100)


////////////////////////////////4/////////////////////////////

function Herustacuyc(model, diameter, year, currentChannel, volume) {

    this.model = model;
    this.diameter = diameter;
    this.year = year;
    this.currentChannel = currentChannel;
    this.volume = volume;



    this.aliqapox = function() {
        console.log('${this.model} ${this.year} karum e poxel aliqner')
    }

    this.dzayn = function() {
        console.log('${this.model} ${this.volume}')
    }

    // return {}
}