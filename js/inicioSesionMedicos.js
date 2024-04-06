document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const { nombre } = obtenerDatosFormulario();
    const esValido = validarnombre(nombre);

    if (esValido) {
      const medico = nombre;
      guardarLocalStorage(medico);
      manejarExito();
    } else {
      manejarError();
    }
  });
});
const obtenerDatosFormulario = () => {
  const nombre = document.getElementById("nombreMedico").value.trim();
  return { nombre };
};

const validarnombre = (nombre) => /^[a-zA-Z\s.]+$/.test(nombre);

const manejarExito = () => {
  alert("Éxito: Los datos ingresados son válidos.");
  limpiarCamposTexto();
  window.location.replace("agendaCitas.html");
};

const manejarError = () => {
  alert("Error: Los datos ingresados no son válidos.");
};

function contrasennaIncorrecta() {
  intentos++;

  if (intentos >= 3) {
    alert("Ha ingresado la contraseña más de 3 veces");
  } else {
    alert("contrseña incorrecta, numero de intentos: " + intentos + " de: 3");
  }
}

const limpiarCamposTexto = () => {
  const campos = document.querySelectorAll(
    "#formulario input[type='text'], #formulario input[type='password']"
  );
  campos.forEach((campo) => (campo.value = ""));
};

function guardarLocalStorage(usuario) {
  localStorage.setItem("medico", usuario);
  localStorage.setItem("usMedico", true);
}
