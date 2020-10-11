const navSlide = () => {
    const toggleButton = document.querySelector('.toggle-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    toggleButton.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Toggle Menu Animation
        toggleButton.classList.toggle('toggleExit');
    });
}

//Function Calls:
navSlide();