let str_input = prompt("Nhập chuỗi mà bạn muốn");

function vietHoa(str) {
    // Viết thường tất cả các ký tự trong chuỗi
    str = str.toLowerCase();
    //chia nhỏ chuỗi ra thành các chuỗi con
    let arr = str.split(' ');
    //tạo chuỗi mới
    let str2 = '';
    for (let i = 0; i < arr.length; i++){
        //Viết hoa các chữ cái đầu
        str2 += arr[i][0].toUpperCase();
        for (let j = 1; j < arr[i].length; j++){
            str2 += arr[i][j];
        }
        str2 += ' ';
    }
    return str2;
}

console.log(vietHoa(str_input));