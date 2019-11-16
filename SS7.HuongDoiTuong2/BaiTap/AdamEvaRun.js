

let apple = new Apple();
let result;
function createApple() {
    let cannangquatao = document.getElementById("tao").value;

    cannangquatao = parseInt(apple.setweightapple);
    apple.setweightapple();
    result = apple.getweightapple();
    alert("Added")
}

let human = new Human();

function eat() {
    result = "khối lượng đối tượng sau khi ăn " + human.Eat() + "khối lượng quả táo sau khi ăn" + apple.getKhoiLuongDaAn();
    alert(result);
}

function ThongTin() {
    let ten = document.getElementById("ten").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let cannangdoituong = document.getElementById("cannang").value;
    human.setGioiTinh(gioitinh);
    human.setTen(ten);
    human.setCanNang(parseFloat(cannangdoituong));
    result = "Tên" + human.getTen() + "   Giới tính" + human.getGioiTinh() + "  Cân Nặng" + human.getCanNang();
    alert(result)
}