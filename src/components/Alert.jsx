import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

// Componente funcional para Mensaje de Alerta
function AlertMessage({ message, bsStyle, show }) {
  return (
    show && (
      <Alert variant={bsStyle === "danger" ? "danger" : "success"}>
        <strong>{message}</strong>
      </Alert>
    )
  );
}

// Validación de Props
AlertMessage.propTypes = {
  message: PropTypes.string.isRequired,
  bsStyle: PropTypes.string,
  show: PropTypes.bool.isRequired,
};

export default AlertMessage;
