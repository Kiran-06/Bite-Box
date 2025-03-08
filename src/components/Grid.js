function Grid() {
  return (
    <div className="content-grid">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="card">
          {"SOME TRENDING ADD"}
        </div>
      ))}
    </div>
  )
}


export default Grid;