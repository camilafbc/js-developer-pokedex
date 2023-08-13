import { pokeApi } from "./poke-api.js";
import { convertPokemonDetailToCard } from "./pokemon-detail-card.js";
import { getAbilitiesForWidth } from "./abilities.js";

const pokemonDetail = document.getElementById("modal");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");

// Pega o id do pokemon que sofre o evento, possibilitando a inserção dos dados no modal e seu consequente  na tela
function openModal(event) {
  const card = event.currentTarget;
  const pokemonId = card.getAttribute("id");
  const idDetails = pokemonId - 1;

  pokeApi.getPokemons(idDetails, 1).then((pokemons = []) => {
    pokemonDetail.innerHTML = pokemons.map(convertPokemonDetailToCard);
    pokemons.map(getAbilitiesForWidth);
  });

  toggleModal();
}

// Adiciona ouvinte nos cards para permitir sua seleção no modal
function cardListeners() {
  const pokemons_card = document.querySelectorAll(".pokemon-card");

  pokemons_card.forEach((card) => {
    card.addEventListener("click", openModal);
  });
}

// Exibe e oculta o fade/modal
function toggleModal() {
  [fade, modal].forEach((element) => {
    element.classList.toggle("hide");
  });
}

// Limpa o conteúdo do modal para entrada do próximo
function clearModal() {
  modal.innerHTML = "";
}

fade.addEventListener("click", () => {
  toggleModal();
  clearModal();
});

export { openModal, cardListeners, toggleModal };