
const list = document.getElementById('listPokemons')
const loadMoreBtn = document.getElementById('loadMoreBtn')
const limit = 20
let offset = 0
const maxRecord = 300

function convertPokemonsToList(pokemon){
   return `
   <a href="details.html?id=${pokemon.number}" id="goToDetail">
            <li id="goToDetail" class="pokemon ${pokemon.type}" >
                <div class="pokemon-card" id="${pokemon.number}">  
                    <span class="pokemon-card-number ${pokemon.type}">#0${pokemon.number}</span>
                    <img src=${pokemon.image} alt="${pokemon.name}" class="pokemon-card-img">
                    <span class="pokemon-card-name ${pokemon.type}">${pokemon.name}</span>  
                </div>
            </li>
    </a>`
    
}

    
function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {

        const newList = pokemonsList.map((pokemon) => convertPokemonsToList(pokemon))

        const newHtml = newList.join('')

        list.innerHTML += newHtml
    })
}


// Paginação

loadPokemonItems(offset, limit)

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


