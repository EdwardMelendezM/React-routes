import { useNavigate } from "react-router-dom";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let navigator = useNavigate();
  let { name, constellation, id } = el;
  const handleEdit = (e) => {
    setDataToEdit(el);
    navigator(`/editar/${id}`);
  };
  return (
    <tr>
      <th>{el.name}</th>
      <th>{el.constellation}</th>
      <th>
        <button onClick={handleEdit}>Editar</button>
        <button
          onClick={() => {
            deleteData(el.id);
          }}
        >
          Eliminar
        </button>
      </th>
    </tr>
  );
};

export default CrudTableRow;
