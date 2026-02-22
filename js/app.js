async function buscarPersona() {

  const cedula = document.getElementById("cedulaBuscar").value;
  const data = await getPersona(cedula);

  const cont = document.getElementById("resultado");
  cont.innerHTML = "";

  if (!data.persona) {
    cont.innerHTML = "<p>No encontrada</p>";
    return;
  }

  const persona = data.persona;

  let html = `
    <div class="card">
      <h2>${persona[1]}</h2>
      <p><strong>Tipo de Sangre:</strong> ${persona[3]}</p>
      <p><strong>Contacto:</strong> ${persona[4]} - ${persona[5]}</p>
    </div>
  `;

  data.alergias.forEach(a => {
    const clase = a[4] === "Severa" ? "alerta-severa" : "alerta-normal";
    html += `
      <div class="${clase}">
        <strong>${a[2]}</strong><br>
        Reacción: ${a[3]}<br>
        Gravedad: ${a[4]}
      </div>
    `;
  });

  cont.innerHTML = html;
}