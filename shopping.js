var cart=[];
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
	cart=array;
}

function getCart() {
	return cart;
}

function addToCart(item) {
	var ran = Math.random() * 100;
	var price = Math.floor(ran);
	cart.push({[item]: price});
	console.log(`${item} has been added to your cart.`);
    return cart;	
}

function viewCart() {

if ( cart.length === 0) {
	return console.log("Your shopping cart is empty.");
}

  else
    {
      var string="In your cart, you have ";
      for (var i=0;i <cart.length;i++){
      
        for (var item in cart[i]){ string += item+" at $"+cart[i][item]+", ";}
      
      }
      console.log(string.slice(0,-2)+".");
    }
}


function removeFromCart(removedItem) {
	var existed = false;
  for (var i=0;i <cart.length;i++)
      {
      if(cart[i].hasOwnProperty(removedItem))
      {
        existed = true;
            cart.splice(i,1);
      }
    }
    if(!existed)
  {
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber) {
 if(!cardNumber){
 	console.log("We don't have a credit card on file for you to place your order.");}

 else{
   console.log("Your total cost is $"+ total()+", which will be charged to the card "+ cardNumber +".");
   cart=[];
 }
}