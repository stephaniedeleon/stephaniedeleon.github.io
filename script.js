const navSlide = () => {
    const toggleButton = document.querySelector('.toggle-menu');

    toggleButton.addEventListener('click', () => {

        //Toggle Menu Animation
        toggleButton.classList.toggle('toggleExit');
    });
}

//Function Calls:
navSlide();

$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1200 // 1 sec
});