/* Mobil meny knapp */
const btnMobileMenu = document.querySelector('#btn-mobile-menu');
const body = document.querySelector('#body');

/* Över denna skärmstorlek så ska menyn stängas */
const mobileBreakpoint = 768;

/* lyssna efter klick-event på meny-knappen */
btnMobileMenu.addEventListener('click', () => {
    /* Kolla om knappen faktiskt är synlig innan vi går vidare */
    if (window.getComputedStyle(btnMobileMenu).display === 'flex' && window.innerWidth < mobileBreakpoint) {
        /* Toggla en klass i body som talar om för css att menyn är öppen eller stängd */
        body.classList.toggle('mobile-menu-open');

    }

})

/* Stäng menyn om skärmstorleken ökar över breakpointen */
window.addEventListener('resize', () => {
    if (window.innerWidth >= mobileBreakpoint) {
        body.classList.remove('mobile-menu-open');
    }
});