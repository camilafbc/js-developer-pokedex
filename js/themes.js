// Função que permite a troca de tema pelo usuário e armazena a escolha para que se mantenha durante a navegação na página

const botao = document.getElementById('themeBtn')
const theme = window.localStorage.getItem('theme')

if(theme === 'is-dark-theme'){
    document.body.classList.add('is-dark-theme')
} else {
    document.body.classList.add('is-light-theme')
}

botao.addEventListener('click', () => {
    document.body.classList.toggle('is-dark-theme')

    if(theme === 'is-dark-theme'){
        window.localStorage.setItem('theme', 'is-light-theme')
    } else {
        window.localStorage.setItem('theme', 'is-dark-theme')
    }
})