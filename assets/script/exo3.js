
$(document).ready(function() {

    // Div Container
    let Container = $('<div>').css('width', '500px').css('height', '500px').css('border', '3px dashed black').css('position', 'relative');
    
    // Div Carré
    let Carre = $('<div>').css('width', '50px').css('height', '50px').css('background-color', 'blue').css('position', 'absolute');
    
    // Ajouts
    $('body').append(Container);
    Container.append(Carre);
    
    // Position du Carré
    Carre.position();
    
    // Gestion de l'événement de déplacement du petit carré
    Carre.on('mousedown', function(event) {
      
        // Déplacement du Carré
        let initialX = event.pageX;
        let initialY = event.pageY;
        let offset = Carre.offset();
      
        Container.on('mousemove', function(event) {
            // INCOMPLET, je ne sais pas comment faire pour gérer les déplacements.
        });
        
            // Actualisation de la position du Carré
            Carre.css(nouvellePosition);
        
            // Vérification si le Carré touche une bordure

            // INCOMPLET, je ne sais pas comment faire pour détecter les bordures.
            /*
            let bordGauche = nouvellePosition;
            let bordDroit = nouvellePosition;
            let bordHaut = nouvellePosition;
            let bordBas = nouvellePosition;
            */
        
            // Changement de couleurs
            if (bordGauche || bordDroit || bordHaut || bordBas) {
                Carre.css('background-color', 'red');
            } else {
                Carre.css('background-color', 'blue');
            }
        });

    event.preventDefault();
});