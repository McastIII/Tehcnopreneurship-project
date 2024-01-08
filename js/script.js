let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
    }
    //cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
//cart function
function ready() {
    //item remove
    var removeCart = document.getElementsByClassName('remove-cart')
    console.log(removeCart)
    for (var i = 0; i < removeCart.length; i++) {
        var button = removeCart[i]
        button.addEventListener("click", removeitem)
    }
    //quantity function
    var quantityInput = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i]
        input.addEventListener("change", quantityChanged);
    }
    //add items to cart
    var addtoCart = document.getElementsByClassName('btn')
    for (var i = 0; i < addtoCart.length; i++) {
        var button = addtoCart[i];
        button.addEventListener("click", addtoCartClicked);

    }
    //checkout button function
    document.getElementsByClassName("checkout-btn")[0].addEventListener("click", checkoutButtonClicked);
}

function checkoutButtonClicked() {
    alert("Your order is placed.");
    var cartContent = document.getElementsByClassName("cart-content")[0]
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild)
    }
    totalupdate();

}

//delete item
function removeitem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.remove()
    totalupdate();
}
//quantity changes function
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    totalupdate();
}
//Add to cart function
function addtoCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("item-name")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImage = shopProducts.getElementsByClassName("product-img")[0].src;
    additemstoCart(title, price, productImage);
    totalupdate();
}
//add items to cart function
function additemstoCart(title, price, productImage) {
    var Shopcart = document.createElement("div");
    Shopcart.classList.add("cart-box");
    var cartitem = document.getElementsByClassName("cart-content")[0];
    var cartitemnames = cartitem.getElementsByClassName("cart-product");
    for (var i = 0; i < cartitemnames.length; i++) {
        if (cartitemnames[i].innerText == title) {
            alert("Already added to your cart.");
            return;
        }
    }

    var CartBoxContent = `
                        <img src="${productImage}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="quantity">
                        </div>
                      
                        <i class="fas fa-trash remove-cart"></i>`;
    Shopcart.innerHTML = CartBoxContent;
    cartitem.append(Shopcart);
    Shopcart.getElementsByClassName("remove-cart")[0].addEventListener("click", removeitem);
    Shopcart.getElementsByClassName("quantity")[0].addEventListener("change", quantityChanged);
}



//total function
function totalupdate() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBox = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBox.length; i++) {
        var cartb = cartBox[i];
        var priceElement = cartb.getElementsByClassName("cart-price")[0];
        var quantityElement = cartb.getElementsByClassName("quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₱", ""));
        var quantityno = quantityElement.value;
        total = total + price * quantityno;
    }
    document.getElementsByClassName("total-price")[0].innerText = "₱" + total;


}


window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});