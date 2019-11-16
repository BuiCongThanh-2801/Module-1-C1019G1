function disPlayMainMenu() {
    let nhap=parseInt(prompt("Mời chọn chức năng"+
    "\n1. Login" +
        "\n2. Register" +
        "\n3. Exit"));
    switch (nhap) {
        case 1:
            Login();
            break;
        case 2:
            Register();
            break;
        case 3:
            return;

    }
}
let arr=[];
checkEmail=false;
disPlayMainMenu();
function Register() {
    let regulaEmail=/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
    let employee= new Employee();
    employee.setTenDangNhap(prompt("Nhập tên đăng nhập"));
    employee.setTenNhanVien(prompt("Nhập tên nhân viên"));
    do {
        employee.setEmail(prompt("Nhập email"));
        if (regulaEmail.test(employee.getEmail())){
            alert("Email hợp lệ");
            checkEmail=true;
        }
        else {
            alert("Email không hợp lệ")
        }
    }
    while (!checkEmail);
    employee.setDiaChi(prompt("Nhập địa chỉ"));
    employee.setNgaySinh(prompt("Nhập ngày sinh"));
    employee.setGioiTinh(prompt("Nhập giới tính"));
    employee.setSoDienThoai(prompt("nhập số điện thoại"));
    employee.getSoCMND(prompt("Nhập số chứng minh nhân dân"));
    employee.setMatKhau(prompt("Nhập mật khẩu"));
    arr.push(employee);
    alert("Thông tin của nhân viên" +
        "\n1. Tên nhân viên" + employee.getTenNhanVien()+
        "\n2. Tên đăng nhâp" + employee.getTenDangNhap()+
        "\n3. Email" + employee.getEmail()+
        "\n4. Địa chỉ" + employee.getDiaChi()+
        "\n5. Ngày Sinh" + employee.getNgaySinh()+
        "\n6. Giới tính" + employee.getGioiTinh()+
        "\n7. Số điện thoại" +employee.setSoDienThoai()+
        "\n8. Số chứng minh nhân dân" +employee.getSoCMND()+
        "\n9. Mật khẩu" + employee.getMatKhau()
        );
    disPlayMainMenu()
}
function Login() {
    let employee= new Employee();
    let username= prompt("Mời nhập username");
    let password= prompt("Mơi nhập password");
    if (username === employee.getTenDangNhap() && password===employee.getMatKhau()){
        alert("Login thành công");
    }
    else {
        alert("Tài khoản hoặc mật khẩu sai");
    }
    disPlayMainMenu()
}