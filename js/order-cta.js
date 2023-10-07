const orderCta = document.querySelector('.order-cta')

const [orderCtaBookMarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

  /*
function toggleOrderCtaBookmark() {
  // 1. 버튼 is-active 클래스주기
  // 2. icon 클래스 변경 => ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경


  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count

  if (this.classList.contains('is-active')) {
    //앞으로 비활성화 -1
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
    countSpan.innerHTML = newCount.toLocaleString();
  } else {
    //앞으로 활성화 +1
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
    countSpan.innerHTML = newCount.toLocaleString();
  }


  this.classList.toggle('is-active')
}
*/

orderCtaBookMarkButton.addEventListener('click', toggleOrderCtaBookmark);

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children;
  const count = Number(countSpan.innerHTML.replaceAll(',', ''));

  let newCount = count;

  if(this.classList.contains('is-active')){
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1;
  }else {
    icon.setAttribute('class', 'ic-bookmark-filled');
    newCount = newCount + 1;
  }

  countSpan.innerHTML = newCount.toLocaleString();
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active');

}
