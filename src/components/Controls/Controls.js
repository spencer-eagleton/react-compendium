export default function Controls({ query, setQuery, setLoading }) {
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={() => setLoading(true)}>Search</button>
    </div>
  );
}
