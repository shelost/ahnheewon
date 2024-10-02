var elem = document.getElementById('gallery')

var msnry = new Masonry(elem, {
    // options
    itemSelector: '.card',
    columnWidth: '.sizer',
    gutter: 25,
    horizontalOrder: true
});

function Resize() {

    if (window.innerWidth > 800) {
        msnry.options.gutter = 25
    } else {
        msnry.options.gutter = 10
    }

}

Resize()
window.addEventListener('resize', Resize)