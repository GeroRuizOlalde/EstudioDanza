// Simulación de datos de turnos disponibles
const turnosDisponibles = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    // Agregar más turnos según sea necesario
];

function mostrarTurnosDisponibles() {
    const turnosContainer = document.getElementById("turnosDisponibles");
    turnosContainer.innerHTML = "<h2>Turnos Disponibles:</h2>";

    if (turnosDisponibles.length === 0) {
        turnosContainer.innerHTML += "<p>No hay turnos disponibles.</p>";
    } else {
        const ul = document.createElement("ul");
        turnosDisponibles.forEach(turno => {
            const li = document.createElement("li");
            li.textContent = turno;
            ul.appendChild(li);
        });
        turnosContainer.appendChild(ul);
    }
}

function solicitarTurno() {
    const nombre = document.getElementById("nombre").value;
    const hora = document.getElementById("hora").value;

    // Aquí puedes agregar lógica para verificar la disponibilidad y gestionar el turno

    // En este ejemplo, simplemente actualizamos la lista de turnos disponibles
    turnosDisponibles.push(hora);

    // Mostramos la lista actualizada
    mostrarTurnosDisponibles();
}
