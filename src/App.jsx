import useAxiosFetch from "./hooks/useAxiosFetch";

export default function App() {
  const { error, loading, response } = useAxiosFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="App">
      {loading ? <h2>Carregando...</h2> : null}
      {error ? <h2>{error}</h2> : null}
      {response?.length ? (
        <ul>
          {response.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
