import { useState } from "react";
import { Form, Button } from "react-bootstrap";

// Mensajes de validación
const validationMessages = {
  email: "Ingrese un email válido",
  passwordMatch: "No coinciden las contraseñas",
  alphanumericPassword:
    "La contraseña debe contener entre 6 y 12 caracteres alfanuméricos",
  nameTextOnly: "Nombre debe componerse solo con caracteres de texto",
  emptyFields: "Debes completar todos los campos",
};

function Formulario({ setMessage, setBsStyle }) {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Función de validación y envío de datos
  const dataValidate = (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    // Validar Email
    if (!isValidEmail(email)) {
      showMessage(validationMessages.email);
      return;
    }

    // Validar coincidencia de contraseñas
    if (password !== confirmPassword) {
      showMessage(validationMessages.passwordMatch);
      return;
    }

    // Validar contraseña alfanumérica
    if (!isValidPassword(password)) {
      showMessage(validationMessages.alphanumericPassword);
      return;
    }

    // Validar nombre, solo texto
    if (!isValidName(name)) {
      showMessage(validationMessages.nameTextOnly);
      return;
    }

    // Validar campos vacíos
    if (isEmptyField(name, email, password, confirmPassword)) {
      showMessage(validationMessages.emptyFields);
      return;
    }

    // Restablecer el formulario y mostrar mensaje de éxito
    resetForm();
    showMessage("Registro Exitoso", "success");
  };

  // Funciones de validación aplicando Regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) => /^[a-zA-Z0-9]{6,12}$/.test(password);
  const isValidName = (name) => /^[a-zA-Z\s]*$/.test(name);
  const isEmptyField = (...fields) => fields.some((field) => field === "");

  // Función para mostrar mensajes
  const showMessage = (message, style = "danger") => {
    setMessage(message);
    setBsStyle(style);
  };

  // Función para restablecer el formulario
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setMessage("");
  };

  // Renderizar el formulario
  return (
    <Form onSubmit={dataValidate}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="tuemail@ejemplo.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </Form.Group>
      <Button
        className="btn btn-success btn-block w-100 pt-1 pb-1"
        type="submit"
      >
        Registrarse
      </Button>
    </Form>
  );
}

export default Formulario;
