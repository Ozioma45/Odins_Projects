const pw = document.querySelector('#password');
const pwC = document.querySelector('#passwordC');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const tel = document.querySelector('#phonenumber');
const pwError = document.querySelector('#password-error');
const pwCError = document.querySelector('#passwordC-error');
const firstnameError = document.querySelector('#first-name-error');
const lastnameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const telError = document.querySelector('#tel-error');
const submitBtn = document.querySelector('#submit');

firstname.addEventListener("input", function (event) {
  if (firstname.value === '') {
    firstnameError.textContent = 'Please type in your first name.';
  } else {
    firstnameError.textContent = '';
  }
}); 

lastname.addEventListener("input", function (event) {
  if (lastname.value === '') {
    lastnameError.textContent = 'Please type in your last name';
  } else {
    lastnameError.textContent = '';
  }
}); 

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
  } else {
    emailError.textContent = '';
  }
}); 

tel.addEventListener("input", function (event) {
  if (tel.validity.patternMismatch) {
    telError.textContent = 'Please enter in a 10 digit phone number';
  } else {
    telError.textContent = '';
  }     
}); 

pw.addEventListener("input", function (event) {
  if (pw.validity.patternMismatch){
    const currentValue = pw.value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    const regExpSmall = /[a-z]/g;
    let result = '';

    if (regExpCap.test(currentValue)){
      result += '';
    } else {
      result += `Missing at least 1 capital letter. `;
      result += '\n';
    }

    if (regExpSmall.test(currentValue)){
      result += '';
    } else {
      result += `Missing at least 1 lowercase letter. `;
      result += '\n';
    }
    
    
    if (regExpDig.test(currentValue)){
      result += '';
    } else {
      result += 'Missing at least 1 number. ';
      result += '\n';
    }
    
    if (currentValue.length < 9){
      result += 'Password must be at least 8 characters. '
      result += '\n';
    } else {
      result += '';
    }

    console.log(result);
    pwError.textContent = result;


  } else {
    pwError.textContent = '';
  }
});

pwC.addEventListener("input", function (event) {
  if (pwC.value !== pw.value) {
    pwCError.textContent = 'Passwords do not match';
  } else {
    pwCError.textContent = '';
  }
});

submitBtn.addEventListener('click', (e) => {
    //get the form
    const form = document.getElementById('myForm')

    //submit form
    if (form) {
        form.addEventListener('submit', function(event) {
          // Prevent the default form submission behavior
          event.preventDefault();
    
          // Redirect the user to the specified page after form submission
          window.location.href = 'thanks.html';
        });
      }
});





