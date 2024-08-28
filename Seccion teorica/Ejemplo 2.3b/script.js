const titulo = document.getElementById('titulo');
const boton = document.getElementById('cambiarTexto');

function cambiarTexto() {
    titulo.textContent = 'Texto cambiado';
}

boton.addEventListener('click', cambiarTexto);
