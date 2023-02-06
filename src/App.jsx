import "./App.css";
import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <a
        href="https://reactrouter.com/en/main"
        target="_blanck"
        rel="noreferrer"
      >
        Documentacion
      </a>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <ConceptosBasicos />
    </div>
  );
}

export default App;
