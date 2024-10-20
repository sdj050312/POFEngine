const inputId = $('#id_form');
const inputPwd = $('#password');
const inputRpwd = $('#cpassword');
const email = $('#email');
const button = $('.regist-Form button');

function RegisterForm() {
    const IdVal = inputId.val().trim();
    const pwdVal = inputPwd.val().trim();
    const rpwdVal = inputRpwd.val().trim();
    const emailVal = email.val().trim();

    // Enable the button if at least one of the fields has a value
    button.prop('disabled', !(IdVal !== "" || pwdVal !== "" || rpwdVal !== "" || emailVal !== ""));
}

// Attach input event listeners to all relevant fields
inputId.on('input', RegisterForm);
inputPwd.on('input', RegisterForm);
inputRpwd.on('input', RegisterForm);
email.on('input', RegisterForm);

$('.modal-btn button').click(function(){
    window.location.href = "/html/pof2login.html";
    console.log(this);
})
button.click(function(){
    $('.modal').show();
})
