const URL = "https://pokeapi.co/api/v2/pokemon";
const EVOLUTION_URL = 'https://pokeapi.co/api/v2/evolution-chain';

export const getPokemonList = async (url: string) => {
  try {
    const listResponse = await fetch(url);
    return await listResponse.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPokemon = async (name: string) => {
  try {
    const res = await fetch(`${URL}/${name}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonEvolution = async (id: number) => {
  try {
    const res = await fetch(`${EVOLUTION_URL}/${id}`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

export const get151pokemons = async ()=>{
  try {
    const res = await fetch(`${URL}?limit=151`);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
}

// export const searchPokemon = async (name: string)=>{
//   try {
//     const res = await fetch(`${EVOLUTION_URL}/${id}`);
//     return await res.json();
//   } catch (err) {
//     console.log(err);
//   }
// }