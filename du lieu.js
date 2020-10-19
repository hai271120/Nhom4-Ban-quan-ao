let sp = [
    {
        name: 'aoNamSweater',
        price: 299e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.04.2.02.007.219.01.10200011___10__0630ea13500843c4a01096e3933dcff8_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.04.2.02.007.219.01.10200011___8__eadacb7270e34dd99de4c43aa55de2c2_1024x1024.jpg'
        ],
    },
    {
        name: 'aoNuHoodie',
        price: 349e3,
        img: ['https://product.hstatic.net/1000299894/product/1.0.06.2.02.002.219.01.10100011___5__92d19f8216c34eb4a53d0c9657c26c33_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.0.06.2.02.002.219.01.10100011___2__5bba1d0674b74150a8e46d4640b605e4_1024x1024.jpg'
        ],
    },
    {
        name: 'aoNamCoat',
        price: 499e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.05.2.05.003.219.01.10800030___2__0f9a37d11b7c412aa4546ecbc3c789dc_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.05.2.05.003.219.01.10800030___3__e3dd813a114c4aa4823aa421526672ab_1024x1024.jpg'
        ],
    },
    {
        name: 'quanNuJean',
        price: 249e3,
        img: ['https://product.hstatic.net/1000299894/product/31d448d1-dafd-4fd2-adac-f31ef598cf70_b5faebfb1ad74f2cac89b6a0452d08f4_1024x1024.jpeg',
            'https://product.hstatic.net/1000299894/product/31d448d1-dafd-4fd2-adac-f31ef598cf70_b5faebfb1ad74f2cac89b6a0452d08f4_1024x1024.jpeg'
        ],
    },
    {
        name: 'quanNamKakiBaggy',
        price: 199e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.22.2.14.002.120.23.10700023___1__7b6aecfca48a4400a565244c813d2748_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.22.2.14.002.120.23.10700023___3__95e3a49b16894a46b21f6dfc85e56dc5_1024x1024.jpg'
        ],
    },
    {
        name: 'quanNuJogger',
        price: 249e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.24.1.05.002.219.01__14__2585b103e4994e5bb0b29c029c17db35_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.24.1.05.002.219.01__16__dd843dff1cf14cd2b8e71b9ebb4772a2_1024x1024.jpg  '
        ],
    },
];

displaylistphone(sp);
const luongHang = document.getElementById('luonghang')
if (localStorage.getItem('mang') === null) {
    localStorage.setItem('mang', '[]')
}
let gioHang = JSON.parse(localStorage.getItem('mang'));
luongHang.innerText = gioHang.length


function displaylistphone(phones) {
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listphones.innerHTML +=
            `<div>
            <div onclick="viewDetail('${phoneName.name}')"><img class="" src="${phoneName['img'][0]}"></div>
            <div onclick="viewDetail('${phoneName.name}')"><h2>${phoneName.name}</h2></div>
            <div><h4>${phoneName.price}đ</h4></div>
            </div>`
    }
}

function data() {
    let a = [];
    let search = document.getElementById('search');
    let key = search.value.trim();
    let q = key;
    if (key < 1000) { q = key * 1000 }
    if (key === '') {
        return;
    }
    else {
        for (let i = 0; i < sp.length; i++) {
            const kt = sp[i];
            if (kt.price >= q) a.push(kt);
            else if (kt.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) a.push(kt);
        }
        if (a.length === 0) alert('khong tim thay yeu cau, moi ban nhap lai')
        else displaylistphone(a);
    }
}

function enterLogin(e, t) {
    if (e.key === 'Enter') data();
}

// function dataNam() {
//     let a = []
//     for (let i = 0; i < sp.length; i++) {
//         const kt = sp[i];
//         if (kt.name.toLowerCase().indexOf('nam') !== -1) a.push(kt);
//     }
//     displaylistphone(a);
// }

// function dataNu() {
//     let a = []
//     for (let i = 0; i < sp.length; i++) {
//         const kt = sp[i];
//         if (kt.name.toLowerCase().indexOf('nu') !== -1) a.push(kt);
//     }
//     displaylistphone(a);
// }
function viewDetail(name) {
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(sp));
    window.location.href = 'lua chon.html';
}
