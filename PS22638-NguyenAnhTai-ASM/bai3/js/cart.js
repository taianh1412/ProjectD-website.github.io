document.getElementById("showcart").style.display = "none";

var giohang = new Array;

function themvaogiohang(x) {
    var nodeSP = x.parentElement.children;
    var hinh = nodeSP[0].children[0].src;
    var giasp = nodeSP[1].children[0].innerText;
    var tensp = nodeSP[2].innerText;
    var soluong = nodeSP[3].value;
    var sp = [hinh, tensp, giasp, soluong];
    // kiem tra sp co trong gio hang chua
    var ktra = 0;
    for (var i = 0; i < giohang.length; i++) {
        if (giohang[i][1] == tensp) {
            var sl = giohang[i][3];
            sl = Number(sl) + Number(soluong);
            giohang[i][3] = sl;
            ktra = 1;
            break;
        }
    }

    if (ktra == 0) giohang.push(sp);
    demgiohang();
    showmycart();
    //dua gio hang len sessionStorage
    sessionStorage.setItem("ssgiohang", JSON.stringify(giohang));

    //  console.log(arrsp);
    // alert(soluong);
    // console.log(nodeSP);
}

function laydon() {
    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang = JSON.parse("gh_str");
    var ttgh = "";
    var tongtt = 0;
    for (var i = 0; i < giohang.length; i++) {
        var tt = Number(giohang[i][2]) * Number(giohang[i][3]);
        tongtt += tt;
        ttgh += `
        <tr>
            <td>${i + 1}</td>
            <td><img src='${giohang[i][0]}'></td>
            <td>${giohang[i][1]}</td>
            <td>${giohang[i][2]}</td>
            <td>${giohang[i][3]}</td>
            <td>${tt} ($B)</td>
        </tr>
        `
    }
}

function demgiohang() {
    var a = giohang.length;
    document.getElementById("countsp").innerText = a;
}

function showcart() {
    var x = document.getElementById("showcart");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    showmycart();
}

function showmycart() {
    var ttgh = "";
    var tongtt = 0;
    for (var i = 0; i < giohang.length; i++) {
        var tt = Number(giohang[i][2]) * Number(giohang[i][3]);
        tongtt += tt;
        ttgh += `
        <tr>
            <td>${i + 1}</td>
            <td><img src='${giohang[i][0]}'></td>
            <td>${giohang[i][1]}</td>
            <td>${giohang[i][2]}</td>
            <td>${giohang[i][3]}</td>
            <td>${tt} ($B)</td>
        </tr>
        `
    }
    ttgh += `
    <tr>
        <td colspan="5">TONG DON HANG</td>
        <td>${tongtt} ($B)</td>
    </tr>
    `
    document.getElementById("mycart").innerHTML = ttgh;
}