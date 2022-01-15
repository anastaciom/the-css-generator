const navHamburger = document.querySelector('#nav-hamburger');

    navHamburger.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        if (nav.style.display == 'flex') {
            nav.style.display = 'none'
        }
        else {
            nav.style.display = 'flex';
        }
    })
