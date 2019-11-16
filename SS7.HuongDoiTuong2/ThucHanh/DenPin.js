let Pin=function () {
    this.setEnergy=function (energy){
    this.energy=energy;
    };
    this.getEnergy=function (energy) {
        return this.energy;
    };
    this.decreaseEnergy=function (energy) {
        if(this.energy>0){
            this.energy--;
        }
    }
};
let Den=function () {
    this.setBattery=function (battery) {
        this.battery=battery;
    };
    this.getBattery=function (battery) {
        return this.battery;
    };
    this.light=function () {
        if (this.status){
            alert("Lighting")
        }
        else {
            alert("Not Lighting")
        }
    };
    this.turnOn=function () {
        this.status=true;
    };
    this.turnOff=function () {
        this.status=false;
    }
}