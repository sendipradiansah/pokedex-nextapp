import React, {useEffect, useState} from 'react'
import Links from 'next/link';

export default function PokemonCard({key, id, name, image, types}) {
  // const[color, setColor] = useState("");

  const getColor = (name) => {
    let color = '';

    switch(name){
      case 'normal':
        color = '#3399ff';
        break;
      case 'fighting':
        color = '#00ff99';
        break;
      case 'flying':
        color = 'orange';
        break;
      case 'poison':
        color = 'purple';
        break;
      case 'ground':
        color = 'gray';
        break;
      case 'rock':
        color = '#0000ff';
        break;
      case 'bug':
        color = 'fuchsia';
        break;
      case 'ghost':
        color = '#5c5c8a';
        break;
      case 'steel':
        color = 'silver';
        break;
      case 'fire':
        color = 'red';
        break;
      case 'water':
        color = 'cyan';
        break;
      case 'grass':
        color = 'green';
        break;
      case 'electric':
        color = 'aqua';
        break;
      case 'psychic':
        color = 'lime';
        break;
      case 'ice':
        color = 'teal';
        break;
      case 'dragon':
        color = 'maroon';
        break;
      case 'dark':
        color = '#334d4d';
        break;
      case 'fairy':
        color = 'pink';
        break;
      case 'unknown':
        color = '#336699';
        break;
      case 'shadow':
        color = '#7575a3';
        break;
      default: 
        color = '#993399';
    }
  return color;
}

  return (
    <Links href={name} className='border border-gray-400'>
      <div className="flex flex-col items-center">
        <img width="50px" height="50px" src={image}></img>
        <div className='text-center px-5 text-sm font-normal'>{id} - {name.charAt(0).toUpperCase() + name.slice(1)}</div>
        <div className="w-full bg-purple-500 flex flex-row justify-around p-1">
          {types.map((item) => {
            return <label className="text-sm rounded-md p-1" style={{backgroundColor: getColor(item.type.name), color: 'white'}}>{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</label>
          })}
        </div>
      </div>
    </Links>
  )
}