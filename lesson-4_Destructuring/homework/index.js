/////////////////////////////1-2//////////////////////////

let max = 0;
let maxSalaryName = "";
let salaries = {
    Jack: { salary: 100, unit: "$" },
    Tom: { salary: 250, unit: "$" },
    Rob: { salary: 150, unit: "$" },
    Sem: { salary: 350, unit: "$" },
}

for (let x in salaries) {
    // console.log(x + " " + salaries[x].salary)

    if (max < salaries[x].salary) {
        max = salaries[x].salary
        maxSalaryName = x;
    }


}
console.log(maxSalaryName + " " + max)

/////////////////////////////3////////////////////////

let max = 0;
let maxSalaryName = 0;
let salaries = {
    Jack: { salary: 100, unit: "$" },
    Tom: { salary: 250, unit: "$" },
    Rob: { salary: 150, unit: "$" },
    Sem: { salary: 350, unit: "$" },
}

for (let x in salaries) {
    max = salaries[x].salary
    maxSalaryName += max
}
console.log(maxSalaryName)

/////////////////////////////4////////////////////////


let arr = [];
let max = 0;
let salaries = {
    Jack: { salary: 100, unit: "$" },
    Tom: { salary: 250, unit: "$" },
    Rob: { salary: 150, unit: "$" },
    Sem: { salary: 350, unit: "$" },
}

for (let x in salaries) {
    max = salaries[x].salary + salaries[x].unit
        // maxSalaryName = salaries[x].unit
    arr.push(x + max)
}
console.log(arr)



/////////////////////////////2-1-2//////////////////////

let max = 0;
let salaries = [
    { name: 'Jack', salary: 100, unit: "$" },
    { name: 'Tom', salary: 250, unit: "$" },
    { name: 'Rob', salary: 150, unit: "$" },
    { name: 'Sem', salary: 350, unit: "$" },
]

for (let i = 0; i < salaries.length; i++) {
    if (max < salaries[i].salary) {
        max = salaries[i].salary
        maxSalaryName = salaries[i].name
    }


}
console.log(maxSalaryName + " " + max)


/////////////////////////////2-3//////////////////////

let max = 0;
let salaries = [
    { name: 'Jack', salary: 100, unit: "$" },
    { name: 'Tom', salary: 250, unit: "$" },
    { name: 'Rob', salary: 150, unit: "$" },
    { name: 'Sem', salary: 350, unit: "$" },
]

for (let i = 0; i < salaries.length; i++) {
    max += salaries[i].salary


}
console.log(max)

/////////////////////////////2-4//////////////////////

let max = 0;
let salaries = [
    { name: 'Jack', salary: 100, unit: "$" },
    { name: 'Tom', salary: 250, unit: "$" },
    { name: 'Rob', salary: 150, unit: "$" },
    { name: 'Sem', salary: 350, unit: "$" },
]
let nole = salaries[0];
let first = salaries[1];
let two = salaries[2];
let three = salaries[3]