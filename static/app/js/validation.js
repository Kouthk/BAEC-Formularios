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
        console.log(event);
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          $("input:invalid").filter(":first").focus();
        }

        if (form.checkValidity()) {
          event.preventDefault();
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

  let id_cnpj_cpf_identificacao = document.getElementById(
    "id_cnpj_cpf_identificacao"
  ).value;
  let id_dataAbertura_identificacao = document.getElementById(
    "id_dataAbertura_identificacao"
  ).value;
  let id_nameRazaoSocial_identificacao = document.getElementById(
    "id_nameRazaoSocial_identificacao"
  ).value;
  let id_nameFantasia_identificacao = document.getElementById(
    "id_nameFantasia_identificacao"
  ).value;

  let id_email_identificacao = document.getElementById(
    "id_email_identificacao"
  ).value;

  let id_obsRelevante_identificacao = document.getElementById(
    "id_obsRelevante_identificacao"
  ).value;

  // Section Atividade economica:
  let select_atividadeEconomica = document.getElementById(
    "select_atividadeEconomica"
  ).value;

  let select_CNAEs_atividadeEconomica = document.getElementById(
    "select_CNAEs_atividadeEconomica"
  ).value;

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

  let id_numero_localizacao_das_atividades = document.getElementById(
    "id_numero_localizacao_das_atividades"
  ).value;

  let id_bairro_localizacao_das_atividades = document.getElementById(
    "id_bairro_localizacao_das_atividades"
  ).value;

  let id_complementar_localizacao_das_atividades = document.getElementById(
    "id_complementar_localizacao_das_atividades"
  ).value;

  let id_cep_localizacao_das_atividades = document.getElementById(
    "id_cep_localizacao_das_atividades"
  ).value;

  let id_telefone_localizacao_das_atividades = document.getElementById(
    "id_telefone_localizacao_das_atividades"
  ).value;

  let id_cidade_localizacao_das_atividades = document.getElementById(
    "id_cidade_localizacao_das_atividades"
  ).value;

  let id_uf_localizacao_das_atividades = document.getElementById(
    "id_uf_localizacao_das_atividades"
  ).value;

  // radio button endereço igual?

  let endrecoIgual_localizacao_das_atividades = document.querySelector(
    'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
  ).value;

  // Section endereço de correspondencia:
  let id_Logradouro_endereco_correspondencia = document.getElementById(
    "id_Logradouro_endereco_correspondencia"
  ).value;

  let id_numero_endereco_correspondencia = document.getElementById(
    "id_numero_endereco_correspondencia"
  ).value;

  let id_bairro_endereco_correspondencia = document.getElementById(
    "id_bairro_endereco_correspondencia"
  ).value;

  let id_complemento_endereco_correspondencia = document.getElementById(
    "id_complemento_endereco_correspondencia"
  ).value;

  let id_cep_endereco_correspondencia = document.getElementById(
    "id_cep_endereco_correspondencia"
  ).value;

  let id_cidade_endereco_correspondencia = document.getElementById(
    "id_cidade_endereco_correspondencia"
  ).value;

  let id_uf_endereco_correspondencia = document.getElementById(
    "id_uf_endereco_correspondencia"
  ).value;

  //Section proprietário:
  let id_nomeRazaoSocial_proprietario = document.getElementById(
    "id_nomeRazaoSocial_proprietario"
  ).value;

  let id_nome_mae_proprietario = document.getElementById(
    "id_nome_mae_proprietario"
  ).value;

  let select_estado_civil_proprietario = document.getElementById(
    "select_estado_civil_proprietario"
  ).value;

  let id_data_nascimento_proprietario = document.getElementById(
    "id_data_nascimento_proprietario"
  ).value;

  let id_cpf_ou_cnpj_proprietario = document.getElementById(
    "id_cpf_ou_cnpj_proprietario"
  ).value;

  let id_email_proprietario = document.getElementById(
    "id_email_proprietario"
  ).value;

  let id_logradouro_proprietario = document.getElementById(
    "id_logradouro_proprietario"
  ).value;

  let id_num_da_rua_proprietario = document.getElementById(
    "id_num_da_rua_proprietario"
  ).value;

  let id_bairro_proprietario = document.getElementById(
    "id_bairro_proprietario"
  ).value;

  let id_cidade_proprietario = document.getElementById(
    "id_cidade_proprietario"
  ).value;

  let id_uf_proprietario = document.getElementById("id_uf_proprietario").value;
  

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
}
