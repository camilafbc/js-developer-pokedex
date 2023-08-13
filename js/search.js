import { pokeApi } from "./poke-api.js";
import { convertPokemonsToList } from "./convertPokemonsToList.js";
import { cardListeners } from "./modal.js";

const list = document.getElementById('content');

const createBackBtn = (list) => {
    const back_btn = document.createElement("button");
    back_btn.className = "back-btn"
    back_btn.innerText = "VOLTAR"

    back_btn.addEventListener('click', () => {
        window.location.href = "https://camilafbc.github.io/js-developer-pokedex/index.html";
    })

    list.appendChild(back_btn)
}

function realizarBusca(entrada) {
    // Verifica se a entrada é um número
    if (/^\d+$/.test(entrada)) {
        let format = parseInt(entrada)
 
        pokeApi.getPokemons(format - 1, 1).then((pokemonsList = []) => {

            if(pokemonsList.length == 0){
                list.innerHTML = `
                    <div class="error-container">
                        <img src="assets/img/alert.svg" alt="triangulo com uma exclamação">
                        <div class="error-text">
                            <p>Pokemón não encontrado!</p>
                            <span></span>
                        </div>
                    </div>
                `
                createBackBtn(list)

            } else {
                const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))
                const newHtml = newList.join('')
                
                list.innerHTML = newHtml
                createBackBtn(list)
                cardListeners()
            }
        })

    } else {

        pokeApi.getPokemonForName(entrada.toLowerCase()).then((Pokemon) => {
            const newList = convertPokemonsToList(Pokemon)
    
            list.innerHTML = newList
            createBackBtn(list)
            cardListeners()

        }).catch((error) => {
            list.innerHTML = `
                <div class="error-container">
                    <img src="assets/img/alert.svg" alt="triangulo com uma exclamação">
                    <div class="error-text">
                        <p>Pokemón não encontrado!</p>
                        <span>${error}</span>
                    </div>
                </div>
            `
            createBackBtn(list)
        });
    }

    // Espera Carregar os elementos do DOM para poder estilizar o botão
    document.addEventListener("DOMContentLoaded", createBackBtn(list));
}

export { realizarBusca }