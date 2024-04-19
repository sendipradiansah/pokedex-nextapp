// 'use client';
import React from 'react'
import { getPokemon } from '../lib/pokemonAPI'
import { CgGenderMale } from "react-icons/cg";
import { CgPokemon } from "react-icons/cg";
import { SiPokemon } from "react-icons/si";
import { FaRegCircle } from "react-icons/fa6";

export default async function PokemonPage({params}) {
// console.log('PARAMS', params);
const { pokemonName } = params;

const pokemon = await getPokemon(pokemonName);

// console.log(pokemon);

const handleMouseOver = (e) => {
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
}

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = "none";
  e.target.style.border = "black";
}

  return (
    <div className="flex flex-col px-24 py-20">
      <div className="flex flex-row mb-12 mx-auto items-center gap-5">
      <SiPokemon size={70} style={{color: 'orange'}}/>
        <label style={{fontSize: '30px', fontWeight:800, color: 'gray', fontFamily: 'Brush Script MT'}}>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</label>
      </div>
      <div className="w-full items-center">
        <div className="w-3/4 flex flex-row m-auto items-center justify-around bg-orange-400 px-5 gap-10 rounded-xl">
            <div className="ml-16"><img width="300px" height="300px" src={pokemon.sprites.other['official-artwork'].front_default}></img></div>
            <div className="flex flex-col mt-5 mb-10">
              <div className="flex flex-row gap-2 mb-10 justify-evenly">
                <div className="border-4 border-black px-4 py-1">CHS</div>
                <div className="border-4 border-black px-4 py-1">CHT</div>
                <div className="border-4 border-black bg-black text-orange-500 px-4 py-1">ENG</div>
                <div className="border-4 border-black  px-4 py-1">FRA</div>
                <div className="border-4 border-black  px-4 py-1">GER</div>
                <div className="border-4 border-black  px-4 py-1">ITA</div>
                <div className="border-4 border-black  px-4 py-1">JPN</div>
                <div className="border-4 border-black  px-4 py-1">KOR</div>
                <div className="border-4 border-black  px-4 py-1">SPA</div>
              </div>
              <div className="w-full flex flex-row bg-orange-600 items-center px-2 mb-5">
                <img src={pokemon.sprites.front_default} style={{width: '60px', height: '60px', marginRight: '20px'}}></img>
                <label style={{fontSize: '16px', color: 'white', fontWeight: 500, marginRight: '100px'}}>No. {pokemon.id}</label>
                <label style={{fontSize: '20px', color: 'white', fontWeight: 600, marginRight: '200px'}}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</label>
                <div style={{borderRadius:'100px', backgroundColor:'blue', marginRight: '120px'}}><CgGenderMale style={{color: 'white'}} size={20}/></div>
                <CgPokemon style={{color: 'black'}} size={30}/>
              </div>
              <div className="w-4/5 mx-auto flex flex-col gap-y-2">
                <div className="bg-white p-3 text-center bg-gray-200"><h3>Evolution Pokemon</h3></div>
                <div className="bg-white text-center flex flex-row justify-around">
                  <div className="w-full grid grid-rows-1 bg-gray-200">
                      <table>
                        <tbody>
                          <tr className='border-2 border-b-gray-400'>
                            <td>Type</td>
                          </tr>
                          <tr className='border-2 border-b-gray-400'>
                            <td>Height</td>
                          </tr>
                          <tr className='border-2 border-b-gray-400'>
                            <td>Weight</td>
                          </tr>
                          <tr className='border-2 border-b-gray-400'>
                            <td>Number Battled</td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  <div className="w-full grid grid-rows-1 bg-white">
                    <table>
                        <tbody>
                          <tr>
                            <td><div className="bg-gray-400 w-1/3 ml-2 flex flex-row gap-2 items-center"><FaRegCircle /> {pokemon.types[0].type.name.toUpperCase()}</div></td>
                          </tr>
                          <tr>
                            <td><div className="w-1/3">{pokemon.height}'</div></td>
                          </tr>
                          <tr>
                            <td><div className="w-1/3">{pokemon.weight} lbs.</div></td>
                          </tr>
                          <tr>
                            <td><div className="w-1/3">{pokemon.base_experience}</div></td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
                </div>
                <div className="bg-white p-3">
                  <p>It has the ability to alter the composition of its body to suit its surrounding environment.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
