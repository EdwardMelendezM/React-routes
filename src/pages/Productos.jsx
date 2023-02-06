import { useLocation, useNavigate } from "react-router-dom";

const Productos = () => {
  let LIMIT = 20;
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  let navigate = useNavigate();
  console.log(navigate);
  const handlePRev = () => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };
  const handleNext = () => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  };
  return (
    <div>
      <h3>Productos</h3>
      <p>
        Mostrando productos <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePRev}>Atras</button>}

      <button onClick={handleNext}>Adelante</button>
    </div>
  );
};

export default Productos;
