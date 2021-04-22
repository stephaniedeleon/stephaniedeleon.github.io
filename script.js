const navSlide = () => {
    const toggleButton = document.querySelector('.toggle-menu');

    toggleButton.addEventListener('click', () => {

        //Toggle Menu Animation
        toggleButton.classList.toggle('toggleExit');
    });
}

//Function Calls:
navSlide();