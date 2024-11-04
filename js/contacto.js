document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evito que el formulario se envíe

    // Captura los datos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Muestra los datos en la página
    var formDataDiv = document.getElementById('formData');
    formDataDiv.innerHTML = `
        <h3>Datos Ingresados:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
    `;
});