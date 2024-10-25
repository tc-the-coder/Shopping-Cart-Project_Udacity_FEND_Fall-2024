/* A product array */
let products = [
  { 
    name: "Cherry Chuckles Gift Box", 
    price: 27.00, 
    quantity: 0, 
    productId: 8675309, image: "./images/cherry.jpg" 
  },
  { 
    name: "Orange Dream Gift Box", 
    price: 22.00, 
    quantity: 0, 
    productId: 8675311, 
    image: "./images/orange.jpg" 
  },
  { 
    name: "Strawberry Surprise Gift Box", 
    price: 20.00, 
    quantity: 0, 
    productId: 8675313, 
    image: "./images/strawberry.jpg" 
  }
];

/* A cart array that holds the items in the cart */
let cart = [];

// A helper function that gets a product using the productId
function getProductById(products, productId) {
  return products.find((product) => product.productId === productId);
}

/* A function that adds products to the cart and increases them if they are already in the cart.
*/
function addProductToCart(productId) {
  const foundProduct = getProductById(products, productId)
  if (!foundProduct) return;
  foundProduct.quantity++;
  if (!cart.includes(foundProduct)){
    cart.push(foundProduct);
  }
}
/* A function that increases the quantity of items in the cart.
*/
function increaseQuantity(productId) {
  const cartItem = getProductById(products, productId)
  if (!cartItem) return;
  cartItem.quantity++;
}
/* Afunction that decreases the quantity of items in the cart*/
function decreaseQuantity(productId) {
  const cartItem = getProductById(products, productId)
  if (!cartItem) return;
  if (cartItem) {
      if (cartItem.quantity > 1) {
          cartItem.quantity -= 1; 
      } else {
          cart = cart.filter(item => item.productId !== productId); 
      }
  }
}
/* A function that removes a product from the cart.
*/
function removeProductFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  return cart;
}
/* A function that calculates the total of the cart.
*/
function cartTotal() { 
  let total = 0; 

  cart.forEach(products => {
      total += products.price * products.quantity;
  });

  return total; // Return total cost
}

/* A function that removes all items from the cart. */
function emptyCart() {
  cart = []; // Clear the entire cart
  products.forEach(product => product.quantity = 0);
}
/* Create a function that processes payment and determines if here is a remaining balance
    an amount that is due back to the customer.
*/
let totalPaid = 0;

function pay(amount) {  
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();

  if (remaining >= 0){
    totalPaid = 0;
    emptyCart();
  }
  return remaining; 

}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}
