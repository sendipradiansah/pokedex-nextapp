import React from 'react'

const POKEMON_API = 'https://pokeapi.co/api/v2/';

export async function getListPokemon() {
    const response = await fetch(`${POKEMON_API}pokemon?limit=152&offset=0`);
    const pokemonData = await response.json();
    const data = pokemonData.results
    return data;
}

export async function getPokemon(name){
    const response = await fetch(`${POKEMON_API}/pokemon/${name}`);
    const pokemon = await response.json();
    return pokemon;
}

// export async function getTypes(){
//     const response = await fetch(`${POKEMON_API}/type`);
//     const types = await response.json();
//     return types.results;
// }
