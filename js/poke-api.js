import { Pokemon } from "./pokemon-model.js";

const pokeApi = {}

function convertPokemonApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon
    pokemon.name = pokeDetail.name
    pokemon.number = pokeDetail.id
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.type = type
    pokemon.types = types

    pokemon.weight = pokeDetail.weight
    pokemon.height = pokeDetail.height

    const stats = pokeDetail.stats.map((statsBase) => statsBase.base_stat)
    const [stat] = stats
    pokemon.hp = stats[0]
    pokemon.attack = stats[1]
    pokemon.defense = stats[2]
    pokemon.specialAttack = stats[3]
    pokemon.specialDefense = stats[4]
    pokemon.speed = stats[5]
    
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then((convertPokemonApiDetailToPokemon))
}
    
pokeApi.getPokemons = (offset = 0, limit = 20) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => jsonBody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailRequest) => Promise.all(detailRequest))
            .then((pokemonsDetails) => pokemonsDetails)
}

pokeApi.getPokemonForName = (nome) => {
    const url2 = `https://pokeapi.co/api/v2/pokemon/${nome}`

    return fetch(url2)
            .then((response) => response.json())
            .then((jsonBody) => convertPokemonApiDetailToPokemon(jsonBody));
}

export { pokeApi, convertPokemonApiDetailToPokemon }