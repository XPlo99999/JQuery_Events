
$(document).ready(function() {

    // Formulaire
    let formulaire = $('<form>');
    $('body').append('<br></br>');

    // Champs
    let Nom = $('<input>').attr('type', 'text');
    let Prenom = $('<input>').attr('type', 'text');
    let Birthday = $('<input>').attr('type', 'date');
    let BoutonSubmit = $('<input>').attr('type', 'submit');

    // Ajouts
    formulaire.append(Nom);
    formulaire.append(Prenom);
    formulaire.append(Birthday);
    formulaire.append(BoutonSubmit);

    // Résultat
    let resultat = $('<div>');
    $('body').append(formulaire).append(resultat);
    
    // Envoie des données
    formulaire.submit(function(event) {
        
        // Vérification
        let erreur = false;
        let nom = Nom.val();
        let prenom = Prenom.val();
        let birthday = Birthday.val();
      
        // Couleur de fond des champs
        if (nom == "" || (Number.isNaN(nom))) {
            Nom.css('background-color', 'red');
            erreur = true;
        } else {
            Nom.css('background-color', 'white');
        }
        if (prenom == "" || (Number.isNaN(prenom))) {
            Prenom.css('background-color', 'red');
            erreur = true;
        } else {
            Prenom.css('background-color', 'white');
        }
        if (birthday == "" || (Number.isNaN(birthday))) {
            Birthday.css('background-color', 'red');
            erreur = true;
        } else {
            Birthday.css('background-color', 'white');
        }
      
        // Affichage
        if (!erreur) {
            let birthdayCalcul = new Date(birthday);
            let age = Math.floor((Date.now() - birthdayCalcul.getTime()) / 31557600000);
            resultat.text('Nom = ' + nom + ' | Prénom = ' + prenom + ' | Âge = ' + age);
        } else {
            erreur = true;
        }

        // Pour rester sur la page sans l'actualiser
        event.preventDefault();
    });
});