let currentLic = {
  id: document.querySelector('.licenses-list__item[checked]'),
  price: null,
}
totalResult.innerHTML = currentLic.price ? count.value * currentLic.price : null
document.querySelector('.licenses-result__plan span:last-child').innerHTML = currentLic.id 
  ? currentLic.id.dataset.item
  : null

count.addEventListener('change', ({target}) => {
  totalResult.innerHTML = currentLic.price * target.value 
})

licenses.addEventListener('change', ({target}) => {
  if(currentLic.id) currentLic.id.removeAttribute('checked');
  currentLic.id = target.closest('.licenses-list__item');
  currentLic.id.setAttribute('checked', '');
    
  document.querySelector('.licenses-result__plan span:last-child').innerHTML = currentLic.id.dataset.item
  currentLic.price = Number(currentLic.id.querySelector('span.item__label-price span').innerHTML)
  totalResult.innerHTML = currentLic.price * count.value
})
