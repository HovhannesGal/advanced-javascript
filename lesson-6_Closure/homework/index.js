function TV({
    year,
    model,
    diameter,
    volume = 0,
    on_off = false,
    currentChannel = null,
}) {
    this.model = model;
    this.year = year;
    this.diameter = diameter;
    this.currentChannel = currentChannel;
    this.volume = volume;
    this.on_off = on_off;
    this.channels = ["Kentron", "H1", "H2"];
    this.changeChannel = function(channelNumber) {
        if (this.on_off === true) {
            this.currentChannel = this.channels[channelNumber];
        }
    };
    this.increaseVolume = function() {
        if (this.on_off === true) {
            this.volume++;
        }
    };
    this.decreaseVolume = function() {
        if (this.on_off === true) {
            this.volume--;
        }
    };
    this.powerToggle = function() {
        this.on_off = !this.on_off;
    };
}
const LG = new TV({
    year: 2019,
    model: "LG",
    diameter: 30,
});
LG.changeChannel(1);
LG.powerToggle();
LG.changeChannel(2);
LG.powerToggle();