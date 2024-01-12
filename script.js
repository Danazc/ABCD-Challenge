function aplicarColoresAleatorios(elemento) {
    // Función para generar un color aleatorio entre 0 y 255
    function generarColor() {
        return Math.floor(Math.random() * 256);
    }

    // Selecciona aleatoriamente entre verde, azul y rojo
    const colores = ['verde', 'azul', 'rojo'];
    const colorSeleccionado = colores[Math.floor(Math.random() * colores.length)];

    // Asigna el color correspondiente a la etiqueta HTML
    switch (colorSeleccionado) {
        case 'verde':
            elemento.style.color = `rgb(0, ${generarColor()}, 0)`;
            break;
        case 'azul':
            elemento.style.color = `rgb(0, 0, ${generarColor()})`;
            break;
        case 'rojo':
            elemento.style.color = `rgb(${generarColor()}, 0, 0)`;
            break;
        default:
            break;
    }
}

// Ejemplo de uso: llama a la función con la referencia a tu etiqueta HTML
// Supongamos que tienes una etiqueta h5 con id="miEtiqueta"
const miEtiqueta = document.getElementById('miEtiqueta');
miEtiqueta.addEventListener('click', function() {
    aplicarColoresAleatorios(miEtiqueta);
});
