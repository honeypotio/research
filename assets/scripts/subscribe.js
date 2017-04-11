var form = document.querySelector('.js-subscribe');
var subscribeURL = 'https://honeypot-research.herokuapp.com/subscribe';

function showError() {
  var error = document.querySelector('.js-subscribe-error');
  error.classList.remove('hide');
  setTimeout(function() {
    error.classList.add('hide');
  }, 2000);
}

function showSuccess() {
 var success = document.querySelector('.js-subscribe-success');
  success.classList.remove('hide');
  setTimeout(function() {
    success.classList.add('hide');
  }, 2000);
  form.name.value = '';
  form.email.value = '';

}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (!form.name.value.length || !form.email.value.length) {
    showError();
  } else {
    fetch(subscribeURL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body : JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        report_name: form.report_name.value
      })
    })
    .then(showSuccess)
    .catch(showError);
  }
});
