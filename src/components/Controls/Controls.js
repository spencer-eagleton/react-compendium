import './Controls.css';
export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  selectedType,
  types,
  setSelectedType,
}) {
  return (
    <div>
      <div className="controls">
        <input
          type="text"
          placeholder="Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Ascending Order</option>
          <option value="desc">Descending Order</option>
        </select>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="all">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
