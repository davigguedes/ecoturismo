const inicial = document.querySelector('#inicial');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Distância rolada
    const maxScroll = 700; // Altura máxima para desaparecer

    // Calcula a opacidade com base na rolagem
    const opacity = Math.max(0, 1 - scrollTop / maxScroll);
    inicial.style.opacity = opacity;
});