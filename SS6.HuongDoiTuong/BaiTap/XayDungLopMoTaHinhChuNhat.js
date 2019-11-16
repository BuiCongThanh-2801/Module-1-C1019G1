let Rectangle=function () {
    this.setChieudai=function (chieudai) {
        this.chieudai=chieudai;
    };
    this.getChieudai=function (chieudai) {
        return this.chieudai=chieudai;
    };
    this.setChieuRong=function (chieurong) {
        this.chieurong=chieurong;
    };
    this.getChieuRong=function (chieurong) {
        return this.chieurong;
    };
    this.getDienTich=function () {
        return this.chieudai*this.chieurong;
    };
    this.getChuVi=function () {
        return (this.chieurong+this.chieudai)*2;
    }
};
    function hinhChuNhat(){
        let txt=document.getElementById("myCanvas");
        let ctc=txt.getContext("2d");
        ctc.fillStyle="red";
        ctc.fillRect(0,0,150,75)
    }

let rectangle= new Rectangle();
let a=parseInt(prompt("Nhập chiều dài"));
let b=parseInt(prompt("Nhập chiều rộng"));
rectangle.setChieudai(a);
rectangle.setChieuRong(b);
let dientich=rectangle.getDienTich();
let chuvi=rectangle.getChuVi();
alert("Chu vi:" + chuvi + " Diện tích: " +dientich);
hinhChuNhat();
