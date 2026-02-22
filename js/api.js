const API_URL = "https://script.google.com/macros/s/AKfycbzR8I8f1fGLiK_9VlO_0Nk9VuINPe_PvenmNEs9flAMFcf-MNHWIjX74-oxCE-bhVsM/exec";

async function getPersona(cedula) {
  const res = await fetch(`${API_URL}?cedula=${cedula}`);
  return await res.json();
}