window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.style = "color: green";
    status.innerHTML = "Thanks! I will get to you back as soon as possible";
  }

  function error() {
    status.innerHTML = "Oops! Please check your entries.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(e, method, url, data, success, error) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  console.log(name.value, email.value, phone.value, message.value);
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    // if (
    //   !name.value ||
    //   !email.value ||
    //   !phone.value ||
    //   !message.value ||
    //   !xhr.status === 200
    // ) {
    //   error(xhr.status, xhr.response, xhr.responseType);
    // } else {
    //   success(xhr.response, xhr.responseType);
    // }
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };

  xhr.send(data);
}
