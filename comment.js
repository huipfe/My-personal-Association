let btns = document.getElementsByClassName("call-function-changeDog");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        document.getElementById(".ChienNavbar1").classList.toggle("active");
    });
}

document.querySelectorAll(".call-function-changeDog").forEach(div => {
    div.addEventListener("click", event => { bouton*/
        let changeDog = event.currentTarget.dataset.theme;
        if (changeDog == "spring") {  
            document.querySelectorAll(".call-function-changeDog").forEach(autumnDog => {
                autumnDog.classList.remove("bg-0");
                autumnDog.classList.add("bg-0-alt");
            });
        }
        else if (changeDog == "autumn") { 
            document.querySelectorAll(".call-function-changeDog").forEach(springDog => {
                springDog.classList.remove("bg-0-alt");
                springDog.classList.add("bg-0");
            })
        }

    });
});

document.getElementById('drk').addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

function changeDog() {
    let element = document.body;
    element.classList.toggle("call-function-changeDog");
    let myDogLangue = document.querySelectorAll('drk');
    if (myDogLangue.style.backgroundImage === "url('image/Chienlangue&nonlanguepictoalt.png')") {
        onlick(myDogLangue.style.backgroundImage = "url('image/Chien langue Scroll Top.png')");
    } else {
        myDogLangue.style.backgroundImage = "url('image/Chienlangue&nonlanguepictoalt.png')";
    }
}

function changeDog() {
    document.querySelectorAll(".call-function-changeDog").style.backgroundImage = "url('image/Chien langue Scroll Top.png')";
}


    function changeDog() {

        Partie Chien Automne

            let imageTireLangueAutonme = document.body.style.backgroundImage = "url('image/Chien langue Scroll Top.png')";

            Si je clique, via une classe prédéfini, alors mon button prend l'image de mon chien autonme qui tire la langue.

            document.querySelectorAll('.call-function-changeDog').style.backgroundImage = imageTireLangueAutonme; 

            Sinon, si je reclick dessus, mon image initial du chien qui ne tire pas la langue revient.

        Chien Printemps
            Et si, j'avais le mode printemps activé, 

            let imageTireLanguePrintemps = document.body.style.backgroundImage = "url('image/Chien langue & non langue picto alt spring')";

            alors mon chien vert, devient le chien vert tirant sa langue

            document.querySelectorAll('.call-function-changeDog').style.    backgroundImage = imageTireLanguePrintemps; 


            Et si je reclick, mon chien redevient, celui en vert, qui ne     tire     pas     la langue
    }

let imageTireLangueAutonme = document.querySelectorAll(".call-function-changeDog")


mesInputsWysiwygEvents.forEach(mesImages => {

    mesImages.addEventListener("click", changeDog);
    mesImages.addEventListener("click", changeDog);
});



//** Faire dispaitre, avec une classe css, display none */
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

//** teste */
array.forEach(element => {
    const myButton = document.querySelector('#ChienChange')
    myButton.addEventListener('click', changeDog);
    
    
    // 2ème méthode, sans pouvoir revenir en arrière
    function changeDogButton1() {
        document.getElementById("ChienChange").src = "image/Chien langue Scroll Top.png";
    }
    
    function changeDogButton2() {
        document.getElementById("ChienChange2").src = "image/Chien langue Scroll Top.png";
    }
    
});

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
