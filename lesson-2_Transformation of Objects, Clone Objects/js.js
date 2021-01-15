const employees = {
    frontEnd: { name: "jack" },
    backEnd: 100,
    devOps: { name: "havayi2" },
    pm: { name: "havayi3" },
}

/////////////////////////1///////////////////////
// for (let key in employees) {
//     console.log(employees[key])
// }

////////// all keys ////////////////////////////

// 1. []
// 2. loop employees
// 3. in loop push in new arr

// const keys = [];

// for(let key in employees){
//     keys.push(key);
// }

/////////////////////// object.keys  /////////////////////

// const keys = Object.keys(employees)
// console.log(keys)

/////////////////////// object.values  /////////////////////

// const values = Object.values(employees)
// console.log(values)

/////////////////////// object.entries  /////////////////////

// const entries = Object.entries(employees)
// console.log(entries)

/////////////////////// object.clone  /////////////////////

// let obj = { x: 10 , y:20, z:30}
// const cloneObj = {};

// for(let key in obj){
//  cloneObj[key] = obj[key]

// }

function f(o) {
    const cloneObj = {};
    for (let key in o) {
        let value = o[key];
        if (typeof value === 'object') {
            value = f(value);
        }
        cloneObj[key] = value;
    }
    return cloneObj;
}
const obj = {
    a: 10,
    b: {
        c: { f: 50 },
        k: 40
    },
    d: 30
}
const clonedObj = f(obj)