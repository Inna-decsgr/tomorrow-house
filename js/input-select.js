const checkOut = document.querySelector('#checkout-itme-1')
const amount = document.querySelector('.price-16 strong')

const amountPrice = Number(amount.innerHTML.replace(',', ''))
let newPrice = amountPrice

const outputPrice = document.querySelector('.order-summary strong')

function showNewPrice() {
  let value = this.value

  amount.innerHTML = (value * newPrice).toLocaleString()

  outputPrice.innerHTML =  amount.innerHTML
}

checkOut.addEventListener('click', showNewPrice)

const closeButton = document.querySelector('.checkout-header i')
const checkoutItem = document.querySelector('.checkout-item')
const checkoutList = checkoutItem.parentNode

closeButton.addEventListener('click', function(){
  checkoutList.removeChild(checkoutItem)
  outputPrice.innerHTML =  amountPrice.toLocaleString()
})

