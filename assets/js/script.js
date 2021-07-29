// Déclaration de la variable du bouton Valider.
var validButton = document.getElementById('validButton');
// Evènement clic sur le bouton qui appelle la fonction valid().
validButton.addEventListener('click', valid);
// Déclaration de la fonction valid() qui affiche une alerte (majeur, mineur ou impossible!)
function valid() {
    var age = document.getElementById('age').value;
    if (age >= 18 && age <= 120) {
        alert('Vous êtes majeur !');
    }
    else if (age > 0 && age < 18){
        alert('Vous êtes mineur !');
    }
    else{
        alert('Impossible !');
    }
}

// Cas numéro deux avec le deuxième bouton sendButton pour écrire directement dans le HTML.
// Déclaration de la variable du bouton Envoyer.
var sendButton = document.getElementById('send');
// Evènement clic sur le bouton qui appelle la fonction send().
sendButton.addEventListener('click', send);
// Déclaration de la fonction valid() qui affiche une alerte (majeur, mineur ou impossible!)
function send(){
    var age2 = document.getElementById('age').value;
    var message;
    if (age2 >= 18 && age2 <= 120) {
        message = 'Vous êtes majeur !';
    }
    else if (age2 > 0 && age2 < 18){
        message = 'Vous êtes mineur !';
    }
    else{
        message = 'Impossible !';
    }
    document.getElementById('paragraph').innerHTML = message;
}