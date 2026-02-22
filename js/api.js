const API_URL = "https://script.google.com/macros/s/AKfycby1JsgK_WX03THrZrYpnS5FXKs-RxI-H850hoEswOFJKBtJ33x_sFrwj_O5fbI4lCl0/exec";

async function getPersona(cedula) {
  const res = await fetch(`${API_URL}?cedula=${cedula}`);
  return await res.json();
}