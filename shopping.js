function setCart(array){
	cart=array;
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
var cart=[];
function getCart(){
	return cart;
}
function addToCart(item){
	var obj={};
	obj[item]=Math.floor(Math.random()*100);
	cart.push(obj);
	console.log(item+" has been added to your cart.");
	return cart;
}
function removeFromCart(itemToDelete) {
	var found=false;
	for (var i = 0; i< cart.length; i++){
		if(cart[i].hasOwnProperty(itemToDelete)){
			found=true;
			cart.splice(i,1);
			return cart;
		}
	}
	if(!found){
		console.log("That item is not in your cart.")
	}
}



function viewCart() {
	var l=cart.length;
	if(!l){
		console.log("Your shopping cart is empty.")
	}
	else{
		var str='In your cart, you have';
		for (var i = 0; i< cart.length; i++){
			for (var item in cart[i]) {

				str+=` ${item} at \$${cart[i][item]},`
			}
		}
		str=str.slice(0,str.length-1)+".";

		console.log(str);
	}
	// body...
}
function placeOrder(cardNumber) {
	if(!cardNumber){
		console.log("We don't have a credit card on file for you to place your order.")
	}
	else
	{
		console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
		cart=[]
	}

	// body...
}