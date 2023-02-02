//Affecte la nouvelle image lorsque la souris survole l'élément
function passaeDeLaSouris(element) {
    element.setAttribute('src', 'image/Chien langue & non langue picto.png');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function departDeLaSouris(element) {
    element.setAttribute('src', 'image/Chienlangue&nonlanguepictoalt.png');
}