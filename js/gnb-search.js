const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistoryClickingOutside() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistory)
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistoryClickingOutside();
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearchHistory.classList.contains('.is-active')) {
    window.addEventListener('click', closeGnbSearchHistory)
  }

  gnbSearchHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistoryClickingOutside();
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearchHistoryList.removeChild(itemToDelete)

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistoryClickingOutside();
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
