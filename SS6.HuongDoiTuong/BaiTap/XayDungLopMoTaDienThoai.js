let Mobile=function () {
    this.inputMessage=function (input) {
        this.input=input;
    };
    this.outputMessage=function (input) {
        return this.input;
    }
};

let mobile=new Mobile();
let array=[];
function Send() {
    let input=document.getElementById("txt").value;
    let message=mobile.inputMessage(input);
    array.push(message);
    alert("Send");
}
function display() {
    let result="";
    for (let i=0;i<array.length;i++){
        result+=mobile.outputMessage(array[i])
    }
    document.getElementById("text").innerHTML=result;
}