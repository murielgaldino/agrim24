// Função para controlar exibição do botão "Back to Top" com scroll
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopButton = document.querySelector("#back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Função para rolar até o topo da página
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Delegação de eventos para os botões das redes sociais
document.addEventListener('click', function(event) {
    if (event.target.matches('#fecebook')) {
        window.location.href = 'https://www.facebook.com/muriel.ribeiro.75/about';
    } else if (event.target.matches('#instagram')) {
        window.location.href = 'https://www.instagram.com/muriel.god/';
    } else if (event.target.matches('#linkedin')) {
        window.location.href = 'https://www.linkedin.com/in/muriel-r-galdino-0147b6224/';
    }
});

const fish = document.querySelector('.fish');

fish.addEventListener('mouseover', () => {
  fish.style.animationPlayState = 'paused';
});

fish.addEventListener('mouseout', () => {
  fish.style.animationPlayState = 'running';
});
