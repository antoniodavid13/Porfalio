
document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // HELPERS DE UI (GENÉRICOS)
  // ==========================

  /**
   * Pinta el campo como inválido (rojo) y crea/actualiza el <p> del error.
   * @param {HTMLInputElement|HTMLTextAreaElement} input
   * @param {string} errorId  id único del <p> que mostrará el mensaje
   * @param {string} message  texto del error
   */
  function showError(input, errorId, message) {
    input.setAttribute('aria-invalid', 'true'); // borde rojo
    input.removeAttribute('data-valid'); // si estaba marcado como válido, lo quitamos

    const control = input.closest('.control') || input.parentElement; 

    // Crear o actualizar el <p class="error-msg" role="alert">
    let p = control.querySelector('#' + errorId);
    if (!p) {
      p = document.createElement('p');
      p.id = errorId;
      p.className = 'error-msg';
      p.setAttribute('role', 'alert');
      control.appendChild(p);

      // Vincular input ↔ mensaje (accesibilidad)
      const describedby = (input.getAttribute('aria-describedby') || '')
        .split(' ')
        .filter(Boolean);
      if (!describedby.includes(errorId)) {
        describedby.push(errorId);
        input.setAttribute('aria-describedby', describedby.join(' '));
      }
    }
    p.textContent = message;
  }

  /**
   * @param {HTMLInputElement|HTMLTextAreaElement} input
   * @param {string} errorId
   */
  function clearError(input, errorId) {
    input.removeAttribute('aria-invalid');
    input.setAttribute('data-valid', 'true');

    const control = input.closest('.control') || input.parentElement;
    const p = control.querySelector('#' + errorId);
    if (p) p.remove();

    const rest = (input.getAttribute('aria-describedby') || '')
      .split(' ')
      .filter(id => id && id !== errorId);
    if (rest.length) input.setAttribute('aria-describedby', rest.join(' '));
    else input.removeAttribute('aria-describedby');
  }

  const nameInput = document.getElementById('nombre'); 
  const NAME_ERROR_ID = 'error-name';

  function validateName() {
    const value = (nameInput?.value || '').trim(); 
    if (value.length < 3) {
      showError(nameInput, NAME_ERROR_ID, 'El nombre debe tener al menos 3 caracteres.'); // Mensaje visible
      return false;
    }
    clearError(nameInput, NAME_ERROR_ID); // Limpia el error si es válido
    return true;
  }

  function wireNameValidation() {
    if (!nameInput) return;

    nameInput.addEventListener('blur', validateName); 

    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 3) {
        clearError(nameInput, NAME_ERROR_ID);
      }
    });

    const form = document.getElementById('form-inscripcion'); 
    form?.addEventListener('submit', (e) => { if (!validateName()) e.preventDefault(); });
  }

  wireNameValidation(); 


  const correo = document.getElementById("correo");
  const correo_error='error-email';

  function validatecorreo(){
    const value=(correo?.value||" ").trim();
    if(!value){
      showError(correo,correo_error,"Este campo es requerido");
      return false;
    }
    if(!value.includes("@")){
      showError(correo,correo_error,"Debe de ser un email");
      return false;
      
    }
    
    clearError(correo,correo_error);
    return true;
  }
  function wireemailValidation() {
  if (!correo) return;
  correo.addEventListener('blur', validatecorreo);
  const form = document.getElementById('form-inscripcion');
  form?.addEventListener('submit', (e) => { if (!validatecorreo()) e.preventDefault(); });
  }

  wireemailValidation();


  const asunto = document.getElementById("asunto");
  const asunto_error='error-asunto';

  function validateasunto(){
    const value=(asunto?.value||" ").trim();
    if(!value){
      showError(asunto,asunto_error,"Este campo es requerido");
      return false;
    }

    clearError(asunto,asunto_error);
    return true;
  }
  function wireasuntoValidation() {
  if (!asunto) return;
  asunto.addEventListener('blur', validateasunto);
  const form = document.getElementById('form-inscripcion');
  form?.addEventListener('submit', (e) => { if (!validateasunto()) e.preventDefault(); });
  }

  wireasuntoValidation();


  const mensaje = document.getElementById("mensaje");
  const mensaje_error='error-mensaje';

  function validatemensaje(){
    const value=((mensaje?.value||" ").trim()).split(" ");

    if(value.length<5){
      showError(mensaje,mensaje_error,"Debe de tener minimo unas 15 palabras el mensaje");
      return false;
    }

    clearError(mensaje,mensaje_error);
    return true;
  }
  function wiremensajeValidation() {
  if (!mensaje) return;
  mensaje.addEventListener('blur', validatemensaje);
  const form = document.getElementById('form-inscripcion');
  form?.addEventListener('submit', (e) => { if (!validatemensaje()) e.preventDefault(); });
  }

  wiremensajeValidation();

});

