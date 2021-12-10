import './Pokelist.css';
export default function Pokelist({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <>
      <div className="poke-list">
        {pokemon.map((poke) => (
          <>
            <div className="poke-card">
              <p key={poke.id}>{poke.pokemon}</p>
              <img src={poke.url_image}></img>
            </div>
          </>
        ))}
      </div>
      <div>Page: {currentPage}</div>
      <button onClick={handleNextPage}>Next Page</button>
    </>
  );
}
