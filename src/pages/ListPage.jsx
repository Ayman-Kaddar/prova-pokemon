import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import ViewToggle from '../components/ViewToggle'
import Pagination from '../components/Pagination'
import PokemonList from '../components/PokemonList'
import PokemonGrid from '../components/PokemonGrid'
import { usePokemonList } from '../hooks/usePokemon'

export default function ListPage() {
  const location = useLocation()
  const limit = 5

  const [view, setView] = useState(() => {
    return location.state?.view || localStorage.getItem('pokemonView') || 'list'
  })

  const [offset, setOffset] = useState(() => {
    const savedOffset = location.state?.offset ?? localStorage.getItem('pokemonOffset')
    return savedOffset !== null ? Number(savedOffset) : 0
  })

  useEffect(() => {
    localStorage.setItem('pokemonView', view)
  }, [view])

  useEffect(() => {
    localStorage.setItem('pokemonOffset', offset)
  }, [offset])

  const { pokemons } = usePokemonList(limit, offset)

  const handlePrev = () => setOffset(Math.max(0, offset - limit))
  const handleNext = () => setOffset(offset + limit)

  return (
    <div className="container">
      <Header />
      <ViewToggle currentView={view} onViewChange={setView} />
      {view === 'list' ? (
        <PokemonList pokemons={pokemons} view={view} offset={offset} />
      ) : (
        <PokemonGrid pokemons={pokemons} view={view} offset={offset} />
      )}
      <Pagination offset={offset} limit={limit} onPrev={handlePrev} onNext={handleNext} />

    </div>
  )
}