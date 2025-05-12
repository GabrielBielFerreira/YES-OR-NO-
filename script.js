document.getElementById('botao2').addEventListener('click', function () {
    const button = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

    const randomX = Math.random() * (containerRect.width - button.offsetWidth);
    const randomY = Math.random() * (containerRect.height - button.offsetHeight);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});