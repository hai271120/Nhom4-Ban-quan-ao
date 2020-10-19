let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));
let t = JSON.parse(localStorage.getItem('mang'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

function displaylistphone(phones) {
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listphones.innerHTML +=
            `<div>
            <div>${phoneName.name}</div>
            <div><h4>${phoneName.price}đ (x${phoneName.sl})</h4></div>
            <div><img class="" src="${phoneName['img'][0]}"></div>
            <div><button><a onclick="xoa(i)" href="gio hang.html"> xoa </a></button></div>
            </div>`
    }
}

displaylistphone(t)
console.log(t);
function xoa(a) {
    t.splice(a, 1);
    viewDetail(t);
}

let tien = 0;
for (i = 0; i > t.length; i++) {
    tien = tien + (t[0]['price']*t[0]['sl'])
    console.log(tien)
}
let tong = document.getElementById('tong')
tong.innerHTML = tien +'đ'

function viewDetail(t) {
    localStorage.setItem('mang', JSON.stringify(t));
    window.location.href = 'gio hang.html';
}


