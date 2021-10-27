
// lấy các số nguyên
var arrNum = [];
function addEleNum(){
    var numberList = document.getElementById("numberList").value;
    numberList = Number(numberList);

    arrNum.push(numberList);
    document.getElementById("txtList").innerHTML ="Dãy số của bạn: " + arrNum + " ";
}
document.getElementById("btnAdd").onclick = addEleNum;


// tính tổng các số nguyên dương
function sumNumArr(){
    var sum = 0;
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            sum += arrNum[i] ;
        }
    }

    document.getElementById("txtSum").innerHTML = "Tổng các số dương: " + sum;
}
document.getElementById("btnSum").onclick = sumNumArr;


// đếm tổng các số nguyên dương
function countNumArr(){
    var count = 0;
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            count++;
        }
    }

    document.getElementById("txtCount").innerHTML = "Có " + count + " số dương";
}
document.getElementById("btnCount").onclick = countNumArr;


// tìm số nhỏ nhất
function findMin(){
    var viTri = 0;
    var min = arrNum[viTri];
    for (var i = 1; i < arrNum.length; i++) {
        if (min > arrNum[i]) {
            min = arrNum[i];
            viTri = i;
        }
    }
    document.getElementById("txtMin").innerHTML = "Số nhỏ nhất: " + min;
}
document.getElementById("btnMin").onclick = findMin;


// tìm số dương nhỏ nhất
function findNumPlusMin(){
    var newArr = [];
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            newArr.push(arrNum[i]);
        }
    }
    var numPlusMin = newArr[0];
    for(var i = 1; i < newArr.length; i++){
        if(numPlusMin > newArr[i]){
            numPlusMin = newArr[i];
        }
    }
    document.getElementById("txtPlusMin").innerHTML ="Số dương nhỏ nhất: " + numPlusMin;
}
document.getElementById("btnPlusMin").onclick = findNumPlusMin;


// tìm số chẫn cuối cùng trong mảng

function findNumEven(){
    var arrEven = [];
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] % 2 == 0){
            arrEven.push(arrNum[i]);
        }
    }
    if(arrEven.length === 0){
        document.getElementById("txtLastEven").innerHTML = -1 + " Không có số chẵn";
    }else{
        document.getElementById("txtLastEven").innerHTML ="Số chẵn cuối cùng: " + arrEven[arrEven.length -1];
    }
}
document.getElementById("btnLastEven").onclick = findNumEven;


// sắp xếp tăng dần
function ascending(){
    var arrNewAsc = [];
    for(var i = 0; i < arrNum.length; i++){
        arrNewAsc.push(arrNum[i]);
    }

    for(var i = 0; i < arrNewAsc.length; i++){
        for(var j = 0; j < arrNewAsc.length - 1; j++){
            if(arrNewAsc[j] > arrNewAsc[j + 1]){
                var temp = arrNewAsc[j];
                arrNewAsc[j] = arrNewAsc[j + 1];
                arrNewAsc[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtRaise").innerHTML ="Dãy số tăng dần là: " + arrNewAsc;
}
document.getElementById("btnRaise").onclick = ascending;


// số nguyên tố đầu tiên
function ktraSNT(n){
    if(n < 2){
        return false;
    }
    if(n == 2){
        return true;
    }
    if(n % 2 == 0){
        return false;
    }
    for(var i = 3; i < (n -1); i += 2){
        if(n % i == 0){
            return false;   
        }
    }
    return true;
}

function firstSNT(){
    var SNT = 0;
    var arrSNT = [];
    for(var i = 0; i < arrNum.length; i++){
        if(ktraSNT(arrNum[i]) == true){
            arrSNT.push(arrNum[i]);
            SNT = arrSNT[0];
            document.getElementById("txtSoNguyenTo").innerHTML = "Số nguyên tố đầu tiên: " + SNT;
            break;
        }else{
            document.getElementById("txtSoNguyenTo").innerHTML = -1 + "(không có số nguyên tố)";
        }
    } 
}
document.getElementById("btnSoNguyenTo").onclick = firstSNT;


// đếm số nguyên
function ktraSoNguyen(n){
    if(n == parseInt(n)){
        return true;
    }else{
        return false;
    }
}

function countSoNguyen(){
    count = 0;
    for(var i = 0; i < arrNum.length; i++){
        if(ktraSoNguyen(arrNum[i]) == true){
            count++
            document.getElementById("txtSoNguyen").innerHTML = "Có " + count + " số nguyên";
        }
    }
}
document.getElementById("btnSoNguyen").onclick = countSoNguyen;


// so sánh
function soSanh(){
    var soDuong = 0;
    var soAm = 0;
    for(var i = 0; i < arrNum.length; i++){
        if(arrNum[i] > 0){
            soDuong++;
        }else{
            soAm++;
        }
    }

    if(soDuong > soAm){
        document.getElementById("txtSoSanh").innerHTML = "Số dương nhiều hơn số âm";
    }else if(soDuong < soAm){
        document.getElementById("txtSoSanh").innerHTML = "Số âm nhiều hơn số dương";
    }else{
        document.getElementById("txtSoSanh").innerHTML = "Bằng nhau";
    }
}
document.getElementById("btnSoSanh").onclick = soSanh;

