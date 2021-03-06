/**
 * Code de gestion du formulaire
 */

 
let form = document.querySelector('#validation');

    // Ecouter la modification de l'email
form.email.addEventListener('change', function() { 
    validEmail(this);
});    

   // Ecouter la modification de password
form.password.addEventListener('change', function() {
    validPassword(this);
});

   // Ecouter la modification des champs
const verification = document.querySelector('#validation');
 verification.addEventListener('click', confirme);

 // Ecouter la soumission du formulaire
form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(validAdresse(form.email) && validPassword(form.password)){
       form.style.backgroundColor = '#a7ff3342'; 
    }
});

// ****************** Validation EMAIL *********************
const validEmail = function(inputEmail){
    // creation de la reg exp pour la validation de l'email
        let msgErreur = document.querySelector('.message');
        let emailRegExp = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$','g'
        );
    
    // On test l'expression régulière
        let emailEntre = emailRegExp .test(inputEmail.value);
        
    // on retire le message visible si le test est vrai 
        if(emailEntre ){
            msgErreur.innerHTML = '';
            msgErreur.classList.remove('message-visible');
            return true;
    
        } else  {
    // si non on affiche un message d'erreur 
            msgErreur.innerHTML = 'adresse incorrecte';
            msgErreur.classList.add('message-visible');
            return false;
        } 
    }

// ******************* Validation PASSWORD ******************

const validPassword = function(inputPassword) {
    let msgPassword = document.querySelector('.message');
 
 //Au moins 8 caractères
    if (inputPassword.value.length < 8){
        msgPassword.innerHTML = 'Le mot de passe doit contenir au moin 8 caratères';
        msgPassword.classList.add('message-visible');
        return false
    } else {
        msgPassword.classList.remove('message-visible');
        return true;
    }

}

function confirme(){
    let inputs = document.querySelectorAll('.input100');
    let msgErreur = document.querySelector('.message');
   

    for(let i = 0; i<inputs.length;i++){
        if(inputs[i].value == ''){
            msgErreur.innerHTML = 'Veillez renseignez tous les champs';
            msgErreur.classList.add('message-visible');
        } else {
            
            msgErreur.classList.remove('message-visible');
        }
    
    
    }
    

}