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


/** 3. success/warning Mode : 
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
            //récupère tout les élements qui ont la classe bg-warning
            //bg-warning -> bg-success
            //pour chaque élement dark element, on enlève, pour remplacer par success element.
            /* Dans ce cas là, on applique le thème success */

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
        /* Partie Sombre, car site devenu clair durant la partie précédente */
        else if (themeTarget == "autumn") {  /*Si ThemeTarget = dark*/
            document.querySelectorAll(".bg-light").forEach(lightElement => {
                lightElement.classList.remove("bg-light");
                lightElement.classList.add("bg-dark");
            })
            //récupère tout les élements qui ont la classe bg-light
            //bg-light -> bg-dark
            //pour chaque élement light element, on enlève, pour remplacer par dark element.
            /* Dans ce cas là, on applique le thème dark */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-dark").forEach(lightElement => {
                lightElement.classList.remove("text-dark");
                lightElement.classList.add("text-light");
            });

            document.querySelectorAll(".text-bg-light").forEach(lightElement => {
                lightElement.classList.remove("text-bg-light");
                lightElement.classList.add("text-bg-dark");
            });

            //faire la même chose, pour la navbar 
            document.querySelectorAll(".navbar-light").forEach(lightElement => {
                lightElement.classList.remove("navbar-light");
                lightElement.classList.add("navbar-dark");
            });

            //faire la même chose, pour le bouton 
            document.querySelectorAll(".btn-light").forEach(lightElement => {
                lightElement.classList.remove("btn-light");
                lightElement.classList.add("btn-dark");
            });

            //faire la même chose, pour le corp des cards (card-body)
            document.querySelectorAll(".light").forEach(lightElement => {
                lightElement.classList.remove("light");
                lightElement.classList.add("dark");
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
