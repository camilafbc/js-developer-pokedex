import { pokeApi } from "./poke-api.js";
import { convertPokemonsToList } from "./convertPokemonsToList.js";
import { cardListeners } from "./modal.js";

// const searchBtn = document.getElementById("search-btn");
// const input = document.querySelector("input[name='search']");
const list = document.getElementById('listPokemons');


function realizarBusca(entrada) {
    // Verificar se a entrada é um número
    if (/^\d+$/.test(entrada)) {
        let format = parseInt(entrada)
        console.log(format)
        pokeApi.getPokemons(format - 1, 1).then((pokemonsList = []) => {

            const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))
    
            const newHtml = newList.join('')
    
            list.innerHTML = newHtml
    
            cardListeners()
        })
    } else {
        console.log("Não é número")
        pokeApi.getPokemonForName(entrada).then((Pokemon) => console.log(Pokemon))
        console.log(entrada)
        console.log(pokeApi.getPokemonForName(entrada).then(result))
    }
}

export { realizarBusca }