var cart=[]

function getCart(){
  return cart;
}
function setCart(c) {
  cart = c
}
function addToCart(item){
  var price=Math.random() *100
  price=Math.floor(price)
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length==0) {
    return console.log("Your shopping cart is empty.")
  }
  else {
  const itemsAndPrices = []
  for (var i = 0; i < cart.length; i++) {
     itemAndPrice = cart[i]
     item = Object.keys(itemAndPrice)[0]
     price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}
}
function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}


function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
