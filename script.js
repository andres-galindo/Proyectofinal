personalizar();
function personalizar(){
    let nombre= prompt("👋🏻Hola bienvenid@ a Breakfast Surprise Dame tu nombre para personalizar tu experiencia");
    let etiquetap = document.querySelector(".nombre");
    etiquetap.innerHTML = nombre;
}

document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const phoneNumber = "573112575687"; // Reemplaza con el número al que quieres enviar el mensaje (sin espacios ni símbolos)
    const name = document.getElementById('name').value;
    const userMessage = document.getElementById('message').value;

    const message = `Hola, soy ${name}. ${userMessage}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  });