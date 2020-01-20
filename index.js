var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})

 return `${cart[cart.length-1].itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  {
    return 'Your shopping cart is empty.'
  }

  let message = []

  for(var i = 0; i < cart.length; i++){
    if(i === 0 && cart.length === 1)
    { // if first and only
      message.unshift(`In your cart, you have ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
      return message[i]
    }
    else if(i === 0)
    { // if first
      message.unshift(`In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    else if (i === cart.length - 1)
    { // if last
      message.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      return message.join()
    }
    else
    { //if in the middle
      message.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
  }

}

function total() {
  // write your code here
  let total = 0;

  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }

  return total
}

function removeFromCart(item) {
  // write your code here
  var newCart = cart

  for(var i = 0; i < cart.length; i++){
    if(newCart[i].itemName === item)
    {
      newCart = newCart.splice(i, 1)
    }
}
    return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined)
  {
    return 'Sorry, we don\'t have a credit card on file for you.'
  }

  var sum = total()
  cart = []

  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}
