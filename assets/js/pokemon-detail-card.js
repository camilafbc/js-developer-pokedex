const pokemonDetail = document.getElementById('pokemon-detail-content');
const urlParams = new URLSearchParams(window.location.search);
const pokemonID = urlParams.get("id");
const idDetails = pokemonID - 1

pokeApi.getPokemons(idDetails, 1)
    .then((pokemons = []) => {
    pokemonDetail.innerHTML += pokemons.map(convertPokemonDetailToCard)
})



function convertPokemonDetailToCard(pokeDetail){
    return `  
    <div class="card" id="card">
                <div class="card-detail ${pokeDetail.type}">
                    <button type="button" class="backBtn" onclick="backPage()"><img src="assets/img/icons8-à-esquerda-dentro-de-um-círculo-24.png" alt=""></button>
                    <span class="card-detail-number ${pokeDetail.type}">#0${pokeDetail.number}</span>
                    <img class="card-detail-img" src=${pokeDetail.image} alt="">
                    <span class="card-main-detail-name ${pokeDetail.type}">${pokeDetail.name}</span>
                </div>
            

            <div class="card-detail-data class="is-light-theme">
                
                <ol class="card-detail-types">
                ${pokeDetail.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}    
                </ol>
                <div class="card-detail-detail">
                    <div class="card-detail-value">
                        <p>${(pokeDetail.weight)/10}kg</p>
                        <span class="card-detail-text">Peso</span>
                    </div>
                    <div class="card-detail-value">
                        <p>${(pokeDetail.height)/10}m</p>
                        <p class="card-detail-text">Altura</p>
                    </div>
                </div>
                <ol class="card-detail-list">
                    <hr>
                   <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.hp}</span>
                        <span class="stat-item-text">HP</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.attack}</span>
                        <span class="stat-item-text">ATK</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.defense}</span>
                        <span class="stat-item-text">DEF</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.specialAttack}</span>
                        <span class="stat-item-text">SP. ATK</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.specialDefense}</span>
                        <span class="stat-item-text">SP. DEF</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-value">${pokeDetail.speed}</span>
                        <span class="stat-item-text">SPEED</span>
                    </li>
                </ol>
            </div> 
    </div>
`}


// Função que retorna para página principal a partir do card de detalhes

function backPage(){
    window.location.href = "index.html";
}









