import { pokeApi } from "./poke-api.js";
import { convertPokemonsToList } from "./convertPokemonsToList.js";
import { cardListeners } from "./modal.js";

const list = document.getElementById('content')

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
            } else {

            const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))
    
            const newHtml = newList.join('')
    
            list.innerHTML = newHtml
    
            cardListeners()
            
            }
        })

    } else {

        pokeApi.getPokemonForName(entrada.toLowerCase()).then((Pokemon) => {
            const newList = convertPokemonsToList(Pokemon)
    
            list.innerHTML = newList
    
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
        });
    }
}

export { realizarBusca }