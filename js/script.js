//Bai tap 1: Sap xeo tang dan
let soThuNhatEl = document.querySelector('#so-thu-nhat')
let soThuHaiEl = document.querySelector('#so-thu-hai')
let soThuBaEl = document.querySelector('#so-thu-ba')
let nutSapXep = document.querySelector('#nut-sap-xep')
let ketQuaEl = document.querySelector('#ket-qua-sap-xep')

nutSapXep.addEventListener('click', function () {
    let soThuNhat = soThuNhatEl.value * 1
    let soThuHai = soThuHaiEl.value * 1
    let soThuBa = soThuBaEl.value * 1

    if (soThuNhat > soThuHai) {
        [soThuNhat, soThuHai] = [soThuHai, soThuNhat];
        if (soThuNhat > soThuBa) {
            [soThuNhat, soThuBa] = [soThuBa, soThuNhat];
            [soThuHai, soThuBa] = [soThuBa, soThuHai];
        }
        else if (soThuHai > soThuBa) {
            [soThuHai, soThuBa] = [soThuBa, soThuHai];
        }
    } else {
        if (soThuNhat > soThuBa) {
            [soThuNhat, soThuBa] = [soThuBa, soThuNhat];
            [soThuHai, soThuBa] = [soThuBa, soThuHai];
        }
        else if (soThuHai > soThuBa) {
            [soThuHai, soThuBa] = [soThuBa, soThuHai]
        }
    }
    ketQuaEl.value = soThuNhat + ', ' + soThuHai + ', ' + soThuBa
})

//Bai tap 2 Chao Hoi
let nguoiSuDungEl = document.querySelector('#nguoi-su-dung')
let btnChaoHoi = document.querySelector('#btn-chao-hoi')
let chaoHoiEl = document.querySelector('#chao-hoi')

btnChaoHoi.addEventListener('click', function () {
    let nguoiSuDung = nguoiSuDungEl.value
    let chaoHoi
    switch (nguoiSuDung) {
        case 'B':
            chaoHoi = 'Chào Bố!!!'
            break
        case 'M':
            chaoHoi = 'Chào Mẹ!!!'
            break
        case 'A':
            chaoHoi = 'Chào Anh Trai!!!'
            break
        case 'E':
            chaoHoi = 'Chào Em Gái!!!'
            break
        default:
            chaoHoi = "Vui lòng chọn một!!!"
    }
    chaoHoiEl.innerText = chaoHoi
})

//Bai tap 3: Tinh so chan va le
let soNguyenThuNhatEl = document.querySelector('#so-nguyen-thu-nhat')
let soNguyenThuHaiEl = document.querySelector('#so-nguyen-thu-hai')
let soNguyenThuBaEl = document.querySelector('#so-nguyen-thu-ba')
let soLeEl = document.querySelector('#so-le')
let soChanEl = document.querySelector('#so-chan')
let btnTinhChanLe = document.querySelector('#btn-tinh-chan-le')

btnTinhChanLe.addEventListener('click', function () {
    let soNguyenThuNhat = soNguyenThuNhatEl.value * 1
    let soNguyenThuHai = soNguyenThuHaiEl.value * 1
    let soNguyenThuBa = soNguyenThuBaEl.value * 1
    let soLe = 0
    let soChan = 0
    KiemTraChanLe(soNguyenThuNhat)
    KiemTraChanLe(soNguyenThuHai)
    KiemTraChanLe(soNguyenThuBa)
    function KiemTraChanLe(soNguyen) {
        if ((soNguyen % 2) == 0) {
            soChan++
        } else soLe++
    }
    soLeEl.value = soLe
    soChanEl.value = soChan
})

//Bai tap 4: Kiem tra tam giac
let canhThuNhatEl = document.querySelector('#canh-thu-nhat')
let canhThuHaiEl = document.querySelector('#canh-thu-hai')
let canhThuBaEl = document.querySelector('#canh-thu-ba')
let btnTamGiac = document.querySelector('#btn-tam-giac')
let ketQuaTamGiacEl = document.querySelector('#ket-qua-tam-giac')

btnTamGiac.addEventListener('click', function () {
    let canhThuNhat = canhThuNhatEl.value * 1
    let canhThuHai = canhThuHaiEl.value * 1
    let canhThuBa = canhThuBaEl.value * 1
    let ketQuaTamGiac

    if (canhThuNhat == canhThuHai && canhThuNhat == canhThuBa) {
        ketQuaTamGiac = 'Tam giác đều'
    } else if (canhThuNhat == canhThuHai || canhThuNhat == canhThuBa || canhThuHai == canhThuBa) {
        if (canhThuNhat == Math.sqrt((Math.pow(canhThuHai, 2)) + (Math.pow(canhThuBa, 2))) || canhThuHai == Math.sqrt((Math.pow(canhThuNhat, 2)) + (Math.pow(canhThuBa, 2))) || canhThuBa == Math.sqrt((Math.pow(canhThuHai, 2)) + (Math.pow(canhThuNhat, 2)))) {
            ketQuaTamGiac = 'Tam giác vuông cân'
        } else {
            ketQuaTamGiac = 'Tam giác cân'
        }

    } else if (canhThuNhat == Math.sqrt((Math.pow(canhThuHai, 2)) + (Math.pow(canhThuBa, 2))) || canhThuHai == Math.sqrt((Math.pow(canhThuNhat, 2)) + (Math.pow(canhThuBa, 2))) || canhThuBa == Math.sqrt((Math.pow(canhThuHai, 2)) + (Math.pow(canhThuNhat, 2)))) {
        ketQuaTamGiac = 'Tam giác vuông'
    } else ketQuaTamGiac = 'Tam giác không đều, không cân, không vuông'
    ketQuaTamGiacEl.innerHTML = ketQuaTamGiac
})

//Bài tập Nâng cao

//Bài Tập 1 Nang cao Ngay hom truoc - Ngay hom sau
let ngayEl = document.querySelector('#ngay')
let thangEl = document.querySelector('#thang')
let namEl = document.querySelector('#nam')
let homTruocEl = document.querySelector('#hom-truoc')
let homSauEl = document.querySelector('#hom-sau')
let btnTinhNgay = document.querySelector('#btn-tinh-ngay')

btnTinhNgay.addEventListener('click', function () {
    let ngay = ngayEl.value * 1
    let thang = thangEl.value * 1
    let nam = namEl.value * 1
    let homTruoc = ''
    let homSau = ''

    //Tinh ngay hom truoc
    if (ngay == 1) {
        if (thang == 1) {
            homTruoc = 31 + '/' + 12 + '/' + (nam - 1)
        } else if (thang == 3) {
            if (KiemTraNamNhuan(nam)) { //Kiem tra nam nhuan
                homTruoc = 29 + '/' + 2 + '/' + nam
            } else {
                homTruoc = 28 + '/' + 2 + '/' + nam
            }
        } else if (thang == 5 || thang == 7 || thang == 10 || thang == 12) {
            homTruoc = 30 + '/' + (thang - 1) + '/' + nam
        } else {
            homTruoc = 31 + '/' + (thang - 1) + '/' + nam
        }
    } else {
        homTruoc = (ngay - 1) + '/' + thang + '/' + nam
    }

    //Tinh ngay hom sau
    if ((ngay == 29 && thang == 2 && KiemTraNamNhuan(nam)) || (ngay == 28 && thang == 2) || ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        homSau = 1 + '/' + (thang + 1) + '/' + nam
    } else if (ngay == 31) {
        if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) {
            homSau = 1 + '/' + (thang + 1) + '/' + nam
        } else if (thang == 12) {
            homSau = 1 + '/' + 1 + '/' + (nam + 1)
        }
    } else {
        homSau = (ngay + 1) + '/' + thang + '/' + nam
    }

    homTruocEl.value = homTruoc
    homSauEl.value = homSau

})
function KiemTraNamNhuan(namNaoDo) {
    if((namNaoDo % 400 == 0) || (namNaoDo % 4 == 0 && namNaoDo % 100 != 0))
        return true
    else return false
}

//Bai tap 2 Nang cao Tinh ngay trong thang
let thangBT2El = document.querySelector('#thang-bt2')
let namBT2El = document.querySelector('#nam-bt2')
let btnTinhNgayBT2 = document.querySelector('#btn-tinh-ngay-bt2')
let soNgayTrongThangEl = document.querySelector('#so-ngay-trong-thang')

btnTinhNgayBT2.addEventListener('click', function () {
    let thangBT2 = thangBT2El.value * 1
    let namBT2 = namBT2El.value * 1
    let soNgayTrongThang
    if (thangBT2 == 4 || thangBT2 == 36 || thangBT2 == 9 || thangBT2 == 11) {
        soNgayTrongThang = 30
    } else if (thangBT2 == 2) {
        if (KiemTraNamNhuan(namBT2)) {
            soNgayTrongThang = 29
        } else soNgayTrongThang = 28
    } else soNgayTrongThang = 31

    soNgayTrongThangEl.value = soNgayTrongThang
})

//Bai tap 3 Nang cao Đọc số

let soCanDocEl = document.querySelector('#so-can-doc')
let docSoEl = document.querySelector('#doc-so')
let btnDocSo = document.querySelector('#btn-doc-so')

btnDocSo.addEventListener('click', function () {
    let soCanDoc = soCanDocEl.value * 1
    let docSo = ''
    let hangTram = Math.floor(soCanDoc / 100)
    let hangChuc = Math.floor((soCanDoc - hangTram * 100) / 10)
    let hangDonVi = Math.floor((soCanDoc - hangTram * 100 - hangChuc * 10))

    switch (hangTram) {
        case 1:
            docSo += "Một Trăm ";
            break
        case 2:
            docSo += "Hai Trăm ";
            break
        case 3:
            docSo += "Ba Trăm ";
            break
        case 4:
            docSo += "Bốn Trăm ";
            break
        case 6:
            docSo += "Sáu Trăm ";
            break
        case 7:
            docSo += "Bảy Trăm ";
            break
        case 8:
            docSo += "Tám Trăm ";
            break
        case 9:
            docSo += "Chín Trăm ";
            break
    }
    switch (hangChuc) {
        case 1:
            docSo += "Mười ";
            break
        case 2:
            docSo += "Hai Mươi ";
            break
        case 3:
            docSo += "Ba Mươi ";
            break
        case 4:
            docSo += "Bốn Mươi ";
            break
        case 5:
            docSo += "Năm Mươi "
        case 6:
            docSo += "Sáu Mươi ";
            break
        case 7:
            docSo += "Bảy Mươi ";
            break
        case 8:
            docSo += "Tám Mươi ";
            break
        case 9:
            docSo += "Chín Mươi ";
            break
    }

    if (hangChuc == 0) {
        docSo += "Linh "
        if (hangDonVi == 1)
            docSo += "Một"
        else if (hangDonVi == 5)
            docSo += "Năm"
    } else if (hangChuc == 1) {
        if (hangDonVi == 1)
            docSo += "Một"
        else if (hangDonVi == 5)
            docSo += "Lăm"
    } else {
        if (hangDonVi == 1)
            docSo += "Mốt"
        else if (hangDonVi == 5)
            docSo += "Lăm"

    }
    switch (hangDonVi) {
        case 2:
            docSo += "Hai";
            break
        case 3:
            docSo += "Ba";
            break
        case 6:
            docSo += "Sáu";
            break
        case 7:
            docSo += "Bảy";
            break
        case 8:
            docSo += "Tám";
            break
        case 9:
            docSo += "Chín";
            break
    }
    docSoEl.innerHTML = docSo
})


//Bai tap 4 SV Xa truong nhat

let tenSV1El = document.querySelector('#ten-sv1')
let tenSV2El = document.querySelector('#ten-sv2')
let tenSV3El = document.querySelector('#ten-sv3')
let xTruongEl = document.querySelector('#x-truong')
let yTruongEl = document.querySelector('#y-truong')
let xSV1El = document.querySelector('#x-sv1')
let ySV1El = document.querySelector('#y-sv1')
let xSV2El = document.querySelector('#x-sv2')
let ySV2El = document.querySelector('#y-sv2')
let xSV3El = document.querySelector('#x-sv3')
let ySV3El = document.querySelector('#y-sv3')
let btnSV = document.querySelector('#btn-sv')
let xuatTenEl = document.querySelector('#xuat-ten-sv')

btnSV.addEventListener('click', function () {
    let xTruong = xTruongEl.value * 1
    let yTruong = yTruongEl.value * 1
    let xSV1 = xSV1El.value * 1
    let ySV1 = ySV1El.value * 1
    let xSV2 = xSV2El.value * 1
    let ySV2 = ySV2El.value * 1
    let xSV3 = xSV3El.value * 1
    let ySV3 = ySV3El.value * 1

    function TinhKhoangCach(x, y) {
        return (Math.sqrt(Math.pow((x - xTruong), 2) + Math.pow((y - yTruong), 2)));
    }


    let khoangCachSV1 = TinhKhoangCach(xSV1, ySV1)
    let khoangCachSV2 = TinhKhoangCach(xSV2, ySV2)
    let khoangCachSV3 = TinhKhoangCach(xSV3, ySV3)

    if (khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3) {
        xuatTenEl.innerHTML = "Sinh Viên Xa Trường Nhất Là: " + tenSV1El.value
    } else if (khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3) {
        xuatTenEl.innerHTML = "Sinh Viên Xa Trường Nhất Là: " + tenSV2El.value
    } else
        xuatTenEl.innerHTML = "Sinh Viên Xa Trường Nhất Là: " + tenSV3El.value
})