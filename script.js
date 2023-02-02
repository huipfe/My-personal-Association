/** 1. Animation JS TypesWritter */








/** 2. Arrow Function :
 * remonter, ou descendre dans la page */







/** 3. Light/Dark Mode : 
 * changement de thème dans la page, thème bleue ou vert */




/** 4. Faire apparaitre disparaitre : 
 * L'image du chien burger, 
 * ou remplacer par un chien qui tire la langue,
 *  en fonction de si on clique ou pas dessus */

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

// function changeDog() {
//     let element = document.getElementById('ChienChange');
//     element.hidden = !element.hidden;
// }

/** On peut appeler cette fonction, avec un sélecteur CSS
 * Comme un : .class ou un #identifiant
 * Pour l'appeler en #, un ID <button onclick = "changeDog"('#ChienChange')>
 * Pour l'appeler en ., une classe <a onclick = "changeDog"('.call-function-changeDog)>
 */ 
// function changeDog(nameSelecteur) {
//     let selecteurBaliseType = nameSelecteur.charAt(0); //doner la première valeur, position 0, de notre chaine de caractère
//     let selecteurName = nameSelecteur.substring(1);
//     if (selecteurBaliseType == '-') { // si cette valeur elle vaut un point, dans ce cas là...  
//         // C'est une class, il faut que je puisse récuperer cet  élément
//         let myElement = document.getElementsByClassName(selecteurName);
//         Array.from(myElement).forEach(element => { //pour mes liens, pour chaque élément...

//             if (element.classList.contains('button-click')) { // si dans mon élément, dans ma liste de classe, ma liste de classe contient hide
//                 element.classList.remove('button-click'); //dans ce cas là, si ça le contient, on peut lui enlever
//             }
//             else { //Sinon, on lui ajoute
//                 element.classList.add("button-click");
//             }
//         });
//     }
//     else if (selecteurBaliseType == '#') { // et si  c'est un dièse/htag....
//         // alors c'est un identifiant
//         let myElement = document.getElementById(selecteurName);
//         if (myElement.classList.contains('button-click')) { // si dans mon élément, dans ma liste de classe, ma liste de classe contient hide
//             myElement.classList.remove('button-click'); //dans ce cas là, si ça le contient, on peut lui enlever
//         }
//         else { //Sinon, on lui ajoute
//             myElement.classList.add("button-click");
//         }
//     }

// }