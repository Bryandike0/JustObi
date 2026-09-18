// SELECT HTML ELEMENTS

const addButtons = document.querySelectorAll('.add-btn')
const cartContainer = document.getElementById('cart-container')
const cartCount = document.getElementById('cart-count')
const cartTotal = document.getElementById('cart-total')
const cartButton = document.getElementById('cart-btn')
const cartSideButton = document.getElementById('cart-sidebar')
const closeCartButton = document.getElementById('close-cart')
const overlay = document.getElementById('overlay')

// SNAKECASE = user_name
// CAMELCASE = userName
// PASCHAL  = UserName

// ADD TO CART BUTTONS
addButtons.forEach(function(button, index){
  `button.addEventListener("click" fucntion() {
  addToCart{index + 1}
  }`
})

// ADD TO CART 
function addToCart (productId){
  ```
  const product = document.querySelector(
  `.product:nth-child(${productId})`
  )
  
  
  ```
}