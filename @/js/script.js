
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
            navbar.style.top = '10px'; // Reset navbar to its original position
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

} catch {

}
