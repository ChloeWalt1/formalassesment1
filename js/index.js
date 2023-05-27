document.getElementById('registerBtn').addEventListener('click', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contact = document.getElementById('contact').value;
  var subject = document.getElementById('subject').value;
  var password = document.getElementById('password').value;
  var spamLetters = document.getElementById('spamLetters').checked;

  if (spamLetters) {
    alert('Welcome ' + name + '! Thank you for your interest in ' + subject + '! We will contact you via ' + email + ' or alternatively ' + contact + '.');
  } else {
    alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested, " + name + ". If you want to sign up, you better check that newsletter box!");
  }
});