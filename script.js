/** 1. Animation JS TypesWritter */








/** 2. ScrollTop/Down Function :
 * remonter, ou descendre dans la page */

/** Partie Bouton Remonter/descendre */

//ScrollTop
document.addEventListener("scroll", (event) => {
    let btnScrollTop = document.getElementById("scrollTop")
    if (window.scrollY > 150) { // si mon window.scrollY est plus grand que 150
        // je veux afficher mon bouton
        //btnScrollTop.classList.remove("d-none") /* 1er façons de le faire, avec bootstrap */
        btnScrollTop.style.display = "initial" /* 2ème façons de le faire sans bootstrap */
    }
    else { //Sinon
        //je veux masquer le bouton
        //btnScrollTop.classList.add("d-none") /* 1er façons de le faire, avec bootstrap */
        btnScrollTop.style.display = "none" /* 2ème façons de le faire sans bootstrap*/
    }

});

//d-none est une classe en bootstrap qui veut dire display-none, pour afficher ou ne pas afficher.

//ScrollDown

document.addEventListener("scroll", (event) => {
    let btnScrollTop = document.getElementById("scrollDown")
    if (window.scrollY > 150) { // si mon window.scrollY est plus grand que 150
        // je veux afficher mon bouton
        //btnScrollTop.classList.add("d-none") /* 1er façons de le faire, avec bootstrap */
        btnScrollTop.style.display = "none" /* 2ème façons de le faire sans bootstrap */
    }
    else { //Sinon
        //je veux masquer le bouton
        //btnScrollTop.classList.remove("d-none") /* 1er façons de le faire, avec bootstrap */
        btnScrollTop.style.display = "initial" /* 2ème façons de le faire sans bootstrap*/
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
            document.querySelectorAll(".bg-0").forEach(warningElement => {
                warningElement.classList.remove("bg-0");
                warningElement.classList.add("bg-0-alt");
            });
            //récupère tout les élements qui ont la classe bg-0
            //bg-0 -> bg-0-alt
            //pour chaque élement autumn element, on enlève, pour
            //remplacer par spring element.
            /* Dans ce cas là, on applique le thème spring */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-bg-0-alt").forEach(warningElement => {
                warningElement.classList.remove("text-bg-0-alt");
                warningElement.classList.add("text-bg-0");
            });

            document.querySelectorAll(".text-bg-0").forEach(successElement => {
                successElement.classList.remove("text-bg-0");
                successElement.classList.add("text-bg-0-alt");
            });

            //faire la même chose, pour la navbar Header bg-0 
            document.querySelectorAll(".navbar-bg-0").forEach(warningElement => {
                warningElement.classList.remove("navbar-bg-0");
                warningElement.classList.add("navbar-bg-0-alt");
            });

            //faire la même chose, pour le bouton, Section Contact 3 bg-3
            document.querySelectorAll(".btn-bg-3").forEach(warningElement => {
                warningElement.classList.remove("btn-bg-3");
                warningElement.classList.add("btn-bg-3-alt");
            });

            //faire la même chose, pour la section 0 bg-1 Présentation et histoire,
            //de l'association & section 1 bg-1 Résumer et objectif de l'association
            document.querySelectorAll(".bg-1").forEach(darkElement => {
                darkElement.classList.remove("bg-1");
                darkElement.classList.add("bg-1-alt");
            });

            //faire la même chose, pour la section 2 bg-2 Gallerie d'image
            document.querySelectorAll(".bg-2").forEach(darkElement => {
                darkElement.classList.remove("bg-2");
                darkElement.classList.add("bg-2-alt");
            });

            //faire la même chose, pour la footer 2 bg-4
            document.querySelectorAll(".bg-4").forEach(darkElement => {
                darkElement.classList.remove("bg-4");
                darkElement.classList.add("bg-4-alt");
            });

            //faire la même chose, pour la modal bg-modal-1
            document.querySelectorAll(".bg-modal-1").forEach(darkElement => {
                darkElement.classList.remove("bg-modal-1");
                darkElement.classList.add("bg-modal-1-alt");
            });
        }

        //autumn = Chaud, thème Autonme/dark/no alt/bg-0,1,2,3,4/warning
        //spring = froid, thème Printemps/light/alt/bg-0,1,2,3,4-alt/sucess

        /* Partie automne, car site devenu printemps durant la partie précédente */
        else if (themeTarget == "autumn") {  /*Si ThemeTarget = dark*/
            document.querySelectorAll(".bg-0-alt").forEach(lightElement => {
                lightElement.classList.remove("bg-0-alt");
                lightElement.classList.add("bg-0");
            })
            //récupère tout les élements qui ont la classe bg-0-alt
            //bg-0-alt -> bg-0
            //pour chaque élement spring element, on enlève, pour remplacer par autumn element.
            /* Dans ce cas là, on applique le thème autumn */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-bg-0").forEach(warningElement => {
                warningElement.classList.remove("text-bg-0");
                warningElement.classList.add("text-bg-0-alt");
            });

            document.querySelectorAll(".text-bg-0-alt").forEach(successElement => {
                successElement.classList.remove("text-bg-0-alt");
                successElement.classList.add("text-bg-0");
            });

            //faire la même chose, pour la navbar Header bg-0-alt
            document.querySelectorAll(".navbar-bg-0-alt").forEach(warningElement => {
                warningElement.classList.remove("navbar-bg-0-alt");
                warningElement.classList.add("navbar-bg-0");
            });

            //faire la même chose, pour le bouton, Section Contact 3 bg-3-alt
            document.querySelectorAll(".btn-bg-3-alt").forEach(warningElement => {
                warningElement.classList.remove("btn-bg-3-alt");
                warningElement.classList.add("btn-bg-3");
            });

            //faire la même chose, pour la section 0 bg-1-alt Présentation et histoire,
            //de l'association & section 1 bg-1-alt Résumer et objectif de l'association
            document.querySelectorAll(".bg-1-alt").forEach(darkElement => {
                darkElement.classList.remove("bg-1-alt");
                darkElement.classList.add("bg-1");
            });

            //faire la même chose, pour la section 2 bg-2-alt Gallerie d'image
            document.querySelectorAll(".bg-2-alt").forEach(darkElement => {
                darkElement.classList.remove("bg-2-alt");
                darkElement.classList.add("bg-2");
            });

            //faire la même chose, pour la footer 2 bg-4-alt
            document.querySelectorAll(".bg-4-alt").forEach(darkElement => {
                darkElement.classList.remove("bg-4-alt");
                darkElement.classList.add("bg-4");
            });

            //faire la même chose, pour la modal bg-modal-1-alt
            document.querySelectorAll(".bg-modal-1-alt").forEach(darkElement => {
                darkElement.classList.remove("bg-modal-1-alt");
                darkElement.classList.add("bg-modal-1");
            });
        }

    });
});


/** 4. Faire apparaitre disparaitre : 
 * L'image du chien de base, via display : none, dans la classe css
 * ou remplacer par un chien qui tire la langue, donc remplacer l'url de l'image dans la classe css 
 * en fonction de si on clique ou pas dessus */


function changeDog(nameSelecteur) {
    let selecteurBalisType = nameSelecteur.charAt(0);
    let selecteurName = nameSelecteur.substring(1);
    if (selecteurBalisType == '.') {
        //c'est une classe
        let myElements = document.getElementsByClassName(selecteurName);
        Array.from(myElements).forEach(element => {

            if (element.classList.contains('button-click')) {
                element.classList.remove('button-click');
            }
            else {
                element.classList.add("button-click");
            }
        });

    }
    else if (selecteurBalisType == '#') {
        //c'est un identifiant
        let myElement = document.getElementById(selecteurName);
        if (myElement.classList.contains('button-click')) {
            myElement.classList.remove('button-click');
        }
        else {
            myElement.classList.add("button-click");
        }
    }
}

// const myButton = document.querySelector('#ChienChange')
// myButton.addEventListener('click', changeDog);


// // 2ème méthode, sans pouvoir revenir en arrière
// function changeDogButton1() {
//     document.getElementById("ChienChange").src = "image/Chien langue & non langue picto.png";
// }

// function changeDogButton2() {
//     document.getElementById("ChienChange2").src = "image/Chien langue & non langue picto.png";
// }
