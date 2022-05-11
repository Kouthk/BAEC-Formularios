let select0 = new SlimSelect({
  select: "#select_atividadeEconomica",
  placeholder: "Selecione a atividade principal",
  searchPlaceholder: "Buscar:",
  limit: 1,
});
fetch("../json/natureza_juridica.json")
  .then((e) => e.json())
  .then((e) => {
    select0.setData(e);
  })
  .catch((e) => {
    console.log(e);
  });
let select1 = new SlimSelect({
    select: "#select_CNAEs_atividadeEconomica",
    placeholder: "Selecione a atividade principal",
    searchPlaceholder: "Buscar:",
    limit: 1,
  }),
  select2 = new SlimSelect({
    select: "#select_CNAEs_secundario_atividadeEconomica",
    placeholder: "Selecione as opções validas",
    searchPlaceholder: "Buscar:",
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
        d = 0;
      e
        .split(/(?=)/)
        .splice(0, t)
        .forEach(function (e, a) {
          d += parseInt(e) * (t + 2 - (a + 1));
        }),
        (o = (o = d % 11) < 2 ? 0 : 11 - o) != e.substring(t, t + 1) &&
          (a = !1);
    }),
    a
  );
}
// Atividade economica
fetch("../json/lista_cnae.json")
  .then((e) => e.json())
  .then((e) => {
    select1.setData(e), select2.setData(e);
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
  $("input[id*='id_cnpj_cpf_identificacao']").inputmask({
    mask: ["99.999.999/9999-99"],
  }),
  $("input[id*='id_cpf_ou_cnpj_proprietario']").inputmask({
    mask: ["999.999.999-99"],
  }),
  $("input[id*='id_telefone_localizacao_das_atividades']").inputmask({
    mask: ["(99) 9999-9999", "(99) 99999-9999"],
  }),
  document
    .getElementById("id_cep_localizacao_das_atividades")
    .addEventListener("focusout", function () {
      let e = document.getElementById(
        "id_cep_localizacao_das_atividades"
      ).value;
      fetch(`https://viacep.com.br/ws/${e}/json/`)
        .then((e) => e.json())
        .then((e) => {
          console.log(e),
            (document.getElementById(
              "id_logradouro_localizacao_das_atividades"
            ).value = e.logradouro),
            (document.getElementById(
              "id_bairro_localizacao_das_atividades"
            ).value = e.bairro),
            (document.getElementById(
              "id_cidade_localizacao_das_atividades"
            ).value = e.localidade),
            (document.getElementById("id_uf_localizacao_das_atividades").value =
              e.uf),
            (document.getElementById(
              "id_telefone_localizacao_das_atividades"
            ).value = e.ddd);
        });
    }),
  document
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
    .getElementById("id_cep_proprietario")
    .addEventListener("focusout", function () {
      let e = document.getElementById("id_cep_proprietario").value;
      fetch(`https://viacep.com.br/ws/${e}/json/`)
        .then((e) => (console.log(e), e.json()))
        .then((e) => {
          console.log(e),
            (document.getElementById("id_logradouro_proprietario").value =
              e.logradouro),
            (document.getElementById("id_bairro_proprietario").value =
              e.bairro),
            (document.getElementById("id_cidade_proprietario").value =
              e.localidade),
            (document.getElementById("id_uf_proprietario").value = e.uf);
        });
    }),
  document
    .getElementById("id_cnpj_cpf_identificacao")
    .addEventListener("focusout", function () {
      let e = document.getElementById("id_cnpj_cpf_identificacao").value;
      is_cnpj(e)
        ? ((e = e.replace(/[^\d]+/g, "")),
          $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: `https://www.receitaws.com.br/v1/cnpj/${e}`,
            success: function (e) {
              (document.getElementById("id_nameFantasia_identificacao").value =
                e.fantasia),
                (document.getElementById(
                  "id_nameRazaoSocial_identificacao"
                ).value = e.nome),
                (document.getElementById(
                  "id_dataAbertura_identificacao"
                ).value = e.abertura),
                (document.getElementById("id_email_identificacao").value =
                  e.email),
                (document.getElementById(
                  "id_cep_localizacao_das_atividades"
                ).value = e.cep.replace(/[^\d]+/g, "")),
                (document.getElementById(
                  "id_logradouro_localizacao_das_atividades"
                ).value = e.logradouro),
                (document.getElementById(
                  "id_numero_localizacao_das_atividades"
                ).value = e.numero),
                (document.getElementById(
                  "id_complementar_localizacao_das_atividades"
                ).value = e.complemento),
                (document.getElementById(
                  "id_bairro_localizacao_das_atividades"
                ).value = e.bairro),
                (document.getElementById(
                  "id_cidade_localizacao_das_atividades"
                ).value = e.municipio),
                (document.getElementById(
                  "id_uf_localizacao_das_atividades"
                ).value = e.uf),
                (document.getElementById(
                  "id_telefone_localizacao_das_atividades"
                ).value = e.telefone),
                select0.set(e.natureza_juridica),
                select1.set([
                  e.atividade_principal[0].code.replace(/[^\d]+/g, "") +
                    " - " +
                    e.atividade_principal[0].text,
                ]);
              let a = [];
              for (let t = 0; t < e.atividades_secundarias.length; t++)
                a.push(
                  e.atividades_secundarias[t].code.replace(/[^\d]+/g, "") +
                    " - " +
                    e.atividades_secundarias[t].text
                );
              select2.set(a);
            },
          }))
        : (alert(
            " O CNPJ:" +
              e +
              " é inválido. Limparemos o campo para que vocÊ digite novamente."
          ),
          (document.getElementById("id_cnpj_cpf_identificacao").value = ""));
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
    });
