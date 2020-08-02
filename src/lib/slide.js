// Configuração do gilde.js

const config ={
    type:"carousel",
    perView: 3,
    breakpoints: {
        768: {
            perView: 1
        }
    }
}
new Glide('.glide', config).mount()

