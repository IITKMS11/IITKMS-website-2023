let transform = even ? -250 : 0
let index = activeImageIndex

container.addEventListener('click', event => {
    const target = event.target
    const carousel = container.querySelector('ul')
    const activeElement = container.querySelector('.active')

    switch (target.dataset.target) {
        case 'img':
            if (trigger !== 'hover') {
                target.classList.toggle('zoom')
            } 
        break
        case 'left':
            if (index !== 0) {
                index--
                transform += 500
                carousel.style.transform = `translateX(${transform}px)`

                activeElement.classList.remove('active')
                activeElement.previousElementSibling.classList.add('active')
            }
        break
        case 'right':
            if (index !== images.length - 1) {
                index++
                transform -= 500
                carousel.style.transform = `translateX(${transform}px)`

                activeElement.classList.remove('active')
                activeElement.nextElementSibling.classList.add('active')
            }
        break
    }
})