import { useState } from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import AlertMessage from "./Alert";

function Registro() {
  // Estados para gestionar mensajes y estilos de alerta
  const [message, setMessage] = useState("");
  const [bsStyle, setBsStyle] = useState("danger");

  return (
    <>
      <h1>Crea tu Cuenta</h1>
      <SocialButton />
      <p>o usa tu email para registrarte</p>
      <Formulario setMessage={setMessage} setBsStyle={setBsStyle} />
      <AlertMessage message={message} bsStyle={bsStyle} show={message !== ""} />
    </>
  );
}

export default Registro;
