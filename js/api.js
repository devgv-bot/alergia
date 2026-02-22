const API_URL = "https://script.google.com/macros/s/AKfycbzOw3FI_KEyFSvPIwUkErMYz8jvRrPwfgPorgefpJTPNvWNtfsPereEf7hU8AwZzK0/exec";

async function getPersona(cedula) {
  const res = await fetch(`${API_URL}?cedula=${cedula}`);
  return await res.json();
}