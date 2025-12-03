document.getElementById('continueBtn').addEventListener('click', async function(e) {
    e.preventDefault();

    const codeEl = document.getElementById('guestCode');
    const errorEl = document.getElementById('errorMsg');
    const code = (codeEl.value || '').trim();

    errorEl.textContent = '';

    // 1) validación mínima
    if (code.length < 4) {
        errorEl.textContent = 'Su código es incorrecto';
        return;
    }

    try {
        // 2) cargar JSON con los códigos (ajusta la ruta si hace falta)
        const res = await fetch('/storage/guests.json', {cache: "no-store"});
        if (!res.ok) throw new Error('No se pudo cargar la lista de invitados');

        const guests = await res.json();

        // 3) validar existencia del código
        if (!Object.prototype.hasOwnProperty.call(guests, code)) {
            errorEl.textContent = 'Su código es incorrecto';
            return;
        }

        // 4) guardar datos y redirigir a la página de detalles
        const guestData = guests[code];
        sessionStorage.setItem('guestData', JSON.stringify({ code, ...guestData }));

        // redirige a otra página que muestre la info (detalle.html)
        window.location.href = `details.html?code=${encodeURIComponent(code)}`;

    } catch (err) {
        console.error(err);
        errorEl.textContent = 'Error al validar el código. Intente de nuevo más tarde.';
    }
});
