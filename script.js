// Mover a seção de biografia abaixo do título
const header = document.querySelector('header');
const bio = document.querySelector('.bio');

if (header && bio) {
    header.insertAdjacentElement('afterend', bio);
} else {
    console.error('Elemento <header> ou elemento com classe "bio" não encontrado.');
}

// Configurar os botões na parte inferior
const nav = document.createElement('nav');
// Adicione aqui o conteúdo dos botões que deseja na navegação.

const body = document.querySelector('body');

if (nav && body) {
    body.appendChild(nav);
} else {
    console.error('Elemento <nav> ou <body> não encontrado.');
}
