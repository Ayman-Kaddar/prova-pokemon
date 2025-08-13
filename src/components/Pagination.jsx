
export default function Pagination({ offset, limit, onPrev, onNext }) {
  return (
    <div>
      <button onClick={onPrev} disabled={offset === 0}>
        Anterior
      </button>
      <span> Pàgina {Math.floor(offset / limit) + 1} </span>
      <button onClick={onNext}>Següent</button>
    </div>
  )
}