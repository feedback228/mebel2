var preview = false
var inline_selector = ''
var variant = 'site'

function initPopup() {
  var card = document.createElement('div')
  card.className = 'wfolio-card-wrapper wfolio-card-wrapper--default'
  card.style.cssText = 'display: none;'
  card.setAttribute('data-role', 'wfolio-contact-card')
  card.innerHTML =
    '<div class="wfolio-card-trigger" data-block="disk-floating-buttons" data-role="wfolio-card-contact-buttons"><div class="wfolio-card-trigger__button-label"><button class="wfolio-card-trigger__button wfolio-card-trigger__button--contact" data-role="wfolio-open-card" type="button">Написать дизайнеру</button></div><button class="wfolio-card-trigger__button wfolio-card-trigger__button--icon" data-role="wfolio-open-card" type="button"><i class="wfolio-card-icon wfolio-card-icon--contact"></i></button></div><div class="wfolio-card" data-role="wfolio-card"><div class="wfolio-card__window"><button class="wfolio-card__close wfolio-card-icon" data-role="wfolio-close-card" type="button"></button><img class="wfolio-card__avatar" src="/img/anna.jpg" /><div class="wfolio-card__content"><div class="wfolio-card__bio"><h3 class="wfolio-card__name">Анна Мухаметшина</h3><div class="wfolio-card__occupation">Дизайнер интерьеров</div></div><h3 class="wfolio-card__phone"><a href="tel:+79376658190">+79376658190</a></h3><div class="wfolio-card__buttons"><a class="wfolio-card__button" href="https://wa.me/79376658190" target="_blank" title="WhatsApp"><i class="wfolio-card-icon wfolio-card-icon--whatsapp"></i>WhatsApp</a><a class="wfolio-card__button" href="https://t.me/+79376658190" target="_blank" title="Telegram"><i class="wfolio-card-icon wfolio-card-icon--telegram"></i>Telegram</a><a class="wfolio-card__button wfolio-card__button--inverted" rel="nofollow" href="/contacts/anna.vcf">Сохранить контакт</a></div></div></div></div>'
  if (inline_selector) {
    document.querySelectorAll(inline_selector)[0].appendChild(card)
  } else if (preview) {
    document.getElementsByTagName('main')[0].appendChild(card)
  } else {
    document.getElementsByTagName('body')[0].appendChild(card)
  }

  var body = document.querySelectorAll('body')[0]
  var card = document.querySelectorAll('[data-role~=wfolio-card]')[0]
  var openCardButtons = document.querySelectorAll('[data-role~=wfolio-open-card]')
  var closeCardButton = document.querySelectorAll('[data-role~=wfolio-close-card]')[0]
  var cardContactButtons = document.querySelectorAll('[data-role~=wfolio-card-contact-buttons]')[0]

  var open = function () {
    card.classList.add('is-visible')
    body.classList.add('is-locked')
  }

  var close = function () {
    card.classList.remove('is-visible')
    body.classList.remove('is-locked')
  }

  openCardButtons.forEach((element) => element.addEventListener('click', open))
  closeCardButton.addEventListener('click', close)
  card.addEventListener('click', function (e) {
    if (e.target === card) {
      close()
    }
  })

  if (variant == 'site') {
    setTimeout(() => cardContactButtons.classList.add('is-visible'), 500)
  }

  if (preview) {
    document.body.querySelectorAll('[data-role~=wfolio-contact-card]')[0].classList.add('is-preview')
  }

  if (inline_selector) {
    document.body.querySelectorAll('[data-role~=wfolio-contact-card]')[0].classList.add('is-inline')
  }

  document.dispatchEvent(new Event('wfolio-card:load'))
}

initPopup()

document.addEventListener('turbolinks:load', initPopup)
