
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
event.preventDefault();

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (!emailInput.value || !passwordInput.value) {
alert('Заповніть всі поля!');
return;
}

const formObject = {
email: emailInput.value,
password: passwordInput.value
};

console.log(formObject);

loginForm.reset();
});





