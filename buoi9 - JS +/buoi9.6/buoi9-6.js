// vd1. khai báo hàm 
function lapphuong(number) {
  let result = number * number * number;
  return result; // return : kết thúc hàm và trả lại giá trị kết quả sau quá trình xử lý hàm
}
// sử dụng
let ketqua = lapphuong(10);
let ketqua2 = lapphuong(5);

//

// vd2. khai bám hàm 
function hienthi(name) {
  document.write("vd2. 💖 Xin chào: " + name);
}
//   hienthi("Thiện Nguyễn");

// 

//vd3. khai báo hàm 
function trungbinhcong(a, b, c) {
  let tong = a + b + c;
  let ketqua = tong / 3;
  return ketqua;
}
