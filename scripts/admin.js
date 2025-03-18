/**
 * Script para gestionar el formulario de administración de certificaciones
 */

// Obtener referencia al formulario
const certificationForm = document.getElementById('certificationForm');

// Manejar el envío del formulario
certificationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const formData = {
        id: Date.now(), // Generar un ID único basado en la marca de tiempo
        title: document.getElementById('title').value,
        issuer: document.getElementById('issuer').value,
        description: document.getElementById('description').value,
        url: document.getElementById('url').value || '#',
        logo: document.getElementById('logoUrl').value || 'placeholder-logo.png', // Aquí manejaríamos la imagen subida
        date: document.getElementById('date').value,
        category: document.getElementById('category').value
    };
    
    // En una aplicación real, aquí enviarías estos datos a un servidor o los guardarías en localStorage
    saveCertification(formData);
});

/**
 * Guarda la certificación (en este ejemplo en localStorage)
 * En una aplicación real, esto podría enviar los datos a un servidor
 */
function saveCertification(certification) {
    // Obtener certificaciones existentes
    let certifications = JSON.parse(localStorage.getItem('certifications')) || [];
    
    // Agregar la nueva certificación
    certifications.push(certification);
    
    // Guardar en localStorage
    localStorage.setItem('certifications', JSON.stringify(certifications));
    
    // Mostrar mensaje de éxito
    alert('Certificación guardada con éxito');
    
    // Limpiar el formulario
    certificationForm.reset();
}

// Establecer el año actual en el pie de página
document.getElementById('current-year').textContent = new Date().getFullYear();
