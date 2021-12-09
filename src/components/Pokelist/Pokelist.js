import './Pokelist.css';
export default function Pokelist({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div>
      {pokemon.map((poke) => (
        <>
          <p key={poke.id}>{poke.pokemon}</p>
          <img src={poke.url_image}></img>
        </>
      ))}
      <div>Page: {currentPage}</div>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
