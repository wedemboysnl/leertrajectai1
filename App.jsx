
export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welkom bij het AI Leertraject voor Kinderen</h1>
      <p>Klik op een module om te starten!</p>
      <ul>
        {Array.from({ length: 9 }, (_, i) => (
          <li key={i}>Module {i + 1}</li>
        ))}
      </ul>
    </div>
  );
}
