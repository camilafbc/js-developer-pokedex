
import { pokeApi } from "./poke-api.js";
import { convertPokemonsToList } from "./convertPokemonsToList.js";
import { cardListeners } from "./modal.js";
import { realizarBusca } from "./search.js";


const list = document.getElementById('listPokemons');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const limit = 20
let offset = 0
const maxRecord = 300

// Adiciona listener aos cards carregados no DOM
document.addEventListener('DOMContentLoaded', () => {
    cardListeners()
  });

// Gera a lista de pokemons/cards 
function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {

        const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))

        const newHtml = newList.join('')

        list.innerHTML += newHtml

        cardListeners()
    })
}

loadPokemonItems(offset, limit)

// Barra de Pesquisa
const searchBtn = document.getElementById("search-btn")
const entrada = document.querySelector("input[name='search']")

searchBtn.addEventListener('click', () => {
    // let entr = Number(entrada.value) - 1
    realizarBusca(entrada.value)
    
})

// Paginação

loadMoreBtn.addEventListener('click', () => {
    offset += limit
    const qntRecordNextPage = offset + limit
    if (qntRecordNextPage >= maxRecord){
        const newLimit = maxRecord - offset
        loadPokemonItems(offset,newLimit)
        loadMoreBtn.parentElement.removeChild(loadMoreBtn)
    } else{
    loadPokemonItems (offset,limit)
    }
})


