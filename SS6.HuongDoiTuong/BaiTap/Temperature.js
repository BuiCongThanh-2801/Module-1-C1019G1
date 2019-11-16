let Temperature=function () {
    this.setC=function (nhietdo) {
        this.nhietdo=nhietdo;
    };
    this.getC=function (nhietdo) {
        return this.nhietdo
    };
    this.getF=function (nhietdo) {
        return ((this.nhietdo*1.8)+32)
    };
    this.getKevin=function (nhietdo) {
        return (this.nhietdo+273.15)
    }
};
let temperature= new Temperature();
// let nhapC=parseFloat(prompt("Nhập độ C:"));
temperature.setC(25);
let doF=temperature.getF();
let doK=temperature.getKevin();
    document.write("Độ F:" +doF +  "  Độ K: " + doK);

