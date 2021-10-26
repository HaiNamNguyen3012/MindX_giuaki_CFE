let str_input = prompt("Nhập chuỗi mà bạn muốn");

function daoNguocChuoi(str) {
    //tạo 1 chuỗi rỗng mới
    let reverse_str = "";
    //cho chạy cuối đến đâu mảng
    for (let i = str.length - 1; i >= 0; i--) {
      reverse_str += str[i];
    }
    return reverse_str;
}


console.log(daoNguocChuoi(str_input));