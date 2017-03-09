var cart = []

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}


function setCart(array){
  cart = array;
}

function getCart(){
  return cart;
}

function addToCart(item){
var price = randomPrice();
cart.push('{item}: price')
console.log(`${item} has been added to your cart.`)
return cart;
}

function randomPrice() {
  var random = Math.random() * 100
  return Math.floor(random);
}


 function viewCart() {
  var array = []
   for (let i = 0, l = cart.length; i < l; i++) {
    var item = Object.keys(cart[i])[0]
    var price = cart[i][item]
    var string = `${item} at $${price}`
     array.push(string)
  }
  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  else {
   console.log(`In your cart, you have ${array.join(', ')}.`)
  }
 }
