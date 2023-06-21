function convertPokemonsToList(pokemon) {
    return `
            <li id="goToDetail" class="pokemon ${pokemon.type}" >
                <div class="pokemon-card" id="${pokemon.number}">  
                     <span class="pokemon-card-number ${pokemon.type}">
                         #0${pokemon.number}
                     </span>
                     <img src=${pokemon.image} alt="${pokemon.name}" class="pokemon-card-img">
                     <span class="pokemon-card-name ${pokemon.type}">${pokemon.name}</span>  
                </div>
            </li>
    `
}


export { convertPokemonsToList }