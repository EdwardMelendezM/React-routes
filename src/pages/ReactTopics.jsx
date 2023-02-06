import { Link, Routes, Route, BrowserRouter } from "react-router-dom";

const ReactTopics = () => {
  return (
    <div>
      <h3>React topcis</h3>
      <ul>
        <li>
          <Link to="/react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/react/props">Props</Link>
        </li>
        <li>
          <Link to="/react/estado">Estado</Link>
        </li>
        <li>
          <Link to="/react/componente">Componentes</Link>
        </li>
      </ul>
    </div>
  );
};

export default ReactTopics;
