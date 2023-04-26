
//Comment récupérer en queryselector, en fonction du type d'élements : 
/**
 * ID = "#ID"
 * data-exemple = "[data-exemple]"
 * class = ".class"
 */


//** Algo de base */
// function changeDog() {

        // Partie Chien Automne

    // let imageTireLangueAutonme = document.body.style.backgroundImage = "url('image/Chien langue Scroll Top.png')";

            // Si je clique, via une classe prédéfini, alors mon button prend l'image de mon chien autonme qui tire la langue.

    // document.querySelectorAll('.call-function-changeDog').style.backgroundImage = imageTireLangueAutonme;

    // Sinon, si je reclick dessus, mon image initial du chien qui ne tire pas la langue revient.

        // Chien Printemps
            // Et si, j'avais le mode printemps activé, 

    // let imageTireLanguePrintemps = document.body.style.backgroundImage = "url('image/Chien langue & non langue picto alt spring')";

            // alors mon chien vert, devient le chien vert tirant sa langue

    // document.querySelectorAll('.call-function-changeDog').style.backgroundImage = imageTireLanguePrintemps; 


            // Et si je reclick, mon chien redevient, celui en vert, qui ne     tire     pas     la langue
// }

// let imageTireLangueAutonme = document.querySelectorAll(".call-function-changeDog")


// mesInputsWysiwygEvents.forEach(mesImages => {

//     mesImages.addEventListener("click", changeDog);
//     mesImages.addEventListener("click", changeDog);
// });


//** 1er version, uniquement sur l'image, pas le button en lui même */
//** first dog picto */
//Select image element
const img = document.getElementById('changeDog1');
//Listen for the click event
//toggle variable
let toggle = true;

img.addEventListener('click', function () {
    //toggle
    toggle = !toggle;
    if (toggle) {
        img.src = 'image/Chienlangue&nonlanguepictoalt.png';
    }
    else {
        img.src = 'image/Chien langue Scroll Top.png';
    }

})


//** 2nd dog picto */
//Select image element
const img2 = document.getElementById('changeDog2');
//Listen for the click event
//toggle variable
let toggle2 = true;

img2.addEventListener('click', function () {
    //toggle
    toggle2 = !toggle2;
    if (toggle2) {
        img2.src = 'image/Chienlangue&nonlanguepictoalt.png';
    }
    else {
        img2.src = 'image/Chien langue Scroll Top.png';
    }

})

//------------------------CSS PART-----------------------------

/* Animation Image via JS */
/* .button-click { */
/* content:'image/Chien langue & non langue picto.png' */

/* background-image: url('image/Chien langue Scroll Top.png');  */
/* Image de remplacement */

/* display: none; */
/* Pour Teste */

/* } */

/* .button-click:hover img{
background-image: url('image/Chien langue & non langue picto.png');
height: 70px;
width: 120px;
}  */

/* div .call-function-changeDog {
    background-image: url("image/Chienlangue&nonlanguepictoalt.png");
}

div .call-function-changeDog.active {
    background-image: url("image/Chien langue Scroll Top.png");
} */

//------------------------Algo & test part-----------------------------
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