var product = [{
    id: 1,
    img: '../src/img/anh-nguyen-kcA-c3f_3FE-unsplash.jpg',
    name: 'salad',
    price: 35,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'food'
}, {
    id: 2,
    img: '../src/img/T-shirt.jpg',
    name: 'T-shirt',
    price: 120,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'clothes'
}, {
    id: 3,
    img: '../src/img/pencil.jpg',
    name: 'pencil',
    price: 10,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'stationery'
}
];


$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="${product[i].type} bg-white p-2 cursor-pointer transition delay-100 hover:scale-105 hover:shadow-xl product-items">
                    <img src="${product[i].img}" class="object-cover rounded-xl">
                    <p>${product[i].name}</p>
                    <p>${ numberWithCommas(product[i].price)} THB</p>
                 </div>`;
    }
    $("#productlist").html(html);

})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchproduct(param) {
    console.log(param)
    $(".product-items").css('display', 'none')
    if(param == 'all') {
        $(".product-items").css('display', 'block')
    }
    else {
        $("."+param).css('display', 'block')
    }
}

var productindex = 0;
function openProductDetail(index) {
    productindex = index;
    console.log(productindex)
    $("#modalDesc").css('display', 'flex')
    $("#mdd-img").attr('src', product[index].img);
    $("#mdd-name").text(product[index].name)
    $("#mdd-price").text( numberWithCommas(product[index].price) + ' THB')
    $("#mdd-desc").text(product[index].description)
}

function closeModal() {
    $(".modal").css('display','none')
}