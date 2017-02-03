var cart = [];
function getCart() {
  return cart ;
}

function setCart(arr) {
  cart = arr;
}

function addToCart(item) {
   cart.push({[item]: Math.floor(Math.random() * 100)});
   console.log(item + " has been added to your cart.");
   return cart;
}

function viewCart() {
  if ( getCart().length === 0) {return console.log("Your shopping cart is empty.");}
  var msg=["In your cart, you have "];
  getCart().forEach(function(item) {
    msg.push(Object.keys(item) + " at $" + item[Object.keys(item)]); /*itemnames with prices*/
  });
  console.log(msg.join(", ").replace("have ,","have") +"." );
}

function removeFromCart(itemName) {
  for(var item in cart) {
    if (item == itemName) {return item }
  }
    item ? getCart().splice(getCart().indexOf(item), 1) : console.log("That item is not in your cart.");
  getCart();
}

function total() {
  let t = 0

  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t;
}

function placeOrder(num) {
 if(! num){console.log("We don't have a credit card on file for you to place your order.");}
 else{
   console.log("Your total cost is $"+ total()+", which will be charged to the card "+ num +".");
   cart=[];
 }
}
