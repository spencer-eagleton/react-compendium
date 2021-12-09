export default function Controls({ query, setQuery }) {
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}
