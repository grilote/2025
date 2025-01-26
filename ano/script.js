/**
 * Ano automático
 * @author Luiz Fernando
 */
//inserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')
let anoAtual= new Date().getFullYear()
ano.innerHTML = anoAtual