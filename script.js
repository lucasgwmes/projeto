function toggleMode() {
const html = document.documentElement
html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")
    
    // subistituir a imagem
    if (html.classList.contains('light')) {
        // se tiver ligth mode, adicionar a imagem ligth
  img.setAttribute('src', './assets/avatar-light.png')
  img.serAttribute('alt', 'imagem do lucas com camiseta preta sorrindo e fundo de parede preto com um pedaço de um quadro')
    }   else {
        // se tiver sem ligth mode manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'imagem do lucas com camiseta vermelha sorrindo')
   }


   
}




