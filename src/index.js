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
        html += `<div onclick="openProductDetail(${i})" class="${product[i].type} bg-white p-2 cursor-pointer transition delay-100 hover:scale-105 hover:shadow-xl product-items hover:rounded-xl">
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

var cart = []
function addtocart() {
    var pass = true;

    for (let i = 0; i < cart.length; i++) {
        if( productindex == cart[i].index) {
            console.log('found same product')
            cart[i].count++;
            pass = false;
        }
    }

    if(pass) {
        var obj = {
            index: productindex,
            id: product[productindex].id,
            name: product[productindex].name,
            price: product[productindex].price,
            img: product[productindex].img,
            count: 1
        };
        cart.push(obj)
    }

    Swal.fire({
        icon: 'success',
        title: 'Add ' + product[productindex].name + ' to cart !'
    })
    $("#cartcount").css('display','flex').text(cart.length)
}

function openCart() {
    $('#modalCart').css('display','flex')
    rendercart();
}

function rendercart() {
    if(cart.length > 0) {
        var html = '';
        for (let i = 0; i < cart.length; i++) {
            html += `<div class="flex justify-between mb-2.5">
                        <div class="flex">
                            <img src="${cart[i].img}" alt="" class="object-cover w-24 rounded-md">
                            <div class="ml-2.5">
                                <p">${cart[i].name}</p>
                                <p>${ numberWithCommas(cart[i].price * cart[i].count) } THB</p>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <p onclick="deinitems('-', ${i})" class="border border-black px-2 rounded-3xl cursor-pointer">-</p>
                            <p id="countitems${i}" class="mx-2">${cart[i].count}</p>
                            <p onclick="deinitems('+', ${i})" class=" border border-black px-2 rounded-3xl cursor-pointer">+</p>
                        </div>
                    </div>`;
        }
        $("#mycart").html(html)
    }
    else {
        $("#mycart").html(`<p>Not found product list</p>`)
    }
}

function deinitems(action, index) {
    if(action == '-') {
        if(cart[index].count > 0) {
            cart[index].count--;
            $("#countitems"+index).text(cart[index].count)

            if(cart[index].count <= 0) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure to delete?',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel'
                }).then((res) => {
                  if(res.isConfirmed) {
                     cart.splice(index, 1) 
                     console.log(cart)
                     rendercart();
                     $("#cartcount").css('display','flex').text(cart.length)
                     
                     if(cart.length <= 0) {
                        $("#cartcount").css('display','none')
                     }
                  }  
                  else {
                    cart[index].count++;
                    $("#countitems"+index).text(cart[index].count)
                    rendercart();
                  }
                })
            }
            rendercart();
        }
        
    }
    else if(action == '+') {
        cart[index].count++;
        $("#countitems"+index).text(cart[index].count)
        rendercart();
    }
}