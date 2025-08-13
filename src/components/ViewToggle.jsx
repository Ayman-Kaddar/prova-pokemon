
export default function ViewToggle({ currentView, onViewChange }) {
  return (
    <div>
      <button
        onClick={() => onViewChange('list')}
        disabled={currentView === 'list'}
      >
        Llistat
      </button>
      <button
        onClick={() => onViewChange('grid')}
        disabled={currentView === 'grid'}
      >
        Graella
      </button>
    </div>
  )
}