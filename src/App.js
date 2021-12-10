import './App.css';
import { useEffect, useState } from 'react';
import Pokelist from './components/Pokelist/Pokelist';
import Controls from './components/Controls/Controls';
import { getPokemon, getTypes } from './services/pokemon';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, currentPage, selectedType);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, currentPage, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

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
          types={types}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
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
