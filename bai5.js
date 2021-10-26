let ngay = parseInt(prompt('Nhập ngày:'));
let thang = parseInt(prompt("Nhập tháng:"));
let nam = parseInt(prompt("Nhập năm:"));

//check năm nhuận
function namNhuan(nam) {
    if (nam % 4 === 0 && nam % 100 !== 0 || nam % 400 === 0) {
        return true;
    }
    return false;
}

//check ngày phù hợp
function checkDate(day, month, nam) {
    if (namNhuan(nam) === true) {
        if ((day >= 1 && day <= 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) || (day >= 1 && day <= 30 && (month === 4 || month === 6 || month === 9 || month === 11 || month === 8)) || (day >= 1 && day <= 29 && month === 2)) { 
            return true;
        } else {
            return false;
        }
    } else if (namNhuan(nam) === false) {
        if ((day >= 1 && day <= 31 && (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)) || (day >= 1 && day <= 30 && (month === 4 || month === 6 || month === 9 || month === 11 || month === 8)) || (day >= 1 && day <= 28 && month === 2)) { 
            return true;
        } else {
            return false;
        }
    }
}

function nextDay(day, month, year) {
  day = day + 1;
 
  if ( day > 31 &&  (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 ||month === 12) ) {
    // Reset tháng
    day = 1;
    month = month + 1;
  } else if (month === 2) {
    if (namNhuan(year) === true) {
        // nếu là năm nhuận
        if (day > 29) {
          day = 1;
          month = month + 1;
        }
    } else {
        //nếu không phải năm nhuận
        if (day > 28) {
          day = 1;
          month = month + 1;
        }
      }
  }
 
  else {
    // Những tháng có 30 ngày
    if (day > 30) {
      day = 1;
      month = month + 1;
    }
  }
 
  if (month > 12) {
    month = 1;
    year = year + 1;
  }
 
  console.log("Ngày tiếp theo của ngày bạn nhập là " + day + "/" + month + "/" + year);
}
 
//Hàm xem ngày trước ngày nhập vào
function previousDay(day, month, year) {
  day = day - 1;
  if (day < 1 && (month === 5 || month === 7 || month === 10 || month === 12)) {
    day = 30;
    month = month - 1;
  } else if (day < 1 && (month === 1||month === 2 || month === 4 || month === 6 || month === 8 || month === 9 || month === 11)) {
     day = 31;
     month = month - 1;
  } else if(month === 3) {
      if (namNhuan(year) === true) {
        day = 29;
        month = month - 1;
      } else {
        day = 28;
        month = month - 1;
      }
  }
  if (month < 1) {
    month = 12;
    year = year - 1;
  }
 
  console.log('Ngày trước của ngày bạn nhập là ' + day + '/' + month + '/' + year);
}

if (checkDate(ngay, thang, nam) === false) {
    console.log('Bạn nhập ngày không hợp lệ');
} else {
    console.log(ngay + '/' + thang + '/' + nam +' là một ngày hợp lệ')
    nextDay(ngay, thang, nam);
    previousDay(ngay, thang, nam);
}