let Apple= function(){
  this.setweightapple=function (weight) {
      this.weightapple=weight;
  };
  this.getweightapple=function () {
      return this.weightapple;
  };
  this.getKhoiLuongDaAn=function () {
      if (this.cannang+1) {
          return this.weightapple-1;
      }
  }
};
let Human=function () {
    this.setTen=function (ten) {
        this.ten=ten;
    };
    this.getTen=function () {
        return this.ten;
    };
    this.setGioiTinh=function (gioitinh) {
        this.gioitinh=gioitinh;
    };
    this.getGioiTinh=function () {
        return this.gioitinh;
    };
    this.setCanNang=function (weight) {
        this.cannang=weight;
    };
    this.getCanNang=function () {
        return this.cannang;
    };
    this.Eat=function () {
         if (this.weightapple>0){
            return this.cannang+1;
        }
    };
};