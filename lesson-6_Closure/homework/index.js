function TV({
    year,
    model,
    diameter,
    volume = 0,
    on_off = false,
    currentChannel = null,
    hands = 0,
    legs = 0,
    zlosty = 0,
}) {
    this.model = model;
    this.year = year;
    this.diameter = diameter;
    this.currentChannel = currentChannel;
    this.volume = volume;
    this.on_off = on_off;
    this.channels = ["Kentron", "H1", "H2"];

    this.gotovkaStart = function() {
        if (this.on_off === true) {
            console.log("для готовки мне необходимы руки и ноги");
            this.zlosty++;
        }
    }
    this.gotovkaMid = function() {

        function borsh() {
            console.log("борщь готов");
            this.zlosty--;
        }



        if (this.on_off === true) {
            if (this.hands < 2 && this.legs < 2) {
                console.log("извините мне необходимы как минимум 2 руки и 2 ноги")
                this.zlosty++;
            } else {
                let k = prompt("Я умею варить борщь приготовить? ")
                if (k === 'да') {
                    console.log("Борщь будет готов через 10 секунд")
                    setTimeout(borsh, 10000);
                    this.zlosty--;
                }
                if (k === 'нет') {
                    console.log("тогда сами приготовьте и не злите меня")
                    this.zlosty++;
                    if (this.zlosty > 10) {
                        console.log("мне надоело исполнять ваши приказы")

                    }
                }
            }


        }
    }
    this.ruki = function() {
        if (this.on_off === true) {
            this.hands++;
        }
    }

    this.nogi = function() {
        if (this.on_off === true) {
            this.legs++;
        }
    }

    this.changeChannel = function(channelNumber) {
        if (this.on_off === true) {
            this.currentChannel = this.channels[channelNumber];
        }
    };
    this.increaseVolume = function() {
        if (this.on_off === true) {
            this.volume++;
            this.zlosty++;
        }
    };
    this.decreaseVolume = function() {
        if (this.on_off === true) {
            this.volume--;
            this.zlosty++;
        }
    };
    this.powerToggle = function() {
        this.on_off = !this.on_off;
    };
    this.property = function() {
        console.log(`Привет! с вами говорит телевизор ${this.model} ${this.year} ого выпуска у меня есть несколько функций такие как включение выключене телевизора, управление звуком и каналами, готовка `)
        console.log(`Еще в своём роде ${this.model} уникален умею злится но лучше меня не злить`)
    };

    this.konechnostyi = function() {
        console.log(`В данный момент у меня есть ${this.hands}руки и ${this.legs} ноги `)
    }
}
let LG = new TV({
    year: 2019,
    model: "LG",
    diameter: 30,
});