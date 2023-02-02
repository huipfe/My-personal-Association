/** 1. Animation JS TypesWritter */








/** 2. Arrow Function :
 * remonter, ou descendre dans la page */







/** 3. Light/Dark Mode : 
 * changement de thème dans la page, thème bleue ou vert */




/** 4. Faire apparaitre disparaitre : 
 * L'image du chien burger, 
 * ou remplacer par un chien qui tire la langue,
 *  en fonction de si on clique ou pas dessus */

// faire apparaitre ou disparaitre un élément, à liée à un click sur son html.
function changeDog () {
    let element = document.getElementById('ChienChange'); 
    element.hidden = !element.hidden; 
}