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

    Scroll()

    if (window.innerWidth > 800) {
        msnry.options.gutter = 25
    } else {
        msnry.options.gutter = 10
    }
    /*

    msnry = new Masonry(elem, {
        // options
        itemSelector: '.card',
        columnWidth: '.sizer',
        gutter: 10,
        horizontalOrder: true
    });
    */

}

function Scroll() {
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

window.addEventListener('scroll', Scroll)
window.addEventListener('resize', Resize)





let lastScrollTop = 0;

try {
    const navbar = document.getElementById('navbar');

    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // If scrolling down, move the navbar up
        if (currentScroll > lastScrollTop) {
            navbar.style.top = `-${navbarHeight}px`; // Move the navbar out of view
        }
        // If scrolling up, bring the navbar back down
        else {
            navbar.style.top = '8px'; // Reset navbar to its original position
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

} catch {

}
