export default function Pokelist({ pokemon, currentPage, setCurrentPage, setLoading }) {
  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>{poke.pokemon}</p>
      ))}
      <div>Page: {currentPage}</div>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
