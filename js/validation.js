(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  console.log(forms);
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        console.log("ola, dentro do if");
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
  console.log("ola");
})();
/* 
function validar() {
  let cnpj_ou_cpf = form.cnpj_cpf_identificacao;

  if (cnpj_ou_cpf.value == "") {
    cnpj_ou_cpf.focus();
    cnpj_ou_cpf.checkValidity()
      ? console.log("ola")
      : console.log("batata");
  }
} */

/* document.getElementById("nextBtn").addEventListener("click", validar);
 */
