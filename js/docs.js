let getData = localStorage.getItem("dataJson");
let data = JSON.parse(getData);
console.log(data);

document.getElementById("tipoDeRequisicao").innerHTML =
  data.tipoDeRequisicao.tipoRequisiçaoDoc;
document.getElementById("tipoContribuinte").innerHTML =
  data.identificacao.tipoContribuinte;
document.getElementById("id_cnpj_cpf_identificacao").innerHTML =
  data.identificacao.id_cnpj_cpf_identificacao;
document.getElementById("id_dataAbertura_identificacao").innerHTML =
  data.identificacao.id_dataAbertura_identificacao;
document.getElementById("id_nameRazaoSocial_identificacao").innerHTML =
  data.identificacao.id_nameRazaoSocial_identificacao;
document.getElementById("id_nomeFantasia_identificacao").innerHTML =
  data.identificacao.id_nomeFantasia_identificacao;
document.getElementById("id_email_identificacao").innerHTML =
  data.identificacao.id_email_identificacao;
document.getElementById("id_obsRelevante_identificacao").innerHTML =
  data.identificacao.id_obsRelevante_identificacao;
// Atividade Econômica

document.getElementById("select_atividadeEconomica").innerHTML = data.atvEconomica.select_atividadeEconomica;
document.getElementById("select_CNAEs_atividadeEconomica").innerHTML = data.atvEconomica.select_CNAEs_atividadeEconomica;
document.getElementById("select_CNAEs_secundario_atividadeEconomica").innerHTML = data.atvEconomica.select_CNAEs_secundario_atividadeEconomica; 

//Endereço: Localização das atividades
document.getElementById("id_logradouro_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_logradouro_localizacao_das_atividades; 
document.getElementById("id_numero_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_numero_localizacao_das_atividades; 
document.getElementById("id_bairro_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_bairro_localizacao_das_atividades;
document.getElementById("id_cep_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_cep_localizacao_das_atividades;
document.getElementById("id_complementar_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_complementar_localizacao_das_atividades;
document.getElementById("id_telefone_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_telefone_localizacao_das_atividades;
document.getElementById("id_cidade_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_cidade_localizacao_das_atividades;
document.getElementById("id_uf_localizacao_das_atividades").innerHTML = data.localizacao_das_atividades.id_uf_localizacao_das_atividades;
