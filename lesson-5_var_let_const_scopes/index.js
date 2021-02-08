//////////////////////// var let const//////////////////////

// let , const => block scope
// var => function scope

////////////////////////////scopes//////////////////////////

//scopes
// 1. global scope
// 2. function scope // func
// 3. block scope    // if , for , while

function f() {
    if (true) {
        var x = 10;
    }
    console.log(x)
}


function f() {
    if (true) {
        let x = 10;
    }
    console.log(x)
}