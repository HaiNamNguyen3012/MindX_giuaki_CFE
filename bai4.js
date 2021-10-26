let nhanVien = [
  ["Nguyễn Hải Nam",21,1000000,"Giao vien" ],
  ["Vương Tuấn Khanh",22,2000000,"Quan ly" ],
  ["Đoàn Minh Tuấn",21,1000000,"Admin"]
];

//in mảng danh sách nhân viên
function Read(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(' Tên ' + arr[i][0] + ' - tuổi: ' + arr[i][1] + ' - mức lương: ' + arr[i][2] + ' - chức vụ: ' + arr[i][3]);
    }
}

//thêm nhân viên vào danh sách
function addNhanVien(name, age, salary, position, arr) {
    let information = [];
    information.push(name);
    information.push(age);
    information.push(salary);
    information.push(position);
    arr.push(information);
}

addNhanVien("Trương Lê Thùy Trang", 26, 1000000, "Giao vien", nhanVien);
Read(nhanVien);