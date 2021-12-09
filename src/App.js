import './App.css';
import { useEffect, useState } from 'react';
import Pokelist from './components/Pokelist/Pokelist';
import Controls from './components/Controls/Controls';
import { getPokemon } from './services/pokemon';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <>
        <h1>PokeDex!</h1>
        <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
        {loading && <span>loading...</span>}
        {!loading && <Pokelist pokemon={pokemon} loading={loading} setLoading={setLoading} />}
      </>
    </div>
  );
}

export default App;
