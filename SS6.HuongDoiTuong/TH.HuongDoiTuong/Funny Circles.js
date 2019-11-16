function Circle(x, y ,radius) {
    this.x=x;
    this.y=y;
    this.radius=radius;
}
function getRandomHex() {
    return Math.floor(Math.random()*255);
}
function getRandomColor() {
    let red=getRandomHex();
    let green=getRandomHex();
    let blue=getRandomHex();
    return "rgb("+red+","+blue+","+green+")"
}
function CreateCircle() {
    let txt=document.getElementById("mydCanvas").getContext("2d");
    let radius=Math.floor(Math.random()*80);
    let circle= new Circle(x,y,radius);
    let Color=getRandomColor();
    txt.beginPath();
    txt.arc(circle.x,circle.y,circle.radiu,0,2*Math.PI);
    txt.fill();
    txt.fillStyle=Color;
}

function CreateMultipleCircle() {
    for (let i=0;i<30;i++){
        CreateCircle();
    }
}
CreateMultipleCircle();