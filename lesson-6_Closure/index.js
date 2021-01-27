function createPrivateData() {
    let x = 10;

    function decrement() {
        x--;
    }

    function increment() {
        x++;
    }

    function getData() {
        return x;
    }
    return {
        decrement,
        increment,
        getData,
    }
}
let myData = createPrivateData();

let obj = {
    x: 10,
    increment() {
        this.x++;
    },
    decrement() {
        this.x--;
    },
    getData() {
        return this.x;
    }
}

function createPrivateData() {
    let x = 10;
    return {
        decrement() {
            x--;
        },
        increment() {
            x++;
        },
        getData() {
            return x;
        }
    }
}
let myData = createPrivateData();