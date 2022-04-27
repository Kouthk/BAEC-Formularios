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
  data.identificacao.id_nameFantasia_identificacao;
document.getElementById("id_email_identificacao").innerHTML =
  data.identificacao.id_email_identificacao;
document.getElementById("id_obsRelevante_identificacao").innerHTML =
  data.identificacao.id_obsRelevante_identificacao;
// Atividade Econômica

document.getElementById("select_atividadeEconomica").innerHTML =
  data.atvEconomica.select_atividadeEconomica;
document.getElementById("select_CNAEs_atividadeEconomica").innerHTML =
  data.atvEconomica.select_CNAEs_atividadeEconomica;
document.getElementById(
  "select_CNAEs_secundario_atividadeEconomica"
).innerHTML = data.atvEconomica.select_CNAEs_secundario_atividadeEconomica;

//Endereço: Localização das atividades
document.getElementById("id_logradouro_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_logradouro_localizacao_das_atividades;
document.getElementById("id_numero_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_numero_localizacao_das_atividades;
document.getElementById("id_bairro_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_bairro_localizacao_das_atividades;
document.getElementById("id_cep_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_cep_localizacao_das_atividades;
document.getElementById(
  "id_complementar_localizacao_das_atividades"
).innerHTML =
  data.localizacao_das_atividades.id_complementar_localizacao_das_atividades;
document.getElementById("id_telefone_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_telefone_localizacao_das_atividades;
document.getElementById("id_cidade_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_cidade_localizacao_das_atividades;
document.getElementById("id_uf_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_uf_localizacao_das_atividades;
document.getElementById("endrecoIgual_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.endrecoIgual_localizacao_das_atividades;

//Endereço de Correspondencia e Cobrança
if (
  document.getElementById("endrecoIgual_localizacao_das_atividades") == "Sim"
) {
  document.getElementById("end_correspondencia").classList.add("d-none");
} else {
  document.getElementById("end_correspondencia").classList.remove("d-none");
}

document.getElementById("id_Logradouro_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_Logradouro_endereco_correspondencia;
document.getElementById("id_numero_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_numero_endereco_correspondencia;
document.getElementById("id_bairro_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_bairro_endereco_correspondencia;
document.getElementById("id_cep_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_cep_endereco_correspondencia;
document.getElementById("id_complemento_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_complemento_endereco_correspondencia;
document.getElementById("id_cidade_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_cidade_endereco_correspondencia;
document.getElementById("id_uf_endereco_correspondencia").innerHTML =
  data.endrecoCorrespondencia.id_uf_endereco_correspondencia;

//Proprietario
document.getElementById("id_nomeRazaoSocial_proprietario").innerHTML =
  data.proprietario.id_nomeRazaoSocial_proprietario;
document.getElementById("id_nome_mae_proprietario").innerHTML =
  data.proprietario.id_nome_mae_proprietario;
document.getElementById("id_data_nascimento_proprietario").innerHTML =
  data.proprietario.id_data_nascimento_proprietario;
document.getElementById("select_estado_civil_proprietario").innerHTML =
  data.proprietario.select_estado_civil_proprietario;
document.getElementById("id_cpf_ou_cnpj_proprietario").innerHTML =
  data.proprietario.id_cpf_ou_cnpj_proprietario;
document.getElementById("id_logradouro_proprietario").innerHTML =
  data.proprietario.id_logradouro_proprietario;
document.getElementById("id_num_da_rua_proprietario").innerHTML =
  data.proprietario.id_num_da_rua_proprietario;
document.getElementById("id_bairro_proprietario").innerHTML =
  data.proprietario.id_bairro_proprietario;
document.getElementById("id_complemento_proprietario").innerHTML =
  data.proprietario.id_complemento_proprietario;
document.getElementById("id_cidade_proprietario").innerHTML =
  data.proprietario.id_cidade_proprietario;
document.getElementById("id_uf_proprietario").innerHTML =
  data.proprietario.id_uf_proprietario;
document.getElementById("id_cep_proprietario").innerHTML =
  data.proprietario.id_cep_proprietario;
document.getElementById("id_email_proprietario").innerHTML =
  data.proprietario.id_email_proprietario;
document.getElementById("id_telefone_proprietario").innerHTML =
  data.proprietario.id_telefone_proprietario;

document
  .getElementById("id_obsRelevante_identificacao")
  .classList.add("text-justify");
