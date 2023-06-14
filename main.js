const form = document.querySelector('form');
const button = form.querySelector('[type="submit"]');

function checkEmail(e){
    e.preventDefault(e);
    const email = e.target.querySelector('[type="email"]').value;
    validateEmail(email);
        if(!validateEmail){
            // console.log("Invalid email");
            form.classList.add('error');
        }
        else{
            // console.log("Valid email");
            form.classList.remove('error');
        }
        
        console.log(email);
        console.log(e);
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

form.addEventListener('submit', checkEmail);