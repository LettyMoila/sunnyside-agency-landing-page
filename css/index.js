function learnFunc(learn) {
        alert("Stay tuned to learn more");
    }
    function validateEmail(email) {

        var validCharacters = [a-zA-Z0-9];
    
        if (email.value.trim() == " ") {
            alert("Please provide email address")
            return 0;
        } 
        if(email.match(validCharacters)){
            return 1;
        }
        else {
            alert("invalid email address")
            return 0;
        }
        
    }
    function nameValidation(name) {
        let isNotEmpty = true;
    
        if(name.value.trim() == " ")
        {
            alert('Please type in your cellphone name');
            return false;
        }
        else{
            return true;
        }
    }
    function surnameV(surname) {
        let isNotEmpty = true;
    
        if(surname.value.trim() == " ")
        {
            alert('Please type in your cellphone surname');
            return false;
        }
        else{
            return true;
        }
    }
    function cellValid(cell) {
        let isNotEmpty = true;
    
        if(cell.value.trim() == " ")
        {
            alert('Please type in your cellphone nummber');
            return false;
        }
        else{
            return true;
        }
    }
    function message(message) {
        let isNotEmpty = true;
    
        if(message.value.trim() == " ")
        {
            alert('Please type in your message');
            return false;
        }
        else{
            return true;
        }
    }