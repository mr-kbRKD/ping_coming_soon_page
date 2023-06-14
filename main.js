const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');

function checkEmail(e){
    e.preventDefault(e);
    const email = e.target.querySelector('[type="email"]').value;
    validateEmail(email);
        if(!validateEmail){
            console.log("Invalid email");
        }
        else{
            console.log("Valid email");
        }
        
        console.log(email);
        console.log(e);
    }

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

form.addEventListener('submit', checkEmail);