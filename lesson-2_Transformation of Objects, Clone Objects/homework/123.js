/////////////////////////////1////////////////////////////

function printRows(n) {
    const row = "# # # #\n"


    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            console.log(" " + row)
        } else {
            console.log(row)
        }
    }
}



/////////////////////////////2////////////////////////////

// [4,9]

function rang(min, max) {
    const arr = []
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;

}
let newArr = rang(15, 26)

////////////// Tarberak 2//////////////////////////////////

function rang(from, to) {
    const arr = []
    const isBigger = from > to

    if (isBigger) {
        for (let i = from; i >= to; i--) {
            arr.push(i);
        }
    } else {
        for (let i = from; i <= to; i++) {
            arr.push(i);
        }
    }
    return arr;
}

////////////// Tarberak 3//////////////////////////////////

function rang(from, to) {
    const arr = []
    const isBigger = from > to

    if (isBigger) {
        let temp = from;
        from = to;
        to = from;
    }
    for (let i = from; i <= to; i++) {
        arr.push(i);
    }

    return arr;
}




/////////////////////////////3////////////////////////////

const arr = [4, "hello", 5]
const el = "hello"
    //1//
arr.some((value) => value === el)

//2//
arr.find((value) => value === el)

//3//
arr.includes(4, "hello", 45)

//4//
function some(arr, value) {
    for (let el of arr) {
        if (el === value) return true;
    }
    return false;
}

/////////////////////////////4////////////////////////////

let Value = "index.html"
let index = value.indexOf(".");
value.slice(index + 1)

//2//
let Value = "index.html"
let index = value.lastIndexOf(".");
value.slice(index + 1)