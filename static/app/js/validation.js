function saveLocalStorage() {
  let e = document.querySelector(
    'input[name="tipoRequisiçaoDoc"]:checked'
  ).value;
  console.log(e);
  var a = {
    tipoDeRequisicao: { tipoRequisiçaoDoc: e },
    identificacao: {
      tipoContribuinte: document.querySelector(
        'input[name="tipoContribuinte"]:checked'
      ).value,
      id_cnpj_cpf_identificacao: document.getElementById(
        "id_cnpj_cpf_identificacao"
      ).value,
      id_dataAbertura_identificacao: document.getElementById(
        "id_dataAbertura_identificacao"
      ).value,
      id_nameRazaoSocial_identificacao: document.getElementById(
        "id_nameRazaoSocial_identificacao"
      ).value,
      id_nameFantasia_identificacao: document.getElementById(
        "id_nameFantasia_identificacao"
      ).value,
      id_email_identificacao: document.getElementById("id_email_identificacao")
        .value,
      id_obsRelevante_identificacao: document.getElementById(
        "id_obsRelevante_identificacao"
      ).value,
    },
    atvEconomica: {
      select_atividadeEconomica: document.getElementById(
        "select_atividadeEconomica"
      ).value,
      select_CNAEs_atividadeEconomica: document.getElementById(
        "select_CNAEs_atividadeEconomica"
      ).value,
      select_CNAEs_secundario_atividadeEconomica: [
        ...document.getElementById("select_CNAEs_secundario_atividadeEconomica")
          .selectedOptions,
      ].map((e) => e.value),
    },
    localizacao_das_atividades: {
      id_logradouro_localizacao_das_atividades: document.getElementById(
        "id_logradouro_localizacao_das_atividades"
      ).value,
      id_numero_localizacao_das_atividades: document.getElementById(
        "id_numero_localizacao_das_atividades"
      ).value,
      id_bairro_localizacao_das_atividades: document.getElementById(
        "id_bairro_localizacao_das_atividades"
      ).value,
      id_complementar_localizacao_das_atividades: document.getElementById(
        "id_complementar_localizacao_das_atividades"
      ).value,
      id_cep_localizacao_das_atividades: document.getElementById(
        "id_cep_localizacao_das_atividades"
      ).value,
      id_telefone_localizacao_das_atividades: document.getElementById(
        "id_telefone_localizacao_das_atividades"
      ).value,
      id_cidade_localizacao_das_atividades: document.getElementById(
        "id_cidade_localizacao_das_atividades"
      ).value,
      id_uf_localizacao_das_atividades: document.getElementById(
        "id_uf_localizacao_das_atividades"
      ).value,
      endrecoIgual_localizacao_das_atividades: document.querySelector(
        'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
      ).value,
    },
    endrecoCorrespondencia: {
      id_Logradouro_endereco_correspondencia: document.getElementById(
        "id_Logradouro_endereco_correspondencia"
      ).value,
      id_numero_endereco_correspondencia: document.getElementById(
        "id_numero_endereco_correspondencia"
      ).value,
      id_bairro_endereco_correspondencia: document.getElementById(
        "id_bairro_endereco_correspondencia"
      ).value,
      id_complemento_endereco_correspondencia: document.getElementById(
        "id_complemento_endereco_correspondencia"
      ).value,
      id_cep_endereco_correspondencia: document.getElementById(
        "id_cep_endereco_correspondencia"
      ).value,
      id_cidade_endereco_correspondencia: document.getElementById(
        "id_cidade_endereco_correspondencia"
      ).value,
      id_uf_endereco_correspondencia: document.getElementById(
        "id_uf_endereco_correspondencia"
      ).value,
    },
    proprietario: {
      id_nomeRazaoSocial_proprietario: document.getElementById(
        "id_nomeRazaoSocial_proprietario"
      ).value,
      id_nome_mae_proprietario: document.getElementById(
        "id_nome_mae_proprietario"
      ).value,
      select_estado_civil_proprietario: document.getElementById(
        "select_estado_civil_proprietario"
      ).value,
      id_data_nascimento_proprietario: document.getElementById(
        "id_data_nascimento_proprietario"
      ).value,
      id_cpf_ou_cnpj_proprietario: document.getElementById(
        "id_cpf_ou_cnpj_proprietario"
      ).value,
      id_email_proprietario: document.getElementById("id_email_proprietario")
        .value,
      id_logradouro_proprietario: document.getElementById(
        "id_logradouro_proprietario"
      ).value,
      id_num_da_rua_proprietario: document.getElementById(
        "id_num_da_rua_proprietario"
      ).value,
      id_bairro_proprietario: document.getElementById("id_bairro_proprietario")
        .value,
      id_cidade_proprietario: document.getElementById("id_cidade_proprietario")
        .value,
      id_uf_proprietario: document.getElementById("id_uf_proprietario").value,
      id_complemento_proprietario: document.getElementById(
        "id_complemento_proprietario"
      ).value,
      id_cep_proprietario: document.getElementById("id_cep_proprietario").value,
      id_telefone_proprietario: document.getElementById(
        "id_telefone_proprietario"
      ).value,
      id_telefone_celular_proprietario: document.getElementById(
        "id_telefone_celular_proprietario"
      ).value,
    },
  };
  localStorage.setItem("dataJson", JSON.stringify(a));
}
!(function () {
  "use strict";
  var e = document.querySelectorAll(".needs-validation");
  console.log(e),
    Array.prototype.slice.call(e).forEach(function (e) {
      e.addEventListener(
        "submit",
        function (a) {
          console.log(a),
            e.checkValidity() ||
              (a.preventDefault(),
              a.stopPropagation(),
              $("input:invalid").filter(":first").focus()),
            e.checkValidity() &&
              (a.preventDefault(),
              saveLocalStorage(),
              (location.href = "../../../templates/documento_gerado.html")),
            e.classList.add("was-validated");
        },
        !1
      );
    }),
    console.log("ola");
})();
