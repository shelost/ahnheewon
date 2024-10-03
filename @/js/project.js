var elem = document.getElementById('main')

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


let lastScrollTop = 0;
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
        navbar.style.top = '15px'; // Reset navbar to its original position
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
