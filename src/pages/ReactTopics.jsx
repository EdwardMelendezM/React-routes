import { Link, Routes, Route } from "react-router-dom";
export const Jsx = () => {
  return (
    <>
      <h3>Conceptos basicos de jsx</h3>
    </>
  );
};
export const ReactTopics = () => {
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
      <Routes>
        <Route path="jsx" element={<h3>Esto es un jsx</h3>} />
        <Route path="props" element={<h3>Esto es un props</h3>} />
        <Route path="estado" element={<h3>Esto es un estado</h3>} />
        <Route path="componente" element={<h3>Esto es un componente</h3>} />
      </Routes>
    </div>
  );
};
