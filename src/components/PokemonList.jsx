import PokemonCard from './PokemonCard'

export default function PokemonList({ pokemons, view, offset }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <PokemonCard pokemon={pokemon} view={view} offset={offset} />
        </li>
      ))}
    </ul>
  )
}