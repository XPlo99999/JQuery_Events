
$(document).ready(function() {

    // Bouton
    let clicNb = 0;
    let $bouton = $('<a>Clic encore et encore !</a>');
    $('body').append($bouton);

    // Fonction Clic
    $bouton.click(function() {
      clicNb++;
      $('body').append('<p>Clic n° : ' + clicNb + '</p>');
    });

});
