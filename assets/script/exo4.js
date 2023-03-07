
$(document).ready(function() {

    // Boutons
    let couleurBouton = $('<a>Bouton Clic</a>')
    let rgbBouton = $('<a>Bouton RGB</a>')

    // Couleur de fond
    // /\ Attention à bien spammer le bouton /\
    $('body').append(couleurBouton.click(function() {
        let couleurAléat = Math.floor(Math.random()*99999999).toString(16);
        $('body').css('background-color', '#' + couleurAléat);
    }));
    $('body').append('<br></br>');

    // Saisie RGB
    // Boutons
    let redInput = $('<a>Red-RGB</a>');
    let greenInput = $('<a>Green-RGB</a>');
    let blueInput = $('<a>Blue-RGB</a>');

    // Ajouts
    $('body').append(redInput);
    $('body').append(greenInput);
    $('body').append(blueInput);

    // A suivre ...

});
