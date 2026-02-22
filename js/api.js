const API_URL = "https://script.google.com/macros/s/AKfycbx6LBlh1Pi1iFWwQVxpXcAcXIj9SWnSoitI1xYHzQyiu1BMiRMBr4zukHdbA3SZnTBn/exec";

async function getPersona(cedula) {
  const res = await fetch(`${API_URL}?cedula=${cedula}`);
  return await res.json();

}
