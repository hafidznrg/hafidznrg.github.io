// // Selectors
// const input_nama = document.querySelector('.nama');
// const input_email = document.querySelector('.email');
// const input_subjek = document.querySelector('.subjek');
// const input_pesan = document.querySelector('.pesan');
// const tombol = document.querySelector('.kirim');

// // event listener
// tombol.addEventListener('click',tambah);

// // function
// function tambah(e){
//     const item = e.target;

//     const nama = input_nama.value;
//     const email = input_email.value;
//     const subjek = input_subjek.value;
//     const pesan = input_pesan.value;

//     let objek = [nama,email,subjek,pesan];

//     var messages = JSON.stringify(objek);
//     console.log(messages);
// }


window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("myForm");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
        form.reset();
        status.classList.add('alert-success');
        status.classList.add('alert-dismissible');
        status.innerHTML = "<div class=\"row justify-content-between\"><div class=\"col\">Pesan Anda telah terkirim</div><div class=\"col text-end\"><a href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" style=\"margin-right: -30px;\">&times;</a></div></div>";
    }

    function error() {
        status.classList.add('alert-danger');
        status.classList.add('alert-dismissible');
        status.innerHTML = "<div class=\"row justify-content-between\"><div class=\"col\">Mohon maaf, pesan Anda gagal terkirim, silakan mengisi kembali</div><div class=\"col text-end\"><a href=\"\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" style=\"margin-right: -30px;\">&times;</a></div></div>";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }