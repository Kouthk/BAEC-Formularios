let getData = localStorage.getItem("dataJson_ProfissionalLiberal");
let data = JSON.parse(getData);
console.log(data)


//Profissional Liberal
document.getElementById("tipoDeRequisicao").innerHTML =
  data.tipoDeRequisicao.tipoRequisiçaoDoc;
document.getElementById("id_cpf_ou_cnpj_proprietario").innerHTML =
  data.ProfissionalLiberal.id_cpf_ou_cnpj_proprietario;
document.getElementById("id_nomeRazaoSocial_proprietario").innerHTML =
  data.ProfissionalLiberal.id_nomeRazaoSocial_proprietario;
document.getElementById("id_nome_mae_proprietario").innerHTML =
  data.ProfissionalLiberal.id_nome_mae_proprietario;
document.getElementById("id_email_proprietario").innerHTML =
  data.ProfissionalLiberal.id_email_proprietario;
document.getElementById("id_telefone_proprietario").innerHTML =
  data.ProfissionalLiberal.id_telefone_proprietario;
document.getElementById("id_telefone_celular_proprietario").innerHTML =
  data.ProfissionalLiberal.id_telefone_celular_proprietario
document.getElementById("id_data_nascimento_proprietario").innerHTML =
  data.ProfissionalLiberal.id_data_nascimento_proprietario;
document.getElementById("select_estado_civil_proprietario").innerHTML =
  data.ProfissionalLiberal.select_estado_civil_proprietario;
// Atividade Econômica
document.getElementById("select_CNAEs_atividadeEconomica").innerHTML =
  data.atvEconomica.select_CNAEs_atividadeEconomica;

//Endereço: Localização das atividades
document.getElementById("id_inscricao_municipal").innerHTML = data.localizacao_das_atividades.id_inscricao_municipal;
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
document.getElementById("id_cidade_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_cidade_localizacao_das_atividades;
document.getElementById("id_uf_localizacao_das_atividades").innerHTML =
  data.localizacao_das_atividades.id_uf_localizacao_das_atividades;

if (data.localizacao_das_atividades.endrecoIgual_localizacao_das_atividades != "Sim") {
  document.getElementById("end_correspondencia").classList.remove("d-none");
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
}