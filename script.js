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
