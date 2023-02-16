/** 1. Animation JS TypesWritter */
//Pas besoin

/** 2. ScrollTop/Down Function :
 * remonter, ou descendre dans la page */

/** Partie Bouton Remonter/descendre */

//ScrollTop
document.addEventListener("scroll", (event) => {
    let btnScrollTop = document.getElementById("scrollTop")
    if (window.scrollY > 150) { // si mon window.scrollY est plus grand que 150
        // je veux afficher mon bouton
        btnScrollTop.classList.remove("d-none") /* 1er façons de le faire, avec bootstrap */

        // btnScrollTop.style.display = "initial" /* 2ème façons de le faire sans bootstrap */
    }
    else { //Sinon
        //je veux masquer le bouton
        btnScrollTop.classList.add("d-none") /* 1er façons de le faire, avec bootstrap */

        // btnScrollTop.style.display = "none" /* 2ème façons de le faire sans bootstrap*/
    }

});
//d-none est une classe en bootstrap qui veut dire display-none, pour afficher ou ne pas afficher.


//ScrollDown

document.addEventListener("scroll", (event) => {
    let btnScrollTop = document.getElementById("scrollDown")
    if (window.scrollY > 150) { // si mon window.scrollY est plus grand que 150
        // je veux afficher mon bouton
        btnScrollTop.classList.add("d-none") /* 1er façons de le faire, avec bootstrap */

        //btnScrollTop.style.display = "none" /* 2ème façons de le faire sans bootstrap */
    }
    else { //Sinon
        //je veux masquer le bouton
        btnScrollTop.classList.remove("d-none") /* 1er façons de le faire, avec bootstrap */

        //btnScrollTop.style.display = "initial" /* 2ème façons de le faire sans bootstrap*/
    }

});


/** 3. spring/autumn Mode : 
 * changement de thème dans la page, thème Autonme ou Printemps */
//autumn = Chaud, thème Autonme/dark/no alt/bg-0,1,2,3,4/warning
//spring = froid, thème Printemps/light/alt/bg-0,1,2,3,4-alt/sucess

/* Partie printemps, car site avec thème d'automne de base */
document.querySelectorAll(".ChangeThemeDiv").forEach(div => {
    div.addEventListener("click", event => { /* Quand tu cliques sur ma div*/
        let themeTarget = event.currentTarget.dataset.theme;
        if (themeTarget == "spring") {  /*Si ThemeTarget = success*/
            document.querySelectorAll(".bg-0").forEach(autumnElement => {
                autumnElement.classList.remove("bg-0");
                autumnElement.classList.add("bg-0-alt");
            });
            //récupère tout les élements qui ont la classe bg-0
            //bg-0 -> bg-0-alt
            //pour chaque élement autumn element, on enlève, pour
            //remplacer par spring element.
            /* Dans ce cas là, on applique le thème spring */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-bg-0-alt").forEach(autumnElement => {
                autumnElement.classList.remove("text-bg-0-alt");
                autumnElement.classList.add("text-bg-0");
            });

            document.querySelectorAll(".text-bg-0").forEach(springElement => {
                springElement.classList.remove("text-bg-0");
                springElement.classList.add("text-bg-0-alt");
            });

            //faire la même chose, pour la navbar Header bg-0 
            document.querySelectorAll(".navbar-bg-0").forEach(autumnElement => {
                autumnElement.classList.remove("navbar-bg-0");
                autumnElement.classList.add("navbar-bg-0-alt");
            });

            //faire la même chose, pour le bouton, Section Contact 3 btn-doggy
            document.querySelectorAll(".btn-doggy").forEach(autumnElement => {
                autumnElement.classList.remove("btn-doggy");
                autumnElement.classList.add("btn-doggy-alt");
            });

            //faire la même chose, pour la section 0 bg-1 Présentation et histoire,
            //de l'association & section 1 bg-1 Résumer et objectif de l'association
            document.querySelectorAll(".bg-1").forEach(autumnElement => {
                autumnElement.classList.remove("bg-1");
                autumnElement.classList.add("bg-1-alt");
            });

            //faire la même chose, pour la section 2 bg-2 Gallerie d'image
            document.querySelectorAll(".bg-2").forEach(autumnElement => {
                autumnElement.classList.remove("bg-2");
                autumnElement.classList.add("bg-2-alt");
            });

            //faire la même chose, pour la footer 2 bg-4
            document.querySelectorAll(".bg-4").forEach(autumnElement => {
                autumnElement.classList.remove("bg-4");
                autumnElement.classList.add("bg-4-alt");
            });

            //faire la même chose, pour la modal bg-modal-1
            document.querySelectorAll(".bg-modal-1").forEach(autumnElement => {
                autumnElement.classList.remove("bg-modal-1");
                autumnElement.classList.add("bg-modal-1-alt");
            });

            //faire la même chose, pour ul.ovale-navigation
            document.querySelectorAll(".ovale-navigation").forEach(autumnElement => {
                autumnElement.classList.remove("ovale-navigation");
                autumnElement.classList.add("ovale-navigation-alt");
            });

            //faire la même chose, pour la scrollbar-track
            document.querySelectorAll(".scrollbar-track").forEach(autumnElement => {
                autumnElement.classList.remove("scrollbar-track");
                autumnElement.classList.add("scrollbar-track-alt");
            });

            //faire la même chose, pour la scrollbar-thumb
            document.querySelectorAll(".scrollbar-thumb").forEach(autumnElement => {
                autumnElement.classList.remove("scrollbar-thumb");
                autumnElement.classList.add("scrollbar-thumb-alt");
            });

            //faire la même chose, pour le picto spring Logo theme1
            document.querySelectorAll(".picto-theme1").forEach(imageSpring => {
                imageSpring.src = "image/patte de chien picto alt spring.png";
            });
            // alternative
            // const imageSpring = document.querySelector(".picto-theme1");
            // imageSpring.src = "image/patte de chien picto alt spring.png";


            //faire la même chose, pour le picto spring button navbar theme2
            document.querySelectorAll(".picto-theme2").forEach(imageSpring => {
                imageSpring.src = "image/Chienlangue&nonlanguepicto alt spring.png";
            });

            //faire la même chose, pour le picto spring button parametre theme3
            document.querySelectorAll(".picto-theme3").forEach(imageSpring => {
                imageSpring.src = "image/Chien parametre alt spring.png";
            });

            //faire la même chose, pour le picto spring button scrolltop theme5
            document.querySelectorAll(".picto-theme5").forEach(imageSpring => {
                imageSpring.src = "image/Chien langue & non langue picto alt spring.png";
            });

            //faire la même chose, pour le picto spring button scrollDown theme4
            document.querySelectorAll(".picto-theme4").forEach(imageSpring => {
                imageSpring.src = "image/Chien langue & non langue picto alt spring scrolldown.png";
            });

            //faire la même chose, pour le picto spring button bouton contact envoyé theme6
            document.querySelectorAll(".picto-theme6").forEach(imageSpring => {
                imageSpring.src = "image/Chienlangue&nonlanguepicto alt spring.png";
            });
        }

        //autumn = Chaud, thème Autonme/dark/no alt/bg-0,1,2,3,4/warning
        //spring = froid, thème Printemps/light/alt/bg-0,1,2,3,4-alt/sucess

        /* Partie automne, car site devenu printemps durant la partie précédente */
        else if (themeTarget == "autumn") {  /*Si ThemeTarget = dark*/
            document.querySelectorAll(".bg-0-alt").forEach(springElement => {
                springElement.classList.remove("bg-0-alt");
                springElement.classList.add("bg-0");
            })
            //récupère tout les élements qui ont la classe bg-0-alt
            //bg-0-alt -> bg-0
            //pour chaque élement spring element, on enlève, pour remplacer par autumn element.
            /* Dans ce cas là, on applique le thème autumn */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-bg-0").forEach(autumnElement => {
                autumnElement.classList.remove("text-bg-0");
                autumnElement.classList.add("text-bg-0-alt");
            });

            document.querySelectorAll(".text-bg-0-alt").forEach(springElement => {
                springElement.classList.remove("text-bg-0-alt");
                springElement.classList.add("text-bg-0");
            });

            //faire la même chose, pour la navbar Header bg-0-alt
            document.querySelectorAll(".navbar-bg-0-alt").forEach(warningElement => {
                warningElement.classList.remove("navbar-bg-0-alt");
                warningElement.classList.add("navbar-bg-0");
            });

            //faire la même chose, pour le bouton, Section Contact 3 btn-doggy-alt
            document.querySelectorAll(".btn-doggy-alt").forEach(autumnElement => {
                autumnElement.classList.remove("btn-doggy-alt");
                autumnElement.classList.add("btn-doggy");
            });

            //faire la même chose, pour la section 0 bg-1-alt Présentation et histoire,
            //de l'association & section 1 bg-1-alt Résumer et objectif de l'association
            document.querySelectorAll(".bg-1-alt").forEach(autumnElement => {
                autumnElement.classList.remove("bg-1-alt");
                autumnElement.classList.add("bg-1");
            });

            //faire la même chose, pour la section 2 bg-2-alt Gallerie d'image
            document.querySelectorAll(".bg-2-alt").forEach(autumnElement => {
                autumnElement.classList.remove("bg-2-alt");
                autumnElement.classList.add("bg-2");
            });

            //faire la même chose, pour la footer 2 bg-4-alt
            document.querySelectorAll(".bg-4-alt").forEach(autumnElement => {
                autumnElement.classList.remove("bg-4-alt");
                autumnElement.classList.add("bg-4");
            });

            //faire la même chose, pour la modal bg-modal-1-alt
            document.querySelectorAll(".bg-modal-1-alt").forEach(autumnElement => {
                autumnElement.classList.remove("bg-modal-1-alt");
                autumnElement.classList.add("bg-modal-1");
            });

            //faire la même chose, pour ul.ovale-navigation-alt
            document.querySelectorAll(".ovale-navigation-alt").forEach(autumnElement => {
                autumnElement.classList.remove("ovale-navigation-alt");
                autumnElement.classList.add("ovale-navigation");
            });

            //faire la même chose, pour le picto autumn Logo theme1
            document.querySelectorAll(".picto-theme1").forEach(imageSpring => {
                imageSpring.src = "image/patte de chien picto2.png";
            });
            //alternative
            // const imageSpring = document.querySelector(".picto-theme1");
            // imageSpring.src = "image/patte de chien picto2.png";

            //faire la même chose, pour le picto autumn button navbar theme2
            document.querySelectorAll(".picto-theme2").forEach(imageSpring => {
                imageSpring.src = "image/Chienlangue&nonlanguepictoalt.png";
            });

            //faire la même chose, pour le picto autumn button parametre theme3
            document.querySelectorAll(".picto-theme3").forEach(imageSpring => {
                imageSpring.src = "image/Chien parametre.png";
            });

            //faire la même chose, pour le picto autumn button scrolltop theme5
            document.querySelectorAll(".picto-theme5").forEach(imageSpring => {
                imageSpring.src = "image/Chien langue Scroll Top.png";
            });

            //faire la même chose, pour le picto autumn button scrollDown theme4
            document.querySelectorAll(".picto-theme4").forEach(imageSpring => {
                imageSpring.src = "image/Chien langue Scroll Down.png";
            });

            //faire la même chose, pour le picto autumn button bouton contact envoyé theme6
            document.querySelectorAll(".picto-theme6").forEach(imageSpring => {
                imageSpring.src = "image/Chienlangue&nonlanguepictoalt.png";
            });
        }

    });
});


/** 4. Faire apparaitre disparaitre : 
 * L'image du chien de base : 
 * remplacer par un chien qui tire la langue,
 * en fonction de si on clique ou pas dessus */

//Méthode via onclick, direct, via une fonction, sur le bouton, dans le html

//NavBar Button 1
function changeDog1() {
    let image = document.getElementById('changeDog1');
    if (image.src.match("Scroll")) {
        image.src = "image/Chienlangue&nonlanguepictoalt.png";
    }
    else {
        image.src = "image/Chien langue Scroll Top.png";
    }

    // Si on est en mode printemps
    // let imageSpring = document.getElementById('changeDog1');
    // if (image.src.match("spring")) {
    //     imageSpring.src = "image/Chienlangue&nonlanguepicto alt spring.png";

    // }
    // else {
    //     imageSpring.src = "image/Chien langue & non langue picto alt spring.png";

    // }
}

//NavBar Button 2 
function changeDog2() {
    let image = document.getElementById('changeDog2');
    if (image.src.match("Scroll")) {
        image.src = "image/Chienlangue&nonlanguepictoalt.png";
    }
    else {
        image.src = "image/Chien langue Scroll Top.png";
    }
}






//** Essaie d'Algo */
//Chien normal vert = Chienlangue&nonlanguepicto alt spring.png
//Chien tire langue vert = Chien langue & non langue picto alt spring.png
//     else if (themeTarget == "spring") {
//     image.src = "Chienlangue&nonlanguepicto alt spring.png";
// }
// else {
//     image.src = "Chien langue & non langue picto alt spring.png";
// }


//** Tentative 1  */
// document.querySelectorAll(".call-function-changeDog").forEach(div => {
//     div.addEventListener("click", event => {
//         let themeTarget = event.currentTarget.dataset.theme;
//         if (themeTarget == "spring") {
//             document.querySelectorAll(".picto-theme2").forEach(autumnElement => {
//                 autumnElement.classList.remove("bg-0");
//                 autumnElement.classList.add("bg-0-alt");
//             })
//         }
//     });
// });

//** Tentative 2  */
// function changeDog1() {
//     let tousLabels = document.querySelectorAll(".call-function-changeDog");
//     tousLabels.forEach(monLabel => {
//         if (monLabel.image.src.match("Scroll")) {
//             monLabel.image.src = "image/Chienlangue&nonlanguepictoalt.png";
//         }
//         else {
//             monLabel.image.src = "image/Chien langue Scroll Top.png";
//         }
//     });
// }

// let mesInputsWysiwygEvents = document.querySelectorAll(".call-function-changeDog")

// mesInputsWysiwygEvents.forEach(monNoeud => {
//     monNoeud.addEventListener("click", changeDog1);
// });

//** Tentative 3  */
// function changeDog1() {
//     if (themeTarget == "autumn") {
//         document.querySelectorAll(".call-function-changeDog").forEach(image => {
//             image.src = "image/Chienlangue&nonlanguepicto alt spring.png";
//             image.src.add("image/Chien langue & non langue picto alt spring.png");
//         });
//     }
//     else if (themeTarget == "spring") {
//         document.querySelectorAll(".call-function-changeDog").forEach(springElement => {
//             springElement.classList.remove("bg-0-alt");
//             springElement.classList.add("bg-0");
//         });
//     };


//** Tentative 4 */
// function changeDog1() {
//     let imageDog = document.getElementById('changeDog1');

//     if (image.src.match("Scroll")) {
//         imageDog.src = "image/Chienlangue&nonlanguepictoalt.png";
//     }
//     else {
//         imageDog.src = "image/Chien langue Scroll Top.png";
//     }
// }

// function changeDog2() {
// }
// document.getElementById('changeDog1').addEventListener('click', changeDog1);
// document.getElementById('changeDog2').addEventListener('click', changeDog2);