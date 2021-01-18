function Car(name, series, year) {
    // new {}
    // this -> {} важно
    this.name = name;
    this.series = series;
    this.year = year;

    this.drive = function() {
        console.log('${this.name} ${this.series} is drive')
    }

    // return {}
}

const BMW = new Car('BMW', 'M3', 2001)
const Mercedes = new Car('Mercedes', 'E200', 2003)
const Audi = new Car('Audi', 'TT', 2008)
const Mitsubishi = new Car('Mitsubishi', 'fa', 2005)

////////////////////////////instanceof//////////////////////
BMW instanceof Object //true
BMW instanceof Array //false
BMW instanceof Car //true

// instanceof boolean
// primitive types "dont have" instanceof better typeof for primitive types

///////////////////////////link constructor ////////////////

let E = new Mitsubishi.constructor('havayi', 'mi ', 5656)

/////////////////////////Native Constructor ////////////////
new Object();
new Array();
new RegExp();
new Date();






// const BMW = {
//     name: 'BMW',
//     series: 'M3',
//     year: 2001,
//     drive() {
//         console.log('${this.name} ${this.series} is drive')
//     }
// }
// const Mercedes = {
//     name: 'Mercedes',
//     series: 'E200',
//     year: 2003,
//     drive() {
//         console.log('${this.name} ${this.series} is drive')
//     }
// }