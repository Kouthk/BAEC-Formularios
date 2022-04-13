/* document.getElementById('salvar').addEventListener('click', function(){
    // cria um objeto com os valores dos campos
    var dados = { "rua": entrada.value, "bairro": entrada2.value };
    // puxa o localStorage para uma variável
    var ls = localStorage.getItem("infos");
 
    // verifica se o localStorage já existe
    if(ls){
       // converte o localStorage em array
       var json = JSON.parse(ls);
       // adiciona o objeto à array
       json.push(dados);
       // converte a array em string para salvar no localStorage
       json = JSON.stringify(json);
       // sobrescreve o localStorage com novos valores
       localStorage.setItem("infos", json);
    }else{
       // se não existe, cria com uma array convertida em string com os dados
       localStorage.setItem("infos", JSON.stringify([dados]));
    }
 
    // puxa novamente o localStorage atualizado em forma de array
    var ls_array = JSON.parse(localStorage.getItem("infos"));
 
    // cria uma string vazia
    var texto = '';
 
    // percorre a array do localStorage e alimenta a string vazia "texto"
    for(var item of ls_array){
       texto += "Rua: "+ item.rua +"<br>Bairro: "+ item.bairro +"<br><br>";
    }
 
    // insere o HTML em "texto" no <p>
    paragrafo.innerHTML = texto;
 
 }); */
