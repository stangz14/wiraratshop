var total = 0;
var product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'salad',
    price: 35,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'food'
}, {
    id: 2,
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'T-shirt',
    price: 120,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'clothes'
}, {
    id: 3,
    img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'pen',
    price: 10,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'stationery'
}, {
    id: 4,
    img: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
    name: 'pancake',
    price: 25,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'food'
}, {
    id: 5,
    img: 'https://images.unsplash.com/photo-1533007576165-faccd6a6a056?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'yoghurt',
    price: 35,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'food'
}, {
    id: 6,
    img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
    name: 'cake',
    price: 45,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'food'
}, {
    id: 7,
    img: 'https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80',
    name: 'black-shirt 705',
    price: 120,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'clothes'
}, {
    id: 8,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'nike',
    price: 4500,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'clothes'
}, {
    id: 9,
    img: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
    name: 'red-shoes',
    price: 500,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'clothes'
}, {
    id: 10,
    img: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'pencil',
    price: 10,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'stationery'
}, {
    id: 11,
    img: 'https://images.unsplash.com/photo-1568639152391-61b4303bead7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    name: 'note',
    price: 30,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'stationery'
}, {
    id: 12,
    img: 'https://images.unsplash.com/photo-1612367980327-7454a7276aa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    name: 'note',
    price: 25,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nobis, id pariatur porro quos eaque sequi tempore quae eum dolore voluptatibus labore rerum vel. Quibusdam iure obcaecati consequuntur voluptas alias.',
    type:'stationery'
}
];


$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div onclick="openProductDetail(${i})" class="${product[i].type} bg-white p-2 cursor-pointer transition delay-100 hover:scale-105 hover:shadow-xl product-items hover:rounded-xl">
                      <div class="rounded-xl w-24 h-24 mx-auto lg:w-36 lg:h-36">
                      <img src="${product[i].img}" class=" mx-auto object-cover w-full h-full rounded-xl">
                       </div>
                    <p class="text-sm lg:text-base">${product[i].name}</p>
                    <p class="text-xs lg:text-sm">${ numberWithCommas(product[i].price)} THB</p>
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
        $("#Total").html()
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

