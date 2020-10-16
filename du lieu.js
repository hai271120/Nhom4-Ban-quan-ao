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
        img: '',
    },
    {
        name: 'quanNuJean',
        price: 249e3,
        img: '',
    },
    {
        name: 'quanNamKakiBaggy',
        price: 199e3,
        img: '',
    },
    {
        name: 'quanNuJogger',
        price: 249e3,
        img: '',
    },
];

let c = [];
displaylistphone(sp)

function displaylistphone(phones) {
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listphones.innerHTML +=
            `<li>${i + 1}</li>
            <li><img class="" src="${sp[i]['img'][0]}"></li>
            <li><a href="file:///D:/web/san%20phan%20chinh/lua%20chon.html">${phoneName.name}</a></li>
            <li>${phoneName.price}</li>`
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
        displaylistphone(a);
    }
}

function enterLogin(e, t) {
    if (e.key === 'Enter') data();
}


