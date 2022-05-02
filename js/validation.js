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
        console.log(event);
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          $("input:invalid").filter(":first").focus();
          console.log("false");
        }

        if (form.checkValidity()) {
          event.preventDefault();
          console.log("true");
          saveLocalStorage();
          location.href = "../documento_gerado.html";
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

// Variaveis para local Storage
function saveLocalStorage() {
  //Seleção de documento
  let tipoRequisiçaoDoc = document.querySelector(
    'input[name="tipoRequisiçaoDoc"]:checked'
  ).value;
  console.log(tipoRequisiçaoDoc);

  //Section Identificação:
  let tipoContribuinte = document.querySelector(
    'input[name="tipoContribuinte"]:checked'
  ).value;
  console.log(tipoContribuinte);

  let id_cnpj_cpf_identificacao = document.getElementById(
    "id_cnpj_cpf_identificacao"
  ).value;
  console.log(id_cnpj_cpf_identificacao);
  let id_dataAbertura_identificacao = document.getElementById(
    "id_dataAbertura_identificacao"
  ).value;
  console.log(id_dataAbertura_identificacao);
  let id_nameRazaoSocial_identificacao = document.getElementById(
    "id_nameRazaoSocial_identificacao"
  ).value;
  console.log(id_nameRazaoSocial_identificacao);
  let id_nameFantasia_identificacao = document.getElementById(
    "id_nameFantasia_identificacao"
  ).value;
  console.log(id_nameFantasia_identificacao);

  let id_email_identificacao = document.getElementById(
    "id_email_identificacao"
  ).value;
  console.log("id_email_identificacao");

  let id_obsRelevante_identificacao = document.getElementById(
    "id_obsRelevante_identificacao"
  ).value;
  console.log(id_obsRelevante_identificacao);

  // Section Atividade economica:
  let select_atividadeEconomica = document.getElementById(
    "select_atividadeEconomica"
  ).value;
  console.log(select_atividadeEconomica);

  let select_CNAEs_atividadeEconomica = document.getElementById(
    "select_CNAEs_atividadeEconomica"
  ).value;
  console.log(select_CNAEs_atividadeEconomica);

  let select_CNAEs_secundario_atividadeEconomica = document.getElementById(
    "select_CNAEs_secundario_atividadeEconomica"
  );
  let value_select_CNAEs_secundario_atividadeEconomica = [
    ...select_CNAEs_secundario_atividadeEconomica.selectedOptions,
  ].map((option) => option.value);
  // Section Endereço localização das atividades:
  let id_logradouro_localizacao_das_atividades = document.getElementById(
    "id_logradouro_localizacao_das_atividades"
  ).value;
  console.log(id_logradouro_localizacao_das_atividades);

  let id_numero_localizacao_das_atividades = document.getElementById(
    "id_numero_localizacao_das_atividades"
  ).value;
  console.log(id_numero_localizacao_das_atividades);

  let id_bairro_localizacao_das_atividades = document.getElementById(
    "id_bairro_localizacao_das_atividades"
  ).value;
  console.log(id_bairro_localizacao_das_atividades);

  let id_complementar_localizacao_das_atividades = document.getElementById(
    "id_complementar_localizacao_das_atividades"
  ).value;
  console.log(id_complementar_localizacao_das_atividades);

  let id_cep_localizacao_das_atividades = document.getElementById(
    "id_cep_localizacao_das_atividades"
  ).value;
  console.log(id_cep_localizacao_das_atividades);

  let id_telefone_localizacao_das_atividades = document.getElementById(
    "id_telefone_localizacao_das_atividades"
  ).value;
  console.log(id_telefone_localizacao_das_atividades);

  let id_cidade_localizacao_das_atividades = document.getElementById(
    "id_cidade_localizacao_das_atividades"
  ).value;
  console.log(id_cidade_localizacao_das_atividades);

  let id_uf_localizacao_das_atividades = document.getElementById(
    "id_uf_localizacao_das_atividades"
  ).value;
  console.log(id_uf_localizacao_das_atividades);

  // radio button endereço igual?

  let endrecoIgual_localizacao_das_atividades = document.querySelector(
    'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
  ).value;
  console.log(endrecoIgual_localizacao_das_atividades);

  // Section endereço de correspondencia:
  let id_Logradouro_endereco_correspondencia = document.getElementById(
    "id_Logradouro_endereco_correspondencia"
  ).value;
  console.log(id_Logradouro_endereco_correspondencia);

  let id_numero_endereco_correspondencia = document.getElementById(
    "id_numero_endereco_correspondencia"
  ).value;
  console.log(id_numero_endereco_correspondencia);

  let id_bairro_endereco_correspondencia = document.getElementById(
    "id_bairro_endereco_correspondencia"
  ).value;
  console.log(id_bairro_endereco_correspondencia);

  let id_complemento_endereco_correspondencia = document.getElementById(
    "id_complemento_endereco_correspondencia"
  ).value;
  console.log(id_complemento_endereco_correspondencia);

  let id_cep_endereco_correspondencia = document.getElementById(
    "id_cep_endereco_correspondencia"
  ).value;
  console.log(id_cep_endereco_correspondencia);

  let id_cidade_endereco_correspondencia = document.getElementById(
    "id_cidade_endereco_correspondencia"
  ).value;
  console.log(id_cidade_endereco_correspondencia);

  let id_uf_endereco_correspondencia = document.getElementById(
    "id_uf_endereco_correspondencia"
  ).value;
  console.log(id_uf_endereco_correspondencia);

  //Section proprietário:
  let id_nomeRazaoSocial_proprietario = document.getElementById(
    "id_nomeRazaoSocial_proprietario"
  ).value;
  console.log(id_nomeRazaoSocial_proprietario);

  let id_nome_mae_proprietario = document.getElementById(
    "id_nome_mae_proprietario"
  ).value;
  console.log(id_nome_mae_proprietario);

  let select_estado_civil_proprietario = document.getElementById(
    "select_estado_civil_proprietario"
  ).value;
  console.log(select_estado_civil_proprietario);

  let id_data_nascimento_proprietario = document.getElementById(
    "id_data_nascimento_proprietario"
  ).value;
  console.log(id_data_nascimento_proprietario);

  let id_cpf_ou_cnpj_proprietario = document.getElementById(
    "id_cpf_ou_cnpj_proprietario"
  ).value;
  console.log(id_cpf_ou_cnpj_proprietario);

  let id_email_proprietario = document.getElementById(
    "id_email_proprietario"
  ).value;
  console.log(id_email_proprietario);

  let id_logradouro_proprietario = document.getElementById(
    "id_logradouro_proprietario"
  ).value;
  console.log(id_logradouro_proprietario);

  let id_num_da_rua_proprietario = document.getElementById(
    "id_num_da_rua_proprietario"
  ).value;
  console.log(id_num_da_rua_proprietario);

  let id_bairro_proprietario = document.getElementById(
    "id_bairro_proprietario"
  ).value;
  console.log(id_bairro_proprietario);

  let id_cidade_proprietario = document.getElementById(
    "id_cidade_proprietario"
  ).value;
  console.log(id_cidade_proprietario);

  let id_uf_proprietario = document.getElementById("id_uf_proprietario").value;
  console.log(id_uf_proprietario);

  let id_complemento_proprietario = document.getElementById(
    "id_complemento_proprietario"
  ).value;

  let id_cep_proprietario = document.getElementById(
    "id_cep_proprietario"
  ).value;

  let id_telefone_proprietario = document.getElementById(
    "id_telefone_proprietario"
  ).value;

  let id_telefone_celular_proprietario = document.getElementById(
    "id_telefone_celular_proprietario"
  ).value;

  var dataJson = {
    tipoDeRequisicao: {
      tipoRequisiçaoDoc: tipoRequisiçaoDoc,
    },
    identificacao: {
      tipoContribuinte: tipoContribuinte,
      id_cnpj_cpf_identificacao: id_cnpj_cpf_identificacao,
      id_dataAbertura_identificacao: id_dataAbertura_identificacao,
      id_nameRazaoSocial_identificacao: id_nameRazaoSocial_identificacao,
      id_nameFantasia_identificacao: id_nameFantasia_identificacao,
      id_email_identificacao: id_email_identificacao,
      id_obsRelevante_identificacao: id_obsRelevante_identificacao,
    },
    atvEconomica: {
      select_atividadeEconomica: select_atividadeEconomica,
      select_CNAEs_atividadeEconomica: select_CNAEs_atividadeEconomica,
      select_CNAEs_secundario_atividadeEconomica:
        value_select_CNAEs_secundario_atividadeEconomica,
    },
    localizacao_das_atividades: {
      id_logradouro_localizacao_das_atividades:
        id_logradouro_localizacao_das_atividades,
      id_numero_localizacao_das_atividades:
        id_numero_localizacao_das_atividades,
      id_bairro_localizacao_das_atividades:
        id_bairro_localizacao_das_atividades,
      id_complementar_localizacao_das_atividades:
        id_complementar_localizacao_das_atividades,
      id_cep_localizacao_das_atividades: id_cep_localizacao_das_atividades,
      id_telefone_localizacao_das_atividades:
        id_telefone_localizacao_das_atividades,
      id_cidade_localizacao_das_atividades:
        id_cidade_localizacao_das_atividades,
      id_uf_localizacao_das_atividades: id_uf_localizacao_das_atividades,
      endrecoIgual_localizacao_das_atividades:
        endrecoIgual_localizacao_das_atividades,
    },
    endrecoCorrespondencia: {
      id_Logradouro_endereco_correspondencia:
        id_Logradouro_endereco_correspondencia,
      id_numero_endereco_correspondencia: id_numero_endereco_correspondencia,
      id_bairro_endereco_correspondencia: id_bairro_endereco_correspondencia,
      id_complemento_endereco_correspondencia:
        id_complemento_endereco_correspondencia,
      id_cep_endereco_correspondencia: id_cep_endereco_correspondencia,
      id_cidade_endereco_correspondencia: id_cidade_endereco_correspondencia,
      id_uf_endereco_correspondencia: id_uf_endereco_correspondencia,
    },
    proprietario: {
      id_nomeRazaoSocial_proprietario: id_nomeRazaoSocial_proprietario,
      id_nome_mae_proprietario: id_nome_mae_proprietario,
      select_estado_civil_proprietario: select_estado_civil_proprietario,
      id_data_nascimento_proprietario: id_data_nascimento_proprietario,
      id_cpf_ou_cnpj_proprietario: id_cpf_ou_cnpj_proprietario,
      id_email_proprietario: id_email_proprietario,
      id_logradouro_proprietario: id_logradouro_proprietario,
      id_num_da_rua_proprietario: id_num_da_rua_proprietario,
      id_bairro_proprietario: id_bairro_proprietario,
      id_cidade_proprietario: id_cidade_proprietario,
      id_uf_proprietario: id_uf_proprietario,
      id_complemento_proprietario: id_complemento_proprietario,
      id_cep_proprietario: id_cep_proprietario,
      id_telefone_proprietario: id_telefone_proprietario,
      id_telefone_celular_proprietario: id_telefone_celular_proprietario,
    },
  };

  localStorage.setItem("dataJson", JSON.stringify(dataJson));
  console.log(dataJson);
}
