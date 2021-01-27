//создать человека конструктора

function Chelovek(name, surname, age = 12) {
    this.name = name;
    this.surname = surname;
    this.age = age;

}

let krab = new Chelovek("Garik", "Martirosyan", 19)
this.gulyayu = function() {
    console.log('${this.name} ${this.series} gulyayet po ulice')
}