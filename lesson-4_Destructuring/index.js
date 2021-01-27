let people = {
    name: "Jack",
    surName: "Tomson",
    friend: { year: 3 },
    friends: [{ name: "name", year: 3 },
        { name: "name2", year: 1 },
    ]
}

// let name = people.name;
// let surName = people.surName;

let { name: n, age = 30 } = people;
let { surName: sn = "no", name: n, age = 30 } = people;

/////////////////////////////2///////////////////////////
let { friend: { year } } = people

/////////////////////////////3///////////////////////////
let arr = [5, "hello", [2, [7, { b: 9 }]], { a: 10 }]

// let el1 = arr[0];
// let el2 = arr[1];

let [el1, el2] = arr
let [, el1, , { a }] = arr
let [, , [, [p]]] = arr
let [, , [, [p, { b: q }]]] = arr



const { friends: [, { name }] } = people
let { friends: [, { name: n }] } = people || {} //когда people = undefined
let { friends: [, { name: n = "no name" }] = [, {}] } = undefined || {}

////////////////////////////4////////////////////////////
//. . . "rest" operator  взять всё в один обьект или массив


let { name, ...rest } = people; // кроме первого элемента
let [el1, ...restArr] = arr; //кроме первого элемента

////////////////////////////5////////////////////////////
//. . .arr spred operator  shallow copy    разделить обьект или массив


let arr = [5, "hello", [2, [7, { b: 9 }]], { a: 10 }]
let arrCopy = [...arr]
arrCopy === arr //false
arrCopy[2] === arr[2] //true копирует адреса внутренних массивов

////////////////////////////6////////////////////////////

function People({ name, surName, age = 20, ...restOptions }) {
    this.name = name;
    this.surName = surName
    this.age = age
}

new People({
    name: "",
    surName: "",
    age: 0,
    a: 5,
    b: 6

})

console.log(restOptions)

// let options = {
//     name: "",
//     surName:"",
//     age: 11,
//     ...
//     
// }
// new People(options)