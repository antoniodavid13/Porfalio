// Inicializar EmailJS con tu PUBLIC_KEY
(function () {
  emailjs.init({
    publicKey: 'VcIekF8W_ioWrZQcv',
  });
})();

// Manejar el envío del formulario
const form = document.getElementById('form-inscripcion');
const status = document.getElementById('status');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // evitar que recargue la página

  emailjs
    .sendForm('service_op25pgq', 'template_gmsc8er', '#form-inscripcion')
    .then(() => {
      status.textContent = 'Mensaje enviado correctamente ✅';
      form.reset();
    })
    .catch((error) => {
      console.error(error);
      status.textContent = 'Error al enviar el mensaje ❌';
    });
});
 