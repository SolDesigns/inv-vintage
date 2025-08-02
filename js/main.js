// js/main.js

fetch("data/config.json")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector(".nombres").textContent = data.nombres;
    document.querySelector(".fecha").textContent = data.fecha;
    document.getElementById("mensajeDedicatoria").textContent = data.mensaje;

    // Ceremonia
    document.getElementById("imgCeremonia").src = data.ceremonia.imagen;
    document.getElementById("tituloCeremonia").textContent =
      data.ceremonia.titulo;
    document.getElementById("fechaCeremonia").textContent = formatFecha(
      data.ceremonia.fecha
    );
    document.getElementById("lugarCeremonia").textContent =
      data.ceremonia.lugar;
    document.getElementById("direccionCeremonia").textContent =
      data.ceremonia.direccion;
    document.getElementById("calendarCeremonia").href =
      data.ceremonia.calendarUrl;
    document.getElementById("mapsCeremonia").href = data.ceremonia.mapsUrl;
    document.getElementById("rsvp1").href = data.rsvpUrl;

    // Fiesta
    document.getElementById("imgFiesta").src = data.fiesta.imagen;
    document.getElementById("tituloFiesta").textContent = data.fiesta.titulo;
    document.getElementById("fechaFiesta").textContent = formatFecha(
      data.fiesta.fecha
    );
    document.getElementById("lugarFiesta").textContent = data.fiesta.lugar;
    document.getElementById("direccionFiesta").textContent =
      data.fiesta.direccion;
    document.getElementById("calendarFiesta").href = data.fiesta.calendarUrl;
    document.getElementById("mapsFiesta").href = data.fiesta.mapsUrl;
    document.getElementById("rsvp2").href = data.rsvpUrl;

    iniciarCuentaRegresiva(data.fechaEvento);
  });

function iniciarCuentaRegresiva(fechaEvento) {
  const targetDate = new Date(fechaEvento).getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distancia = targetDate - now;

    if (distancia < 0) return; // evento ya pasó

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias
      .toString()
      .padStart(2, "0");
    document.getElementById("horas").textContent = horas
      .toString()
      .padStart(2, "0");
    document.getElementById("minutos").textContent = minutos
      .toString()
      .padStart(2, "0");
    document.getElementById("segundos").textContent = segundos
      .toString()
      .padStart(2, "0");
  }, 1000);
}
function formatFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  return fecha.toLocaleString("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  });
}
