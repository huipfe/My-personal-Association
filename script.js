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
    // Classes à remplacer pour le thème printemps (springClass) & automne (autumnClass)
    const springAutumnClasses = [
        { autumnClass: 'bg-0', springClass: 'bg-0-alt' },
        { autumnClass: 'navbar-bg-0', springClass: 'navbar-bg-0-alt' },
        { autumnClass: 'btn-doggy', springClass: 'btn-doggy-alt' },
        { autumnClass: 'bg-1', springClass: 'bg-1-alt' },
        { autumnClass: 'bg-2', springClass: 'bg-2-alt' },
        { autumnClass: 'bg-4', springClass: 'bg-4-alt' },
        { autumnClass: 'bg-modal-1', springClass: 'bg-modal-1-alt' },
        { autumnClass: 'ovale-navigation', springClass: 'ovale-navigation-alt' },
        { autumnClass: 'btn-down', springClass : 'btn-down-alt'},
        { autumnClass: 'scrollbar-track', springClass: 'scrollbar-track-alt' },
        { autumnClass: 'scrollbar-thumb', springClass: 'scrollbar-thumb-alt' },
        { autumnClass: 'bg-background-website', springClass: 'bg-background-website-alt'},
        { autumnClass: 'changeDog', springClass: 'changeDogSpring'},
    ];

    // Images à remplacer pour le thème printemps
    const springImages = [
        { selector: '.picto-theme1', src: 'image/patte de chien picto alt spring.png' },
        { selector: '.picto-theme2', src: 'image/Chienlangue&nonlanguepicto alt spring.png' },
        { selector: '.picto-theme3', src: 'image/Chien parametre alt spring.png' },
        { selector: '.picto-theme5', src: 'image/Chien langue & non langue picto alt spring.png' },
        { selector: '.picto-theme4', src: 'image/Chien langue & non langue picto alt spring scrolldown.png' },
        { selector: '.picto-theme6', src: 'image/Chienlangue&nonlanguepicto alt spring.png' },
    ];

    // Images à remplacer pour le thème automne
    const AutunmImages = [
        { selector: '.picto-theme1', src: 'image/patte de chien picto2.png' },
        { selector: '.picto-theme2', src: 'image/Chienlangue&nonlanguepictoalt.png' },
        { selector: '.picto-theme3', src: 'image/Chien parametre.png' },
        { selector: '.picto-theme5', src: 'image/Chien langue Scroll Top.png' },
        { selector: '.picto-theme4', src: 'image/Chien langue Scroll Down.png' },
        { selector: '.picto-theme6', src: 'image/Chienlangue&nonlanguepictoalt.png' },

    ];


    if (theme === 'spring') {
        // Remplacement des classes
        springAutumnClasses.forEach(cls => {
            document.querySelectorAll(`.${cls.autumnClass}`).forEach(element => {
                element.classList.remove(cls.autumnClass);
                element.classList.add(cls.springClass);
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
        springAutumnClasses.forEach(cls => {
            document.querySelectorAll(`.${cls.springClass}`).forEach(element => {
                element.classList.remove(cls.springClass);
                element.classList.add(cls.autumnClass);
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
const imgAutumn = document.querySelector("img.changeDog");
const buttonAutumn = document.querySelector("button.changeDog");
const firstImageAutumn = "image/Chienlangue&nonlanguepictoalt.png";
const secondImageAutumn = "image/Chien langue Scroll Top.png";
let currentImageAutumn = firstImageAutumn;

buttonAutumn.addEventListener("click", function () {
    if (currentImageAutumn === firstImageAutumn) {
        imgAutumn.src = secondImageAutumn;
        currentImageAutumn = secondImageAutumn;
    } else {
        imgAutumn.src = firstImageAutumn;
        currentImageAutumn = firstImageAutumn;
    }
});

// Spring
const imgSpring = document.querySelector("img.changeDogSpring");
const buttonSpring = document.querySelector("button.changeDogSpring");
const firstImageSpring = "image/Chienlangue&nonlanguepictoalt-spring.png";
const secondImageSpring = "image/Chien langue & non langue picto alt spring.png";
let currentImageSpring = firstImageSpring;

buttonSpring.addEventListener("click", function () {
    if (theme === 'spring' && currentImageSpring === firstImageSpring) {
        imgSpring.src = secondImageSpring;
        currentImageSpring = secondImageSpring;
    } else {
        imgSpring.src = firstImageSpring;
        currentImageSpring = firstImageSpring;
    }
});
