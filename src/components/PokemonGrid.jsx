import PokemonCard from './PokemonCard'
import '../styles/pokemon.css'

export default function PokemonGrid({ pokemons, view, offset }) {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} view={view} offset={offset} />
      ))}
    </div>
  )
}