/**BT1:
 * Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3
số theo thứ tự tăng dần.
 */
document.getElementById('btnSapXep').onclick=function(){
    //input:
    var a=Number(document.getElementById('nhapSo_1').value);
    var b=Number(document.getElementById('nhapSo_2').value);
    var c=Number(document.getElementById('nhapSo_3').value);
    //out
    var sapXep='';
    //progress
    if(a>=b && a>=c && c>=b)
    {
        sapXep=b+'<'+c+'<'+a;
    }else if(a>=b && a>=c && b>=c ){
        sapXep=c+'<'+b+'<'+a;
    }else if(b>=a && b>=c && c>=a){
        sapXep=a+'<'+c+'<'+b;
    }else if(b>=a && b>=c && a>=c){
        sapXep=c+'<'+a+'<'+b;
    }else if(c>=a && c>=b && a>=b){
        sapXep=b+'<'+a+'<'+c;
    }else{
        sapXep=a+'<'+b+'<'+c;
    }
    document.getElementById('ketQua_b1').innerHTML=sapXep;
}
//     if(a>b){
//         if(b>c){
//             sapXep=c+'<'+b+'<'+a;
//         }else{
//             if(a>c){
//                 sapXep=b+'<'+c+'<'+a;
//             }else{
//                 sapXep=b+'<'+a+'<'+c;
//             }
//         }
//     }else{
//         if((b>c)){
//             if(a>c){
//                 c+'<'+a+'<'+b;
//             }else{
//                 sapXep=a+'<'+c+'<'+b;
//             }
//         }else{
//             sapXep=a+'<'+b+'<'+c;
//         }
//     }
//     document.getElementById('ketQua_b1').innerHTML=sapXep;
// }


//BT2
/**
Viết chương trình “Chào hỏi” các thành viên trong gia
đình với các đặc điểm. Đầu tiên máy sẽ
hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
 */

//input
document.getElementById('btnLoiChao').onclick=function(){
    var tagvalue=document.getElementById('select').value;
    var ketqua_2='';
    var giatri=tagvalue.options;
    giatri=tagvalue;
        switch (giatri){
            case 'F':{
                ketqua_2='Xin chào người lạ ơi!!!';
                break;
            }
            case 'A':{
                ketqua_2='Xin chào Ba';
                break;
            }
            case 'B':{
                ketqua_2='Xin chào Mẹ';
                break;
            }
            case 'C':{
                ketqua_2='Xin chào Anh Trai';
                break;
            }
            default:{
                ketqua_2='Xin chào Em gái';
                break;
            }
        }
    document.getElementById('ketQua_b2').innerHTML=ketqua_2;
}
//////BT3::Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
document.getElementById('btnDem').onclick=function(){
    //input
    var soT1=Number(document.getElementById('soThu1').value);
    var soT2=Number(document.getElementById('soThu2').value);
    var soT3=Number(document.getElementById('soThu3').value);
    //out
    var soChan=0;
    var soLe=0;
    if(soT1%2===0){
        soChan+=1;
    }else{
        soLe+=1;
    }

    if(soT2%2===0){
        soChan+=1;
    }else{
        soLe+=1;
    }

    if(soT3%2===0){
        soChan+=1;
    }else{
        soLe+=1;
    }
    document.getElementById('ketQua_b3').innerHTML='Có '+soChan+' Số chẳn '+ ' và '+soLe+' Số lẻ';
}
//BT4:
document.getElementById('btnDuDoan').onclick=function(){
    //input
    var canh1=Number(document.getElementById('canh1').value);
    var canh2=Number(document.getElementById('canh2').value);
    var canh3=Number(document.getElementById('canh3').value);
    //out
    var loaiTamGiac='';
    //progress
    if(canh1===canh2&&canh2===canh3){
        loaiTamGiac='Tam giác đều';
    }else if(canh1===canh2 || canh1===canh3||canh2===canh3){
        loaiTamGiac='tam giác cân';
    }else if(canh1*canh1===canh2*canh2+canh3*canh3||canh2*canh2===canh1*canh1+canh3*canh3||canh3*canh3===canh1*canh1+canh2*canh2){
        loaiTamGiac='Tam giác vuông';
    }else{
        loaiTamGiac='Loại tam giác khác!!!'
    }
    document.getElementById('ketQua_b4').innerHTML=loaiTamGiac;
}