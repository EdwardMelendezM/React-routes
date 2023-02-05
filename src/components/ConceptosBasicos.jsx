import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ConceptosBasicos;
