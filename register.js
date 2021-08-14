const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // Get the values from the inputs
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(emailValue === '') {
        //show error
        setErrorFor(email, 'Please fill the Email field.');
    }   
        else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid.');
        }
        else {
            //add succes class
            setSuccessFor(email);
        }
        



    if(passwordValue === '') {
        setErrorFor(password, 'Please fill the Password FileReader.');
    }
        else {
            setSuccessFor(password);
        }


    if(password2Value === '') {
        setErrorFor(password2, 'Please repeat the password.');
    }
        else if(passwordValue !== password2Value) {
            setErrorFor(password2Value, 'Possords does not match.')
        }
        else {
            setSuccessFor(password2);
        }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querrySelector('small');

    // add error message inside <small>(html)
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}