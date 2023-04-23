import { CgSpinner } from "react-icons/cg";
import "../estilos/spinner.css";

export function Spinner() {
  return (
    <div className="spinner">
      <CgSpinner className="spinning" size={50} />
    </div>
  );
}
