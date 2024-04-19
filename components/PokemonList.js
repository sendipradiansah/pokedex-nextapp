'use client';
import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemonData }) {
    // console.log(pokemonData);
    const[listPoke, setListPoke] = useState([]);
    const[searchText, setSearchText] = useState("");

    const searchFilter = (listPoke) => {
      return listPoke.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
      )
    }

    const filteredPokemonData = searchFilter(listPoke);

    useEffect(() => {
      const fetchData = async () => {
          try{
            pokemonData.map(async(item) => {
              const response = await fetch(item.url);
              const results = await response.json();
              console.log(results);
              setListPoke(state => {
                state = [...state, results];
                return state;
              });
            });

          }catch(error){
            console.error('Error fetching nested data:', error);
          }
      }

    fetchData();
    }, [pokemonData]);

    console.log(filteredPokemonData)

  return (
    <div className="flex flex-col justify-center items-center gap-5 flex-wrap px-20">
      <h3 className="">Search Pokemon</h3>
      <input type="text" className="appearance-none border-2 border-gray-200 rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700" placeholder="Search Pokemon..." onChange={(e) => setSearchText(e.target.value)}/>
      <div className='grid grid-cols-8 items-center'>
      {
        filteredPokemonData.map((item, index) => {
          return(
            <PokemonCard key={index} id={item.id} name={item.name} image={item.sprites.front_default} types={item.types}/>
          )
        })
      }
    </div>
    </div>
  )
}




