import Image from "next/image";
import PokemonList from "@/components/PokemonList";
import {getListPokemon} from "./lib/pokemonAPI";
import { SiPokemon } from "react-icons/si";

export default async function Home() {
  

  const pokemonData = await getListPokemon();

  console.log(pokemonData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full mb-12">
        <div className="ml-20 mb-2"><SiPokemon size={150}/></div>
        <PokemonList pokemonData={pokemonData}/>
      </div>
    </main>
  );
}
