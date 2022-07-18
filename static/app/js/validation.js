function saveLocalStorage() {
  let e = document.querySelector(
    'input[name="tipoRequisiçaoDoc"]:checked'
  ).value;
  console.log(e);
  var a = {
    tipoDeRequisicao: {
      tipoRequisiçaoDoc: e
    },
    atvEconomica: {
      select_CNAEs_atividadeEconomica: document.getElementById(
        "select_CNAEs_atividadeEconomica"
      ).value,
    },
    localizacao_das_atividades: {
      id_inscricao_municipal: document.getElementById(
        "id_inscricao_municipal").value,
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
    ProfissionalLiberal: {
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
      id_telefone_proprietario: document.getElementById("id_telefone_proprietario").value,
      id_telefone_celular_proprietario: document.getElementById(
        "id_telefone_celular_proprietario"
      ).value,
    },
    endrecoCorrespondencia: {
      id_Logradouro_endereco_correspondencia: document.getElementById("id_Logradouro_endereco_correspondencia").value,
      id_numero_endereco_correspondencia: document.getElementById("id_numero_endereco_correspondencia").value,
      id_bairro_endereco_correspondencia: document.getElementById("id_bairro_endereco_correspondencia").value,
      id_complemento_endereco_correspondencia: document.getElementById("id_complemento_endereco_correspondencia").value,
      id_cep_endereco_correspondencia: document.getElementById("id_cep_endereco_correspondencia").value,
      id_cidade_endereco_correspondencia: document.getElementById("id_cidade_endereco_correspondencia").value,
      id_uf_endereco_correspondencia: document.getElementById("id_uf_endereco_correspondencia").value,
    }
  };
  localStorage.setItem("dataJson_ProfissionalLiberal", JSON.stringify(a));
} !(function () {
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

let select1 = new SlimSelect({
  select: "#select_CNAEs_atividadeEconomica",
  placeholder: "Selecione a atividade principal",
  searchPlaceholder: "Buscar:",
  limit: 1,
});
function is_cnpj(e) {
  if ("" == (e = e.replace(/[^\d]+/g, ""))) return !1;
  if (14 != e.length) return !1;
  if (
    "00000000000000" == e ||
    "11111111111111" == e ||
    "22222222222222" == e ||
    "33333333333333" == e ||
    "44444444444444" == e ||
    "55555555555555" == e ||
    "66666666666666" == e ||
    "77777777777777" == e ||
    "88888888888888" == e ||
    "99999999999999" == e
  )
    return !1;
  for (
    tamanho = e.length - 2,
    numeros = e.substring(0, tamanho),
    digitos = e.substring(tamanho),
    soma = 0,
    pos = tamanho - 7,
    i = tamanho;
    i >= 1;
    i--
  )
    (soma += numeros.charAt(tamanho - i) * pos--), pos < 2 && (pos = 9);
  if (
    ((resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)),
      resultado != digitos.charAt(0))
  )
    return !1;
  for (
    tamanho += 1,
    numeros = e.substring(0, tamanho),
    soma = 0,
    pos = tamanho - 7,
    i = tamanho;
    i >= 1;
    i--
  )
    (soma += numeros.charAt(tamanho - i) * pos--), pos < 2 && (pos = 9);
  return (
    (resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)),
    resultado == digitos.charAt(1)
  );
}
function isCPF(e) {
  if (
    11 != (e = e.replace(/\D/g, "")).toString().length ||
    /^(\d)\1{10}$/.test(e)
  )
    return !1;
  var a = !0;
  return (
    [9, 10].forEach(function (t) {
      var o,
        i = 0;
      e
        .split(/(?=)/)
        .splice(0, t)
        .forEach(function (e, a) {
          i += parseInt(e) * (t + 2 - (a + 1));
        }),
        (o = (o = i % 11) < 2 ? 0 : 11 - o) != e.substring(t, t + 1) &&
        (a = !1);
    }),
    a
  );
}
fetch("../static/app/json/lista_cnae.json")
  .then((e) => e.json())
  .then((e) => {
    select1.setData(e);
  })
  .catch((e) => {
    console.log(e);
  }),
  $("#endereco_igual").change(function () {
    let e = document.querySelector(
      'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
    ).value;
    localStorage.setItem("endereco_igual", e),
      "1" === e
        ? document
          .getElementById("endereco_correspondencia")
          .classList.add("d-none")
        : document
          .getElementById("endereco_correspondencia")
          .classList.remove("d-none");
  }),
  document
    .getElementById("id_inscricao_municipal")
    .addEventListener("focusout", function () {
      let e = document.getElementById(
        "id_inscricao_municipal"
      ).value;
      fetch(`http://192.168.0.220:3001/imovel/validar/${e}`).then((e) => e.json())
        .then((e) => {
          console.log(e)
            ,
            (document.getElementById(
              "id_logradouro_localizacao_das_atividades"
            ).value = e.logradouro.endereco),
            (document.getElementById("id_cep_localizacao_das_atividades").value = e.logradouro.cep),
            (document.getElementById("id_numero_localizacao_das_atividades").value = e.numero),
            (document.getElementById(
              "id_bairro_localizacao_das_atividades"
            ).value = e.logradouro.bairro.nome),
            (document.getElementById("id_complementar_localizacao_das_atividades").value = e.complemento),
            (document.getElementById(
              "id_cidade_localizacao_das_atividades"
            ).value = e.logradouro.bairro.cidade.nome),
            (document.getElementById("id_uf_localizacao_das_atividades").value =
              e.logradouro.bairro.cidade.estado.uf),
            (document.getElementById(
              "id_telefone_localizacao_das_atividades"
            ).value = "66");
        });
    }), document
      .getElementById("id_cep_endereco_correspondencia")
      .addEventListener("focusout", function () {
        let e = document.getElementById("id_cep_endereco_correspondencia").value;
        fetch(`https://viacep.com.br/ws/${e}/json/`)
          .then((e) => e.json())
          .then((e) => {
            console.log(e),
              (document.getElementById(
                "id_Logradouro_endereco_correspondencia"
              ).value = e.logradouro),
              (document.getElementById(
                "id_bairro_endereco_correspondencia"
              ).value = e.bairro),
              (document.getElementById(
                "id_cidade_endereco_correspondencia"
              ).value = e.localidade),
              (document.getElementById("id_uf_endereco_correspondencia").value =
                e.uf);
          });
      }),
  document
    .getElementById("id_cpf_ou_cnpj_proprietario")
    .addEventListener("focusout", function () {
      let e = document.getElementById("id_cpf_ou_cnpj_proprietario").value;
      isCPF(e) ||
        (alert(
          " O CPF:" +
          e +
          " é inválido. Limparemos o campo para que você digite novamente."
        ),
          (document.getElementById("id_cpf_ou_cnpj_proprietario").value = ""));
    }),

  $("#endereco_igual").change(function () {
    let optionValue = document.querySelector(
      'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
    ).value;
    localStorage.setItem("endereco_igual", optionValue);

    if (optionValue === "Sim") {
      document.getElementById("endereco_correspondencia").classList.add("d-none");
    } else {
      document.getElementById("endereco_correspondencia").classList.remove("d-none");
    }
  });

$("#typeRequestDoc").change(function () {
  let optionValue = document.querySelector(
    'input[name="tipoRequisiçaoDoc"]:checked'
  ).value;
  if (optionValue === "CADASTRAMENTO") {
    document.getElementById("cadastroUsoDeSolo").classList.remove("d-none");
    document.getElementById("alteracaoUsoDeSolo").classList.add("d-none");
    let op = document.querySelector('input[name="possui_Certidao"]:checked').value
    disableInputs(!op)
  } else if (optionValue === "ALTERAÇÃO") {
    document.getElementById("cadastroUsoDeSolo").classList.add("d-none");
    document.getElementById("alteracaoUsoDeSolo").classList.remove("d-none");
    let op = document.querySelector('input[name="alteracao"]:checked').value
    disableInputs(!op)
  } else {
    document.getElementById("cadastroUsoDeSolo").classList.add("d-none");
    document.getElementById("alteracaoUsoDeSolo").classList.add("d-none");
    disableInputs(false)
  }
});

function disableInputs(status) {
  document.querySelectorAll(".disabled-input-for-js").forEach(item => {
    item.disabled = status;
  })
}

$("#select_cadastroUsoDeSolo").change(function () {
  let op = document.querySelector('input[name="possui_Certidao"]:checked').value
  disableInputs(!op)
})


$("#select_alteracao").change(function () {
  let op = document.querySelector('input[name="alteracao"]:checked').value
  disableInputs(!op)
})

