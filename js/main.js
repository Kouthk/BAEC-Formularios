// Replace ./data.json with your JSON feed
fetch("../lista_cnae.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    new SlimSelect({
      select: "#select_CNAEs_atividadeEconomica",
      placeholder: "Selecione a atividade principal",
      searchPlaceholder: "Buscar:",
      data: data,
      limit: 1,
    });
    new SlimSelect({
      select: "#select_CNAEs_secundario_atividadeEconomica",
      placeholder: "Selecione as opções validas",
      searchPlaceholder: "Buscar:",
      data: data,
    });
  })
  .catch((err) => {
    // Do something for an error here
  });

$("#endereco_igual").change(function () {
  let optionValue = document.querySelector(
    'input[name="endrecoIgual_localizacao_das_atividades"]:checked'
  ).value;
  localStorage.setItem("endereco_igual", optionValue);

  if (optionValue === "1") {
    document.getElementById("endereco_correspondencia").classList.add("d-none");
  } else {
    document
      .getElementById("endereco_correspondencia")
      .classList.remove("d-none");
  }
});

//Mascaras de validação:
$("input[id*='id_cnpj_cpf_identificacao']").inputmask({
  mask: ["99.999.999/9999-99"],
});
$("input[id*='id_cpf_ou_cnpj_proprietario']").inputmask({
  mask: ["999.999.999-99", "99.999.999/9999-99"],
});

/* let dataLog = fetch("https://viacep.com.br/ws/78700300/json/").then(
  (response) => {
    console.log(response);
    return response.json();
  }
); */

document
  .getElementById("id_cep_localizacao_das_atividades")
  .addEventListener("focusout", function () {
    let cep = document.getElementById(
      "id_cep_localizacao_das_atividades"
    ).value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById(
          "id_logradouro_localizacao_das_atividades"
        ).value = data.logradouro;
        document.getElementById("id_bairro_localizacao_das_atividades").value =
          data.bairro;
        document.getElementById("id_cidade_localizacao_das_atividades").value =
          data.localidade;
        document.getElementById("id_uf_localizacao_das_atividades").value =
          data.uf;
        document.getElementById(
          "id_telefone_localizacao_das_atividades"
        ).value = data.ddd;
      });
  });

document
  .getElementById("id_cep_endereco_correspondencia")
  .addEventListener("focusout", function () {
    let cep = document.getElementById("id_cep_endereco_correspondencia").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById(
          "id_Logradouro_endereco_correspondencia"
        ).value = data.logradouro;
        document.getElementById("id_bairro_endereco_correspondencia").value =
          data.bairro;
        document.getElementById("id_cidade_endereco_correspondencia").value =
          data.localidade;
        document.getElementById("id_uf_endereco_correspondencia").value =
          data.uf;
      });
  });

document
  .getElementById("id_cep_proprietario")
  .addEventListener("focusout", function () {
    let cep = document.getElementById("id_cep_proprietario").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("id_logradouro_proprietario").value =
          data.logradouro;
        document.getElementById("id_bairro_proprietario").value = data.bairro;
        document.getElementById("id_cidade_proprietario").value =
          data.localidade;
        document.getElementById("id_uf_proprietario").value = data.uf;
      });
  });

/* $.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://www.receitaws.com.br/v1/cnpj/12153523000157",
  success: function (data) {
    console.log(data);
    
  },
}); */
document
  .getElementById("id_cnpj_cpf_identificacao")
  .addEventListener("focusout", function () {
    let cnpj = document.getElementById("id_cnpj_cpf_identificacao").value;
    cnpj = cnpj.replace(/[^\d]+/g, "");

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      url: `https://www.receitaws.com.br/v1/cnpj/${cnpj}`,
      success: function (data) {
        console.log(data);

        document.getElementById("id_nameFantasia_identificacao").value =
          data.fantasia;
        document.getElementById("id_nameRazaoSocial_identificacao").value =
          data.nome;
        document.getElementById("id_dataAbertura_identificacao").value =
          data.abertura;
        document.getElementById("id_email_identificacao").value = data.email;
        //Localização das atividades
        document.getElementById("id_cep_localizacao_das_atividades").value =
          data.cep.replace(/[^\d]+/g, "");
        document.getElementById(
          "id_logradouro_localizacao_das_atividades"
        ).value = data.logradouro;
        document.getElementById("id_numero_localizacao_das_atividades").value =
          data.numero;
        document.getElementById(
          "id_complementar_localizacao_das_atividades"
        ).value = data.complemento;
        document.getElementById("id_bairro_localizacao_das_atividades").value =
          data.bairro;
        document.getElementById("id_cidade_localizacao_das_atividades").value =
          data.municipio;
        document.getElementById("id_uf_localizacao_das_atividades").value =
          data.uf;
        document.getElementById(
          "id_telefone_localizacao_das_atividades"
        ).value = data.telefone;
      },
    });
  });
