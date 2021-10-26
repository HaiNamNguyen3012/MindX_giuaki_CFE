let arr = [];

while (true) {
    let n = prompt("nhập 1 số hoặc chuỗi mà bạn muốn");
    if (n == -1) {
        break;
    }
    arr.push(n);
}
function loaiBoPhanTuGiongNhau(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr1 = loaiBoPhanTuGiongNhau(arr);

for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}