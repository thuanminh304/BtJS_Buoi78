//1. tính tổng các số nguyên dương trong mảng
var queSel = function (id) {
  return document.querySelector(id);
};

var mangSo = [];
var nhapSoNguyen = queSel("#idNhapSoNguyen");
var arrLength = 0;

function luuTru() {
  var nhapSoNguyen = queSel("#idNhapSoNguyen").value;
  for (var i = 0; i < 1; i++) {
    if (Number(nhapSoNguyen)) {
      mangSo.push(nhapSoNguyen);
      queSel("#idLuuTru").innerHTML = mangSo;
    } else {
      alert("Bạn phải nhập số nguyên...");
    }
  }
  arrLength = mangSo.length;
  console.log(arrLength);
}

// xét total = 0 và count = 0 trong sự kiện click vì mỗi cần click sẽ đưa biến tổng và đềm về 0 và chạy tại chuỗi for khi có 1 giá trị mới đc đưa thêm vào( mà k phải là reset lại trang)

// câu 1

function tinhTong() {
  var total = 0;
  for (var j = 0; j < arrLength; j++) {
    if (mangSo[j] > 0) {
      total += Number(mangSo[j]);
    }
  }
  queSel("#idKqTong").innerHTML = "tổng là " + total;
}

// câu 2
function demSoDuong() {
  var count = 0;

  for (var m = 0; m < arrLength; m++) {
    if (mangSo[m] > 0) {
      count += 1;
    }
  }
  queSel("#idKqDemSoDuong").innerHTML =
    "Có " + count + " số nguyên dương trong mảng";
}

//câu 3;

function timSoNhoNhat() {
  var min = Number(mangSo[0]);

  for (var n = 1; n < arrLength; n++) {
    if (Number(mangSo[n]) < min) {
      min = Number(mangSo[n]);
    }
  }
  console.log(arrLength);
  console.log(min);

  queSel("#idKqSoNhoNhat").innerHTML = "Sô nhỏ nhất trong mảng là : " + min;
}

//câu 4:
function timSoDuongNhoNhat() {
  var minDuong = mangSo[0];
  for (var l = 1; l < arrLength; l++) {
    if (mangSo[l] < minDuong && mangSo[l] >= 0) {
      minDuong = mangSo[l];
    }
  }

  queSel("#idKqSoDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất trong mảng là : " + minDuong;
}

//câu 5
function timSoChanCuoi() {
  // ta xét từ phần tử cuối cùng rồi cho k giảm dần (vd length=3 => k ban đầu =2 (length-1), lần 2 k=1(length-2) và điều kiện là k>=0 vì khi xét tới phần tử đầu tiên là k=0 là hết chuỗi để xét và sẽ dừng lại)
  // khi xét bắt đầu xét. nếu phần tử cuối k chia hết cho 2. ta trả về -1. nếu nó chia hết cho 2 thì ta lấy giá trị đó làm giá trị chẵn cuối và dùng lệnh break để dừng lại chuỗi for và cho ra kết quả . và cứ tiếp tục đến phần tử k=0 vẫn k có giá trị chẵn thì trả về -1 như nãy h làm
  for (var k = arrLength - 1; k >= 0; k--) {
    if (mangSo[k] % 2 == 0) {
      queSel("#idKqSoChanCuoi").innerHTML =
        "Số chẵn cuối cùng trong mảng là : " + mangSo[k];
      break;
    } else {
      queSel("#idKqSoChanCuoi").innerHTML = -1;
    }
  }
}

//Câu 6:
function doiViTriHaiGiaTri() {
  [mangSo[1], mangSo[3]] = [mangSo[3], mangSo[1]];
  queSel("#idKqDoiViTri").innerHTML = mangSo;
}

//câu 7
function sapXepTang() {
  mangSo.sort(function (a, b) {
    return a - b;
  });
  queSel("#idKqSapXepTang").innerHTML = mangSo;
}
function sapXepGiam() {
  mangSo.sort(function (a, b) {
    return a - b;
  });
  mangSo.reverse();
  queSel("#idKqSapXepGiam").innerHTML = mangSo;
}

// câu 8:

function timSoNguyenToDau(nhapSoNguyen) {
  var nhapSoNguyen = queSel("#idNhapSoNguyen").value;
  // Biến cờ hiệu
  var flag = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (nhapSoNguyen < 2) {
    flag = false;
  } else {
    // lặp từ 2 tới nhapSoNguyen-1
    for (var x = 2; x < nhapSoNguyen - 1; x++) {
      if (nhapSoNguyen % x == 0) {
        flag = false;
        
      }
    }
  }
for (var y=0;y<arrLength;y++){
  if (flag == true) {
    queSel("#idKqNguyenToDau").innerHTML =
      nhapSoNguyen + " là số nguyên tố đầu tiên";
      
  } else {
    queSel("#idKqNguyenToDau").innerHTML = -1;
  }
}
}

// câu 9
var mangSoThuc = [];

function demSoNguyen() {
  var soNguyen;
  var countNew = 0;
  for (var d = 0; d < arrLength; d++) {
    mangSoThuc.push(nhapSoNguyen);
    soNguyen = Number(parseInt(nhapSoNguyen));
    countNew += 1;
  }
  queSel("#idKqDemSoNguyen").innerHTML =
    "Có " + countNew + " số nguyên trong mảng";
}

//câu 10
function soSanhAmDuong() {
  var countAm = 0;
  var countDuong = 0;
  for (var e = 0; e < arrLength; e++) {
    if (mangSo[e] >= 0) {
      countDuong++;
    } else {
      countAm++;
    }
    if (countDuong > countAm) {
      queSel("#idKqAmDuong").innerHTML =
        "Số dương : " +
        countDuong +
        "<br/>" +
        "  Số âm :" +
        countAm +
        "<br/>" +
        "  Số lượng số dương nhiều hơn số âm ";
    } else {
      queSel("#idKqAmDuong").innerHTML =
        "Số dương : " +
        countDuong +
        "<br/> " +
        " Số âm : " +
        countAm +
        "<br/>" +
        "  Số lượng số âm nhiều hơn số dương ";
    }
  }
}
