import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Usuario from "../pages/Usuario";
import MenuConceptos from "./MenuConceptos";
const ConceptosBasicos = () => {
  return (
    <div>
      <h1>Conceptos basicos</h1>

      <BrowserRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/react" element={<ReactTopics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ConceptosBasicos;
