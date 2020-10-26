let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));
let t = JSON.parse(localStorage.getItem('mang'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

function enterLogin(e, t) {
    if (e.key === 'Enter') dataName();
}
function displaylistphone(phones) {
    // tiều đề bảng
    let kt= document.getElementById('tieude')
    kt.innerHTML=
                `<td style="text-align: center">STT</td>
                <td>Tùy chỉnh</td>
                <td>Tên sản phẩm</td>
                <td style="text-align: center">Ảnh</td>
                <td style="text-align: center">Giá tiền</td>
                <td style="text-align: center">Số lượng</td>
                <td style="text-align: center">Thành tiền</td> `

    // nội dung bảng
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listphones.innerHTML +=
            `<tr>
            <td><div style="text-align: center">${i + 1}</div></td>
            <td><div><button onclick="xoa(${i})">Xóa</button></div><div><button onclick="sua(${i})">Sửa</button></div></td>
            <td>${phoneName.name}</td>
            <td><img style="text-align: center" width="40px" height="50px" class="" src="${phoneName['img'][0]}"></td>
            <td style="text-align: right">${phoneName.price}đ</td>
            <td style="text-align: right">x${phoneName.sl}</td>
            <td style="text-align: right">${phoneName.price * phoneName.sl}đ</td>
            <tr>
            `
    }

    // tổng kết
    let tien = 0;
    for (let i = 0; i < t.length; i++) {
        tien = tien + (t[i]['price'] * t[i]['sl'])
    }
    let tinh = document.getElementById('tien')
    tinh.innerHTML =
        `
    <td colspan="6" style="text-align: center">TỔNG</td>
    <td style="text-align: right">${tien}đ</td>`

}
if (localStorage.getItem('mang') === '[]') {
    let kt = document.getElementById('kt')
    kt.innerHTML = `
    <tr>
    <td>Bạn chưa chọn sản phẩm</td>
    </tr>`
}
else {
    displaylistphone(t)
}
function xoa(a) {
    t.splice(a, 1);
    viewDetail();
}
const luongHang = document.getElementById('luonghang')
luongHang.innerText = t.length

function sua(a)
{
    kt = t[a]['name']
    viewDetail1(kt)
}

function viewDetail() {
    localStorage.setItem('mang', JSON.stringify(t));
    window.location.href = 'gio hang.html';
}

function viewDetail1(a)
{
    localStorage.setItem('selected', a)
    window.location.href = 'lua chon.html'
}

function dataNam()
{
    localStorage.setItem('k', 'Nam')
    window.location.href = 'cua hang quan ao.html'
}

function dataNu()
{
    localStorage.setItem('k', 'Nu')
    window.location.href = 'cua hang quan ao.html'
}

function dataName()
{
    let key = document.getElementById('search')
    localStorage.setItem('k', key.value.trim())
    window.location.href = 'cua hang quan ao.html'
}
