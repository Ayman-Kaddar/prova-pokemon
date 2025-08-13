import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon, view, offset }) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      state={{ view, offset }}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
      }}>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
      </div>
    </Link>
  )
}