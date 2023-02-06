import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Menu con enlaces html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <span>Componente navLink</span>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/acerca" activeclassname="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" activeclassname="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Parametros</span>
          <Link to="/usuario/jonmircha">jonmircha</Link>
          <Link to="/usuario/kenai">kenia</Link>
        </li>
        <li>
          <span>Parametros de consulta</span>
          <Link to="/productos">Productos</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;
