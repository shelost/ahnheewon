var elem = document.getElementById('main')

var msnry = new Masonry(elem, {
    // options
    itemSelector: '.card',
    columnWidth: '.sizer',
    gutter: 25,
    horizontalOrder: true
});


//


const T = Id('title')


function Resize() {
    let ratio = window.scrollY / window.screen.height


    if (window.screen.width > 800) {
        if (ratio < 1) {
            T.style.opacity = 1 - ratio*10
        }
    } else {
        T.style.opacity = 1 - ratio * 6

    }

}

Resize()

window.addEventListener('scroll', Resize)
window.addEventListener('resize', Resize)