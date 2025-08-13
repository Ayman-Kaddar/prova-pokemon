export const fetchPokemons = async (limit = 20, offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
  const data = await response.json()
  return data
}

export const fetchPokemonDetail = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()
  return data
}