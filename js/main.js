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
  mask: ["999.999.999-99", "99.999.999/9999-99"],
  keepStatic: true,
});
$("input[id*='id_cpf_ou_cnpj_proprietario']").inputmask({
  mask: ["999.999.999-99", "99.999.999/9999-99"],
  keepStatic: true,
});
