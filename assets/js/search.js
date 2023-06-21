import { pokeApi } from "./poke-api.js";
import { convertPokemonsToList } from "./convertPokemonsToList.js";
import { cardListeners } from "./modal.js";

const list = document.getElementById('listPokemons');

function realizarBusca(entrada) {
    // Verifica se a entrada é um número
    if (/^\d+$/.test(entrada)) {
        let format = parseInt(entrada)
 
        pokeApi.getPokemons(format - 1, 1).then((pokemonsList = []) => {

            const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))
    
            const newHtml = newList.join('')
    
            list.innerHTML = newHtml
    
            cardListeners()
        })
    } else {

        pokeApi.getPokemonForName(entrada).then((Pokemon) => {
            const newList = convertPokemonsToList(Pokemon)
    
            list.innerHTML = newList
    
            cardListeners()
        })
    }
}

export { realizarBusca }