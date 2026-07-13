// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

  let btn = document.querySelectorAll(".light-dark");
  let body = document.querySelector("body");
  let icon = document.querySelectorAll(".light-dark i");

  btn.forEach(btn=>{
    
    btn.addEventListener("click",()=>{
    body.classList.toggle("light");
    icon.forEach(icon=>{
      icon.classList.toggle("fa-sun");
      icon.classList.toggle("fa-moon");
    });
    
  });
});
  