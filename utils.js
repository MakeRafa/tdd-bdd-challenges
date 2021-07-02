// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  // should return the area
  return w * h
}

const perimeter = (w, h) => {
  // should return the perimeter
  return w * 2 + h * 2
}

const circleArea = r => {
  // should return the area of the circle

}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  // should return the current state of shopping cart
  // just return the list created in line 31
  return shoppingCart
}

const addItemToCart = (item) => {
  // should add item to shopping cart
  // create index to locate item
  const i = shoppingCart.indexOf(item)

  if (i == -1 ) {
    // start before 0
    // if = add/push the located item to the shopping cart
    const found = shoppingCart.push(item)
  } else {
    // move one to the right until it hits
    shoppingCart[i] += 1
  }
}

const getNumItemsInCart = () => {
  // should return the total quantity of items in cart
  // use the length property
  return length(shoppingCart)
}

const removeItemFromCart = (item) => {
  // should remove item from shopping cart
  
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
