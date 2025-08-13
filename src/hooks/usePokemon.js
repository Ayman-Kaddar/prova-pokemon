import { useState, useEffect } from 'react'
import { fetchPokemons, fetchPokemonDetail } from '../utils/api'

export const usePokemonList = (limit, offset) => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPokemons = async () => {
      setLoading(true)
      try {
        const data = await fetchPokemons(limit, offset)
        const detailedPokemons = await Promise.all(
          data.results.map(async (poke) => {
            const id = poke.url.split('/').filter(Boolean).pop()
            const detail = await fetchPokemonDetail(id)
            return {
              id,
              name: detail.name,
              image: detail.sprites.front_default,
            }
          })
        )
        setPokemons(detailedPokemons)
      } catch (err) {
        console.error(err)
        setError('No s\'han pogut carregar els Pokémon.')
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [limit, offset]) 

  return { pokemons, loading, error }
}