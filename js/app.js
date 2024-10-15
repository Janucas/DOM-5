// Selecciona los botones
const btnRed = document.getElementById('btnRojo');
const btnBlue = document.getElementById('btnAzul');
const btnGreen = document.getElementById('btnVerde');
const btnReset = document.getElementById('btnReset');

// Función para cambiar el tema
function changeTheme(theme) {
    // Eliminar tema existente
    document.body.classList.remove('theme-red', 'theme-blue', 'theme-green');

    // Agregar tema si cumple las condiciones
    if (theme) {
        document.body.classList.add(theme);
    }
}

// Asignar los eventos a cada botón
btnRed.addEventListener('click', () => changeTheme('theme-red'));
btnBlue.addEventListener('click', () => changeTheme('theme-blue'));
btnGreen.addEventListener('click', () => changeTheme('theme-green'));
btnReset.addEventListener('click', () => changeTheme(''));
