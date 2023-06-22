function convertPokemonDetailToCard(pokeDetail){
    return ` 
        <div class="card" id="card">
                <div class="card-detail ${pokeDetail.type}">
                    <span class="card-detail-number ${pokeDetail.type}">
                        #0${pokeDetail.number}
                    </span>
                    <img class="card-detail-img" src=${pokeDetail.image} alt="">
                    <span class="card-main-detail-name ${pokeDetail.type}">
                        ${pokeDetail.name}
                    </span>
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
                        <span class="stat-item-text">HP    </span>
                        <div class="ability-container">
                            <div class="hp" id="hp"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.hp}</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-text">ATK   </span>
                        <div class="ability-container">
                            <div class="hp" id="atk"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.attack}</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-text">DEF   </span>
                        <div class="ability-container">
                            <div class="hp" id="def"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.defense}</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-text">SP. ATK</span>
                        <div class="ability-container">
                            <div class="hp" id="sp_atk"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.specialAttack}</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-text">SP. DEF</span>
                        <div class="ability-container">
                            <div class="hp" id="sp_def"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.specialDefense}</span>
                    </li>
                    <li class="stat-item">
                        <span class="stat-item-text">SPEED </span>
                        <div class="ability-container">
                            <div class="hp" id="speed"></div>
                        </div>
                        <span class="stat-item-value">${pokeDetail.speed}</span>
                    </li>
                </ol>
            </div> 
        </div>  
`}


export { convertPokemonDetailToCard }









