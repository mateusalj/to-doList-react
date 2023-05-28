
const Filter = ({Filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Complete">Completadas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
        </div>
            <p>Ordem alfabética:</p>
            <button onClick={() => setSort("Asc")}>Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
    </div>
  )
}

export default Filter