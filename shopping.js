 var cart = []
function setCart(cart) {
return cart
}

function getCart() {
  return cart
}

function addToCart(item) {
	const price = Math.floor(Math.random() * 100)
	cart.push({[item]: price})
	console.log(`${item} has been added to your cart.`)
	return cart
}

function viewCart() {
	const e = cart.length
	if (e === 0) {
		 return console.log("Your shopping cart is empty.")
	}
	  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
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
 