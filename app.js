let listaDeNumeroSorteado= [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 50');
}
  mensagemInicial();

function verificarChute(){
    let chute = document.querySelector ('input').value;

   if(chute == numeroSecreto){
    exibirTexto('h1', 'Acertou!');
    let palavraTentativa = tentativas >1? 'tentativas':'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
    exibirTexto('p', `${mensagemTentativas}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else if (chute > numeroSecreto){
    exibirTexto('p',`O número secreto é menor que ${chute}`);
}else{
    exibirTexto('p',`O número secreto é maior que ${chute}`);
}
tentativas ++
limparCampo();
}
  function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
   let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
   if (quantidadeDeElementosNaLista== numeroLimite){listaDeNumeroSorteado = []};
   if (listaDeNumeroSorteado.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();}
    else {
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return numeroEscolhido;}
   }
function limparCampo() {
    chute=document.querySelector ('input');
    chute.value='';
    }
    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
      }