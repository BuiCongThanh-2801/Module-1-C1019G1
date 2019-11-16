let energy=new Pin();
energy.setEnergy(10);

let flashlamp=new Den();
flashlamp.setBattery(energy);
document.write("Battery info" + flashlamp.getBattery()+"<br/>");
flashlamp.light();

document.write("Turn on <br/>");
flashlamp.turnOn();
flashlamp.light();
document.write("Battery info" + flashlamp.getBattery() +"<br/>");

document.write("Turn off" +"<br/>");
flashlamp.turnOff();
flashlamp.light();