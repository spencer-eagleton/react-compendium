import './App.css';
import { useEffect, useState } from 'react';
import Pokelist from './components/Pokelist/Pokelist';
import Controls from './components/Controls/Controls';
import { getPokemon } from './services/pokemon';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage]);

  return (
    <div className="App">
      <>
        <h1>PokeDex!</h1>
        <Controls
          query={query}
          setQuery={setQuery}
          setLoading={setLoading}
          order={order}
          setOrder={setOrder}
        />
        {loading && <span>loading...</span>}
        {!loading && (
          <Pokelist
            pokemon={pokemon}
            loading={loading}
            setLoading={setLoading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </>
    </div>
  );
}

export default App;
