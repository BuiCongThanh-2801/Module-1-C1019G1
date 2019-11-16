let cus= new Customers();
let listCustomers=[];
let regulaEmail=/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
let regulaBrithday=/^((0)[1-9]|[1-2][0-9]|(3)[0-1])(\/)(0)[1-9]|(1)[0-2](\/)\d{4}$/;
displayMainMenu();
function displayMainMenu(){
   let nhap= prompt("\n1. Add new customers" +
    "\n2. Display Information Customers" +
    "\n3. Display total Pay of customers" +
    "\n4. Edit information Customers" +
    "\n5. Delete Customers" +
    "\n6. Exit");
switch (nhap) {
    case "1":
        addNewCustomers();
        break;
    case "2":
        displayCustomers();
        break;
    case "3":
        displayTotalPay();
        break;
    case "4":
        break;
    case "5":
        break;
    case "6":
    default:
        alert("Nhập sai !!!!!!!");
        break;
    }
}
function addNewCustomers() {
    let checkEmail=false;
    let checkBrithday=false;
    cus.setName(prompt("Nhập tên khách hàng"));
    do {
        cus.setBirthday(prompt("Nhập ngày tháng năm sinh"));
        if (regulaBrithday.test(cus.getBirthday())){
            checkBrithday=true;
        }
        else {
            alert("Ngày tháng năm sinh không hợp lệ. Vui lòng nhập lại ngày tháng năm sinh !!!")
        }
    }while (!checkBrithday);
    cus.setAddress(prompt("Nhập địa chỉ khách hàng"));
    cus.setIdCard(prompt("Nhập CMND của khách hàng"));
    do {
        cus.setEmail(prompt("Nhập Email khách hàng"));
        if (regulaEmail.test(cus.getEmail())){
            checkEmail=true;
        }
        else {
            alert("Email không hợp lệ. Vui lòng nhập lại Email !!!")
        }
    }while (!checkEmail);
    cus.setTypeRoom(prompt("Nhập kiểu phòng"));
    cus.setTypeService(prompt("Nhập kiểu dịch vụ"));
    cus.setNumberOfAccompanying(prompt("Nhập số lượng đi kèm"));
    cus.setRentday(prompt("Nhập số ngày"));
    cus.setDiscount(prompt("Nhập giảm giá"));
    listCustomers.push(cus);
    displayMainMenu();
}

let checkDeleteCustomers=false;
let checkTotalPay=false;
function displayCustomers() {
    let result = "";
    for (let i = 0; i < listCustomers.length; i++) {
        result += "\n" + (i + 1) + ". Name:" + listCustomers[i].getName() + "  IdCard:" + listCustomers[i].getIdCard();
    }
    result += "\n" + (listCustomers.length + 1) + ". Back to menu";
    let selectCustomers = prompt(result);
    if (selectCustomers.toString() !== (listCustomers.length + 1).toString()) {
        if (!checkDeleteCustomers && !checkTotalPay) {
            displayInformationCustomers(Number.parseInt(selectCustomers) - 1)
        } else if (checkDeleteCustomers){
            deleteCustomers(Number.parseInt(selectCustomers)-1);
        }else {
            displayTotalPay(Number.parseInt(selectCustomers)-1);
        }
            
    }else {
        checkDeleteCustomers = false;
        checkTotalPay=false;
        checkEditCustomers=false;
        displayMainMenu()
    }
}
let checkEditCustomers=false;
function displayInformationCustomers() {
    if (checkEditCustomers) {
        let chooseInfoEdit = prompt(
            "Tên khách hàng:" + listCustomers[index].getName() +
            "\n2. Ngày sinh:" + listCustomers[index].getBirthday() +
            "\n3. Số CMND:" + listCustomers[index].getIdCard() +
            "\n4. Email :" + listCustomers[index].getEmail() +
            "\n5. Địa Chỉ" + listCustomers[index].getAddress() +
            "\n6. Kiểu khách hàng:" + listCustomers[index].getTypeCustomers() +
            "\n7. Giảm giá:" + listCustomers[index].getDiscount() +
            "\n8. Số ngày thuê:" + listCustomers[index].getRentday() +
            "\n9. Kiểu phòng" + listCustomers[index].getTypeRoom() +
            "\n10 . Kiểu dịch vụ" + listCustomers[index].getTypeService() +
            "\n11. Số lượng đi kèm" + listCustomers[index].getNumberOfAccompanying() +
            "\n12. Back"
        );
        if (chooseInfoEdit.toString() !== "12") {
            editInformationCustomers(Number.parseInt(chooseInfoEdit) - 1);
        } else {
            displayCustomers();
        }
    } else {
        alert("Information of customers" +
            "\n1. Name" + listCustomers[index].getName() +
            "\n2. ID Card" + listCustomers[index].getIdCard() +
            "\n3. Birthday Customers" + listCustomers[index].getBirthday() +
            "\n4. Email Customers" + listCustomers[index].getEmail() +
            "\5. Address Customers" + listCustomers[index].getAddress() +
            "\n6. Type Customers" + listCustomers[index].getTypeCustomers() +
            "\n7. Discount" + listCustomers[index].getDiscount() +
            "\n8. Number Of Accompaning" + listCustomers[index].getNumberOfAccompanying() +
            "\n9. Type Room" + listCustomers[index].getTypeRoom() +
            "\n10. Rent day" + listCustomers[index].getRentday() +
            "\n11. Type Of Serivice" + listCustomers[index].getTypeService()
        );
        displayMainMenu();
    }
}
function chooseDisplayTotalPay() {
    checkTotalPay=true;
    displayCustomers();
}
function displayTotalPay(index) {
    alert(listCustomers[index].totalpay());
    chooseDisplayTotalPay=false;
}
displayMainMenu();
