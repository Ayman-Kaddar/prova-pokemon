
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchPokemonDetail } from '../utils/api'

export default function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDetail = async () => {
      try {
        const data = await fetchPokemonDetail(id)
        setPokemon(data)
      } catch {
        console.error("No s'ha trobat el Pokémon")
      } finally {
        setLoading(false)
      }
    }
    loadDetail()
  }, [id])

  if (loading) return <p>Carregant detall...</p>
  if (!pokemon) return <p>Pokémon no trobat</p>

  return (
    <div className="container">
      <h1>Detall del Pokémon</h1>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <button onClick={() => navigate(-1)}>Tornar al llistat</button>
    </div>
  )
}