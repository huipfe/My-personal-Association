


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
