let Customers=function () {
 this.setName=function (name) {
     this.setname=name;
 }   ;
 this.getName=function () {
     return this.setname;
 };
 this.setIdCard=function (idcard) {
     this.setidcard=idcard;
 };
 this.getIdCard=function () {
     return this.setidcard;
 };
 this.setBirthday=function (day) {
     this.setbrithday=day;
 };
 this.getBirthday=function () {
     return this.setbrithday;
 };
 this.setAddress=function (address) {
     this.setaddress=address
 };
 this.getAddress=function () {
     return this.setaddress;
 };
 this.setDiscount=function (discount) {
     this.setdiscount=discount;
 };
 this.getDiscount=function () {
     return this.setdiscount;
 };
 this.setEmail=function (email) {
     this.Email=email;
 };
 this.getEmail=function () {
     return this.Email;
 };
 this.setTypeRoom=function (type) {
     this.settyperoom=type;
 };
 this.getTypeRoom=function () {
     return this.settyperoom;
 };
 this.setNumberOfAccompanying=function (number) {
     this.setnumberofaccompanying=number;
 };
 this.getNumberOfAccompanying=function () {
     return this.setnumberofaccompanying;
 };
 this.setRentday=function (rentday) {
     this.setrentday=rentday;
 };
 this.getRentday=function () {
     return this.setrentday;
 };
 this.setTypeService=function (type) {
     this.settypeservice=type;
 };
 this.getTypeService=function () {
     return this.settypeservice;
 };
 this.totalpay=function () {
     let MoneyPerDays=0;
     if (this.setTypeService()==="Villa"){
            MoneyPerDays=500;
     }
     else if (this.setTypeService()==="Homestay"){
         MoneyPerDays=300;
     }
     else {
         MoneyPerDays=200;
     }
 };
 this.setTypeCustomers=function (type) {
     this.typecustomers=type;
 };
 this.getTypeCustomers=function () {
     return this.typecustomers;
 }

}