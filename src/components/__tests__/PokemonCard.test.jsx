// src/components/__tests__/PokemonCard.test.jsx
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonCard from '../PokemonCard'

// Dades de prova
const mockPokemon = {
  id: 25,
  name: 'pikachu',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
}

describe('PokemonCard', () => {
  test('mostra el nom i la imatge del Pokémon', () => {
    render(
      <BrowserRouter>
        <PokemonCard pokemon={mockPokemon} view="grid" offset={20} />
      </BrowserRouter>
    )

    // Comprovem que el nom es mostra
    expect(screen.getByText('pikachu')).toBeInTheDocument()

    // Comprovem que la imatge es carrega amb l'alt correcte
    const img = screen.getByAltText('pikachu')
    expect(img).toBeInTheDocument()
    expect(img.src).toBe(mockPokemon.image)
  })
})