let currentLic = {};

currentLic = new Proxy(currentLic, {
  set(target, prop, val) {
    switch(prop){
      case 'price':
        target[prop] = Number(val);
        totalResult.innerHTML = target[prop] * +count.value
        break;
      case 'id':
        if(target[prop]) target[prop].removeAttribute('checked')
        target[prop] = val;
        if(target[prop]) {
          target[prop].setAttribute('checked', '')
          document.querySelector('.licenses-result__plan span:last-child').innerHTML = target[prop].dataset.item
          currentLic.price = target[prop].querySelector('span.item__label-price span').innerHTML
        } 
        break;
    }
  }
})

currentLic.id = document.querySelector('.licenses-list__item[checked]')

count.addEventListener('change', () => currentLic.price = currentLic.price)

licenses.addEventListener('change', ({target}) => {
  currentLic.id = target.closest('.licenses-list__item')
})