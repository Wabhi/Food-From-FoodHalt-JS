// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Cart


//>>>>>>>>>>>>>Cart popup.
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart-btn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close-cart")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  //console.log('cart clicked!')
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   console.log('close button!');
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// //>>>>>>>>>>>>>Click the items.
// let cartItems = document.querySelectorAll('.add_cart');


// const products = [
//     {
//         id:0,
//         name: "Barbecue salad",
//         detail: "Delicious dish",
//         price: 150,
//         inCart:0
//     },
//     {
//         id:1,
//         name: "Salad with fish",
//         detail: "Spicy dish",
//         price: 250,
//         inCart:0
//     },
//     {
//         id: 2,
//         name: "Mughlai salad",
//         detail: "salad dish",
//         price: 110,
//         inCart:0
//     },
//     {
//         id:3,
//         name: "Noodles",
//         detail: "Chinies dish",
//         price: 155,
//         inCart:0
//     },
//     {
//         id:4,
//         name: "Kabab",
//         detail: "Roasted chicken",
//         price: 278,
//         inCart:0
//     },
//     {
//         id:5,
//         name: "Chola bhathura",
//         detail: "Spicy dish",
//         price: 125,
//         inCart:0
//     }
// ]
// const cart = [];
// for (let i = 0; i < cartItems.length; i++){
//     cartItems[i].addEventListener('click', (e) => {
//         e.preventDefault()
//         cartNumber(products[i])
//         cart.push(cartItems[i])
//         totalSum(products[i])
//     })
// }

// function cartNumber(product) {
//     //console.log('add to cart : ',product)
//     let productNumber = localStorage.getItem('cartNumber')
//     //console.log('my pnumber',productNumber)
//      productNumber = parseInt(productNumber)
//      //console.log(productNumber)
//      //console.log(typeof productNumber)
//     if (productNumber) {
//         localStorage.setItem('cartNumber', productNumber + 1)
//         document.querySelector('.nav_item span').textContent = productNumber + 1;
//     } else {
//         localStorage.setItem('cartNumber', 1)
//         document.querySelector('.nav_item span').textContent = 1;
//     }
//     setItems(product)
// }

// function setItems(product) {
//     //console.log('my product is: ',product)
//     let cartItems = localStorage.getItem('productInCart')
//     // console.log('product',cartItems)
//     // console.log(typeof cartItems)
//     cartItems = JSON.parse(cartItems)
//     if (cartItems != null) {
//         //console.log(cartItems[product.name])
//         if (cartItems[product.name] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.name]:product
//             }
//         }
//         cartItems[product.name].inCart += 1
//     } else {
//         product.inCart = 1
//         cartItems = {
//            [product.name] : product
//         }
//     }
//     localStorage.setItem('productInCart',JSON.stringify(cartItems))
// }

// function toLoadCartNumber() {
//     let productNumber = localStorage.getItem('cartNumber')
//     if (productNumber) {
//         document.querySelector('.nav_item span').textContent = productNumber;
//     }
// }
// function totalSum(product) {
//     //console.log('the price of item ',product.price)
//     //console.log('total cost:',cartCost)
//     let cartCost = localStorage.getItem('totalCost')
//     // console.log(cartCost,typeof cartCost)
//     if (cartCost != null) {
//         cartCost = parseInt(cartCost)
//         localStorage.setItem('totalCost',cartCost+product.price)
//     } else {
//         localStorage.setItem('totalCost',product.price)
//     }
// }
// function displayCart() {
//     let cartItems = localStorage.getItem('productInCart');
//     cartItems = JSON.parse(cartItems);
//     //console.log(cartItems)
//     let product_container = document.querySelector('.modal-body')
//     let cartCost = localStorage.getItem('totalCost')
//     if (cartItems && product_container) {
//         document.getElementById('hunger').style.display = "none"
//         document.getElementById('emoji').style.display="none"
//         //console.log('running')
//         product_container.innerHTML = '';
//         Object.values(cartItems).map((item) => {
//             //console.log(productId)
//             product_container.innerHTML = product_container.innerHTML + `
//             <div class="product">
//                <div class="cancel_icon">
//                  <ion-icon id="close_button_item" name="close-circle" style="color:blue;cursor:pointer; font-size:25px" ></ion-icon>
//                </div>
//                <div class="itemName">
//                   <h3>${item.name}</h3>
//                </div>
//                <div class="priceItem">
//                   <h3>₹${item.price}</h3>
//                </div>
//                <div class="inCart">
//                   <h3><ion-icon name="caret-back" style="cursor:pointer; color:blue" ></ion-icon>${item.inCart}<ion-icon name="caret-forward" style="cursor:pointer; color:blue"></ion-icon></h3>
//                </div>
//                <div class="totalPrice">
//                    <h3>₹${item.inCart * item.price}</h3> 
//                </div>
//             </div>
//           `
//         });
//         product_container.innerHTML = product_container.innerHTML + `
//         <div class="cartAllProduct">
//            <h3 class="total_item_cost" style="margin-top:10px; color:#ffff00;">Total cost: ₹${cartCost}</h3>
//         </div>
//         `
//     } else {
//         document.getElementById('empty_cart').innerText = "Your cart is empty"
//         document.getElementById('order_now').style.display="none"
//     }
// }

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Remove items from cart.

// displayCart()
// toLoadCartNumber()
let carts = document.querySelectorAll('.add_cart');

let products = [{
    id: 0,
    name: "Barbecue salad",
    detail: "Delicious dish",
    price: 150,
    inCart: 0
  },
  {
    id: 1,
    name: "Salad with fish",
    detail: "Spicy dish",
    price: 250,
    inCart: 0
  },
  {
    id: 2,
    name: "Mughlai salad",
    detail: "salad dish",
    price: 110,
    inCart: 0
  },
  {
    id: 3,
    name: "Noodles",
    detail: "Chinies dish",
    price: 155,
    inCart: 0
  },
  {
    id: 4,
    name: "Kabab",
    detail: "Roasted chicken",
    price: 278,
    inCart: 0
  },
  {
    id: 5,
    name: "Chola bhathura",
    detail: "Spicy dish",
    price: 125,
    inCart: 0
  }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', (e) => {
      e.preventDefault()
       cartNumbers(products[i]);
      totalCost(products[i]);
      setItems(product);

  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.nav_item span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem("cartNumbers", productNumbers - 1);
    document.querySelector('.nav_item span').textContent = productNumbers - 1;
    //console.log("action running");
  } else if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector('.nav_item span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector('.nav_item span').textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = product.name;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: product
      }
    }
    cartItems[currentProduct].inCart += 1;

  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product
    };
  }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    displayCart()
}

function totalCost(product, action) {
  let cart = localStorage.getItem("totalCost");

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem("totalCost", cart - product.price);
  } else if (cart != null) {

    cart = parseInt(cart);
    localStorage.setItem("totalCost", cart + product.price);

  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let cart = localStorage.getItem("totalCost");
  cart = parseInt(cart);

  let productContainer = document.querySelector('.modal-body');

    if (cartItems && productContainer) {
      document.getElementById('hunger').style.display = "none"
      document.getElementById('emoji').style.display="none"
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item, index) => {
      productContainer.innerHTML +=
        `
            <div class="product">
               <div class="cancel_icon">
                 <ion-icon id="close_button_item" name="close-circle" style="color:blue;cursor:pointer; font-size:25px" ></ion-icon>
                 <h3 style="display:none;">${item.name}</h3>
               </div>
               <div class="itemName">
                  <h3>${item.name}</h3>
               </div>
               <div class="priceItem">
                  <h3>₹${item.price}</h3>
               </div>
               <div class="inCart">
                  <h3><ion-icon name="caret-back" class="decrease" style="cursor:pointer; color:blue" ></ion-icon>${item.inCart}<ion-icon class="increase" name="caret-forward" style="cursor:pointer; color:blue"><h3 style="display:none">${item.name}</h3></ion-icon></h3>
               </div>
               <div class="totalPrice">
                   <h3>₹${item.inCart * item.price}</h3> 
               </div>
            </div>
          `
    });
    productContainer.innerHTML = productContainer.innerHTML + `
        <div class="cartAllProduct">
           <h3 class="total_item_cost" style="margin-top:10px; color:#ffff00;">Total cost: ₹${cart}</h3>
        </div>
        `
  } else {
      document.getElementById('empty_cart').innerText = "Your cart is empty"
      document.getElementById('order_now').style.display = "none"
  }

  deleteButtons();
  manageQuantity();
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.inCart .decrease');
  let increaseButtons = document.querySelectorAll('.inCart .increase');
  let currentQuantity = 0;
  let currentProduct='';
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  for (let i = 0; i < increaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      //console.log(cartItems);
        currentQuantity = decreaseButtons[i].nextSibling.textContent;
        //console.log(currentQuantity);
        //console.log('clicked decrease!')
        currentProduct = decreaseButtons[i].nextSibling.nextSibling.textContent.trim();
        //currentProduct = decreaseButtons[i].nextSibling.nextSibling.textContent;
        //console.log(currentProduct)
        //console.log(currentProduct)
        //console.log(currentProduct, currentProduct.length);
        //console.log(cartItems['Noodles'].inCart)
         //console.log(currentProduct,typeof currentProduct)
        //console.log(cartItems[currentProduct].inCart)
       if (cartItems[currentProduct].inCart > 1) {
         cartItems[currentProduct].inCart -= 1;
         cartNumbers(cartItems[currentProduct], "decrease");
         totalCost(cartItems[currentProduct], "decrease");
         localStorage.setItem('productsInCart', JSON.stringify(cartItems));
         displayCart();
       }
     });

    increaseButtons[i].addEventListener('click', () => {
      //console.log(cartItems);
      currentQuantity = increaseButtons[i].previousSibling.textContent;
      //console.log(currentQuantity);
      currentProduct = increaseButtons[i].textContent.trim();
      //console.log(currentProduct);

      cartItems[currentProduct].inCart += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.cancel_icon ion-icon');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  //console.log(cartItems);
  //const arrayItem = ['']
  for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', () => {
      //console.log('button clicked!',i)
      //console.log(cartItems['saladwithfish'].inCart)
          productName = deleteButtons[i].nextElementSibling.textContent
          //console.log(productName)
      //console.log(productName)
      
       localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
       localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

        delete cartItems[productName];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
     onLoadCartNumbers();
    })
  }
}

onLoadCartNumbers();
displayCart();
