/*Criar a lista de imagens*/
let imagens = [
    'assets/img/bolo-capa-1.jpg',
    'assets/img/bolo-capa-2.jpg',
    'assets/img/bolo-capa-3.jpg'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

/*Lógica para exibir as imagens*/
/*Cada 5 segundos*/
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    if(indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
}, 5000);

 exibirImagem()
indiceAtualListaImagens++