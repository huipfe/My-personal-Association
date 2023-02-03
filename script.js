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





/** 3. Light/Dark Mode : 
 * changement de thème dans la page, thème bleue ou vert */

//Thème Clair & Sombre, via paramètre

/* Partie Clair, car site sombre de base */
document.querySelectorAll(".ChangeThemeDiv").forEach(div => {
    div.addEventListener("click", event => { /* Quand tu cliques sur ma div*/
        let themeTarget = event.currentTarget.dataset.theme;
        if (themeTarget == "light") {  /*Si ThemeTarget = light*/
            document.querySelectorAll(".bg-dark").forEach(darkElement => {
                darkElement.classList.remove("bg-dark");
                darkElement.classList.add("bg-light");
            });
            //récupère tout les élements qui ont la classe bg-dark
            //bg-dark -> bg-light
            //pour chaque élement dark element, on enlève, pour remplacer par light element.
            /* Dans ce cas là, on applique le thème light */

            //faire la même chose, mais pour le texte
            document.querySelectorAll(".text-light").forEach(darkElement => {
                darkElement.classList.remove("text-light");
                darkElement.classList.add("text-dark");
            });

            document.querySelectorAll(".text-bg-dark").forEach(lightElement => {
                lightElement.classList.remove("text-bg-dark");
                lightElement.classList.add("text-bg-light");
            });

            //faire la même chose, pour la navbar
            document.querySelectorAll(".navbar-dark").forEach(darkElement => {
                darkElement.classList.remove("navbar-dark");
                darkElement.classList.add("navbar-light");
            });

            //faire la même chose, pour le bouton
            document.querySelectorAll(".btn-dark").forEach(darkElement => {
                darkElement.classList.remove("btn-dark");
                darkElement.classList.add("btn-light");
            });

            //faire la même chose, pour le corp des cards (card-body)
            document.querySelectorAll(".dark").forEach(darkElement => {
                darkElement.classList.remove("dark");
                darkElement.classList.add("light");
            });

            // //avec un Regex, une expression régulière, pour simplifier
            // document.querySelectorAll('[class^="*-dark"]').forEach(darkElement => {

            // })
        }
        /* Partie Sombre, car site devenu clair durant la partie précédente */
        else if (themeTarget == "dark") {  /*Si ThemeTarget = dark*/
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
