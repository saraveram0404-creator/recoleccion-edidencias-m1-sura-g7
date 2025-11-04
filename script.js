let opcionMenu = "";
let tipoServicio = "";
let edadUsuario = 0;
let tienePrioridad = false;
let continuarPrograma = true;

while (continuarPrograma === true) {
  opcionMenu = prompt(
    "=== SISTEMA DE TURNOS 'FILA EXPRESS' ===\n" +
    "1. Solicitar Turno para Caja\n" +
    "2. Solicitar Turno para Asesoría\n" +
    "3. Verificar Prioridad (Tercera Edad)\n" +
    "4. Ver Turno Asignado\n" +
    "5. Salir\n\n" +
    "Seleccione una opción (1-5):"
  );

 
  if (opcionMenu === "1") {
    if (tipoServicio !== "") {
      alert("Ya tiene un turno asignado: " + tipoServicio);
    } else {
      edadUsuario = parseInt(prompt("Ingrese su edad:"));
      if (isNaN(edadUsuario)) {
        alert("Por favor, ingrese una edad válida.");
      } else {
        tipoServicio = "Caja";
        if (edadUsuario >= 60) {
          tienePrioridad = true;
          alert("Turno de prioridad solicitado correctamente: P-1 (Caja - Preferencial)");
        } else {
          tienePrioridad = false;
          alert("Turno solicitado correctamente: C-1 (Caja)");
        }
      }
    }
  } 

 
  else if (opcionMenu === "2") {
    if (tipoServicio !== "") {
      alert("Ya tiene un turno asignado: " + tipoServicio);
    } else {
      edadUsuario = parseInt(prompt("Ingrese su edad:"));
      if (isNaN(edadUsuario)) {
        alert("Por favor, ingrese una edad válida.");
      } else {
        tipoServicio = "Asesoría";
        if (edadUsuario >= 60) {
          tienePrioridad = true;
          alert("Turno de prioridad solicitado correctamente: P-1 (Asesoría - Preferencial)");
        } else {
          tienePrioridad = false;
          alert("Turno solicitado correctamente: A-1 (Asesoría)");
        }
      }
    }
  } 

  
  else if (opcionMenu === "3") {
    edadUsuario = parseInt(prompt("Ingrese su edad:"));
    if (isNaN(edadUsuario)) {
      alert("Por favor, ingrese una edad válida.");
    } else if (edadUsuario >= 60) {
      tienePrioridad = true;
      alert("Turno de prioridad solicitado correctamente: P-1");
    } else {
      tienePrioridad = false;
      alert("No aplica para atención preferencial.");
    }
  } 

 
  else if (opcionMenu === "4") {
    if (tipoServicio === "") {
      alert("Debe solicitar un servicio primero (Opción 1 o 2).");
    } else {
      if (tienePrioridad === true) {
        alert("Su turno es: P-1 (Preferencial)");
      } else if (tipoServicio === "Caja") {
        alert("Su turno es: C-1 (Caja)");
      } else if (tipoServicio === "Asesoría") {
        alert("Su turno es: A-1 (Asesoría)");
      }
    }
  } 

  else if (opcionMenu === "5") {
    alert("Gracias por usar 'Fila Express'. ¡Hasta luego!");
    continuarPrograma = false;
  } 

  
  else {
    alert("Opción no válida. Intente de nuevo.");
  }
}
