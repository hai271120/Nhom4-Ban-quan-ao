let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

let q=[];
document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-price').innerHTML = product.price + " đ";
let img=document.getElementById('product-img')
img.innerHTML='';
for (let i = 0; i < product['img'].length; i++) {
    img.innerHTML +=
        `<div>
        <div><img src="${product['img'][i]}"></div>
        </div>`
}

function them()
{
    let search = document.getElementById('id');
    product.sl=  Number(search.value.trim());
    q.push(product);
    viewDetail(product.name);
}

function viewDetail(name) {
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('mang', JSON.stringify(q))
    window.location.href = 'gio hang.html';
}
