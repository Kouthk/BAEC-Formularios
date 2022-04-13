let getData = localStorage.getItem("dataJson");
let data = JSON.parse(getData);
console.log(data);

document.getElementById("tipoDeRequisicao").innerHTML =
  data.tipoDeRequisicao.tipoRequisiçaoDoc;
document.getElementById("id_cnpj_cpf_identificacao").innerHTML =
  data.identificacao.id_cnpj_cpf_identificacao;
document.getElementById("id_dataAbertura_identificacao").innerHTML =
  data.identificacao.id_dataAbertura_identificacao;
document.getElementById("id_rg_identificacao").innerHTML =
  data.identificacao.id_rg_identificacao;
document.getElementById("id_rjcCartorio_identificacao").innerHTML =
  data.identificacao.id_rjcCartorio_identificacao;
document.getElementById("id_dataResgistro_identificacao").innerHTML =
  data.identificacao.id_dataResgistro_identificacao;
document.getElementById("id_dataResgistro_identificacao").innerHTML =
  data.identificacao.id_dataResgistro_identificacao;
document.getElementById("id_nameRazaoSocial_identificacao").innerHTML =
  data.identificacao.id_nameRazaoSocial_identificacao;
