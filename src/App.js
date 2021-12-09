import './App.css';
import { useEffect, useState } from 'react';
import Pokelist from './components/Pokelist/Pokelist';
import Controls from './components/Controls/Controls';
import { getPokemon } from './services/pokemon';
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <>
        <h1>PokeDex!</h1>
        <Controls query={query} setQuery={setQuery} />
        <Pokelist pokemon={pokemon} />
      </>
    </div>
  );
}

export default App;
