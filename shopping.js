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
function getCart(){
	return cart;
}
function addToCart(item){
 var object={};
 object[item]=Math.floor(Math.random()*100);
 cart.push(object);
 console.log(`${item} has been added to your cart.`);
 return cart;
}
function viewCart(){
	if(cart.length==0)
	{
		console.log("Your shopping cart is empty.");
  }
  else
  {
    var str="In your cart, you have ";
    for (var i=0;i <cart.length;i++)
    {
      for (var key in cart[i])
      { 
        str+=key+" at $"+cart[i][key]+", ";
      } 
    }
    console.log(str.slice(0,-2)+".");
  }
}
function removeFromCart(item){
  var itemInCart=false;
  for (var i=0;i <cart.length;i++)
  {
    if(cart[i].hasOwnProperty(item))
    {
      itemInCart=true;
      cart.splice(i,1);
    }
  }
  if(!itemInCart)
  {
    console.log("That item is not in your cart.");
  }
}
function placeOrder(cardNumber){
  if(!cardNumber)
  {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else
  {
    console.log("Your total cost is $"+total()+", which will be charged to the card "+cardNumber+".")
  return cart=[];
  }
}