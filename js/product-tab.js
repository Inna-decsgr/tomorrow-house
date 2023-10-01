const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')
console.log(productTabButtonList)

let currentActiveTab = productTab.querySelector('.is-active')
console.log(currentActiveTab)

function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab != tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
})
