/** JS Script for the Association Website 
 * 1 - Scroll to top and scroll to bottom of the page
 * 2 - Spring and Autunm theme to change with modal buttons
 * 3 - The dog NavBar button tongue pulled, with a change of image, adapte to the theme active theme
*/


/** 1. ScrollTop/Down Function 
/** Partie Bouton Remonter/descendre */

/** ScrollTop/Down Function */
function handleScroll(btnId, condition) {
    document.addEventListener("scroll", () => {
        let btn = document.getElementById(btnId);
        let halfPageHeight = document.body.scrollHeight / 2.5;

        if (condition(window.scrollY, halfPageHeight)) {
            btn.style.display = "initial";
        } else {
            btn.style.display = "none";
        }
    });
}

// ScrollTop
handleScroll("scrollTop", (scrollY, halfPageHeight) => scrollY > halfPageHeight);

// ScrollDown
handleScroll("scrollDown", (scrollY, halfPageHeight) => scrollY < halfPageHeight);


/** 2. spring/autumn Mode : 
 * changement de thème dans la page, thème Autonme ou Printemps */

function changeTheme(theme) {
    // Classes à remplacer pour le thème printemps (newClass) & automne (oldClass)
    const springAutomneClasses = [
        { oldClass: 'bg-0', newClass: 'bg-0-alt' },
        { oldClass: 'navbar-bg-0', newClass: 'navbar-bg-0-alt' },
        { oldClass: 'btn-doggy', newClass: 'btn-doggy-alt' },
        { oldClass: 'bg-1', newClass: 'bg-1-alt' },
        { oldClass: 'bg-2', newClass: 'bg-2-alt' },
        { oldClass: 'bg-4', newClass: 'bg-4-alt' },
        { oldClass: 'bg-modal-1', newClass: 'bg-modal-1-alt' },
        { oldClass: 'ovale-navigation', newClass: 'ovale-navigation-alt' },
        { oldClass: 'btn-down', newClass : 'btn-down-alt'},
        { oldClass: 'webkit-scrollbar-track', newClass: 'webkit-scrollbar-track-alt' },
        { oldClass: 'webkit-scrollbar-thumb', newClass: 'webkit-scrollbar-thumb-alt' },
        { oldClass: 'bg-background-website', newClass: 'bg-background-website-alt' }
    ];

    // Images à remplacer pour le thème printemps
    const springImages = [
        { selector: '.picto-theme1', src: 'image/patte de chien picto alt spring.png' },
        { selector: '.picto-theme2', src: 'image/Chienlangue&nonlanguepicto alt spring.png' },
        { selector: '.picto-theme3', src: 'image/Chien parametre alt spring.png' },
        { selector: '.picto-theme5', src: 'image/Chien langue & non langue picto alt spring.png' },
        { selector: '.picto-theme4', src: 'image/Chien langue & non langue picto alt spring scrolldown.png' },
        { selector: '.picto-theme6', src: 'image/Chienlangue&nonlanguepicto alt spring.png' }
    ];

    // Images à remplacer pour le thème automne
    const AutunmImages = [
        { selector: '.picto-theme1', src: 'image/patte de chien picto2.png' },
        { selector: '.picto-theme2', src: 'image/Chienlangue&nonlanguepictoalt.png' },
        { selector: '.picto-theme3', src: 'image/Chien parametre.png' },
        { selector: '.picto-theme5', src: 'image/Chien langue Scroll Top.png' },
        { selector: '.picto-theme4', src: 'image/Chien langue Scroll Down.png' },
        { selector: '.picto-theme6', src: 'image/Chienlangue&nonlanguepictoalt.png' }
    ];


    if (theme === 'spring') {
        // Remplacement des classes
        springAutomneClasses.forEach(cls => {
            document.querySelectorAll(`.${cls.oldClass}`).forEach(element => {
                element.classList.remove(cls.oldClass);
                element.classList.add(cls.newClass);
            });
        });

        // Remplacement des images
        springImages.forEach(image => {
            document.querySelectorAll(image.selector).forEach(element => {
                element.src = image.src;
            });
        });

    } else if (theme === 'autumn') {
        // Remplacement des classes
        springAutomneClasses.forEach(cls => {
            document.querySelectorAll(`.${cls.newClass}`).forEach(element => {
                element.classList.remove(cls.newClass);
                element.classList.add(cls.oldClass);
            });
        });

        // Remplacement des images
        AutunmImages.forEach(image => {
            document.querySelectorAll(image.selector).forEach(element => {
                element.src = image.src;
            });
        });
    }
}

// Button ChangeTheme click
document.querySelectorAll('.ChangeThemeDiv').forEach(div => {
    div.addEventListener('click', event => {
        const themeTarget = event.currentTarget.dataset.theme;
        changeTheme(themeTarget);
    });
});



/** 3. Faire apparaitre disparaitre : 
 * L'image du chien de base : 
 * remplacer par un chien qui tire la langue,
 * en fonction de si on clique ou pas dessus */

// Autumn
let img = document.querySelector("img.changeDog");
let button = document.querySelector("button.changeDog");

let firstImage = "image/Chienlangue&nonlanguepictoalt.png";
let secondImage = "image/Chien langue Scroll Top.png";
let currentImage = firstImage;

button.addEventListener("click", function () {
    if (currentImage == firstImage) {
        img.src = secondImage;
        currentImage = secondImage;
    } else {
        img.src = firstImage;
        currentImage = firstImage;
    }
});

// Spring
let imgSpring = document.querySelector("img.changeDog");
let buttonSpring = document.querySelector("button.changeDog");
let currentImageSpring = firstImageSpring;

let firstImageSpring = "image/Chienlangue&nonlanguepictoalt-spring.png";
let secondImageSpring = "image/Chien langue & non langue picto alt spring.png";

button.addEventListener("click", function () {
    if (theme === 'spring' && currentImageSpring == firstImageSpring) {
        img.src = secondImage;
        currentImageSpring = secondImageSpring;
    } else {
        img.src = firstImageSpring;
        currentImageSpring = firstImageSpring;
    }
});



// // Autumn
// let imgAutumn = document.querySelector("img.changeDog");
// let buttonAutumn = document.querySelector("button.changeDog");

// let firstImageAutumn = "image/Chienlangue&nonlanguepictoalt.png";
// let secondImageAutumn = "image/Chien langue Scroll Top.png";
// let currentImageAutumn = firstImageAutumn;

// buttonAutumn.addEventListener("click", function () {
//     if (currentImageAutumn == firstImageAutumn) {
//         imgAutumn.src = secondImageAutumn;
//         currentImageAutumn = secondImageAutumn;
//     } else {
//         imgAutumn.src = firstImageAutumn;
//         currentImageAutumn = firstImageAutumn;
//     }
// });

// // Spring
// let imgSpring = document.querySelector("img.changeDog");
// let buttonSpring = document.querySelector("button.changeDog");

// let firstImageSpring = "image/Chienlangue&nonlanguepictoalt-spring.png";
// let secondImageSpring = "image/Chien langue & non langue picto alt spring.png";
// let currentImageSpring = firstImageSpring;

// buttonSpring.addEventListener("click", function () {
//     if (currentImageSpring == firstImageSpring) {
//         imgSpring.src = secondImageSpring;
//         currentImageSpring = secondImageSpring;
//     } else {
//         imgSpring.src = firstImageSpring;
//         currentImageSpring = firstImageSpring;
//     }
// });