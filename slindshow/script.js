/**
 * Slide show
 * @author  Luiz Fernando.
 */

//array(vetor) de imagens
//              [0]             [1]             [2]
let slides = ["banner1.jpg", "banner2.jpg", "banner3.jpg"]
let intervalo = 3000 //(3000ms = 3s (1s por imagem))
let indice = 0 // apoio a lógica (indice do array)


// Função para troca das imagens
function show() {
    // capturar o id do banner
    const slide = document.getElementById('slide')
    
    // Efeito de entrada
    // A estruta a baixo verifica se foi atribuída a classes('.slideOut') ao identificador (#slide)
    if(slide.classList.contains('slideOut')){
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    //troca de imagem
    //temporizador (nativo do JS)
    setTimeout(() => {
        //soma 1 ao indice do vetor
        indice++
        //se o último slide do vetor for atingido, voltar para o 0
        if(indice >= slide.length){
            indice = 0
        }
        //substituir a imagem no documentohtml pela próxima imagem do vetor (img/slides[0] img/slides[1] img/slides[2])
        slide.src = `img/${slides[indice]}`
    },1000) //ajuste(sincronizar com o css)

    //Efeito de saída
    if(slide.classList.contains('slideIn')){
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    //Intervalo para próxima execução (loop infinito)
    setTimeout(show, intervalo)
}

//executar a função ao iniciar o documento js
show()