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
