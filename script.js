
(function () {
    emailjs.init({
        publicKey: "52Cx73QIXTMUJbvlI"
    });
})();

const formulario = document.getElementById("formulario");
const emailInput = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

let correoEnviado = false;

emailInput.addEventListener("blur", function () {

    const email = emailInput.value.trim();

    if (email === "" || !emailInput.checkValidity()) {
        return;
    }

    if (correoEnviado) {
        return;
    }

    mensaje.textContent = "Enviando correo...";
    mensaje.style.color = "#4f46e5";

    emailjs.send(
        "service_m2t73o7",
        "template_x37myys",
        {
            email: email
        }
    )
    .then(function () {
        mensaje.textContent = "¡Suscripción exitosa! Revisa tu correo.";
        mensaje.style.color = "green";

        correoEnviado = true;
    })
    .catch(function (error) {
        mensaje.textContent = "Error al enviar el correo. Intenta nuevamente.";
        mensaje.style.color = "red";

        console.error("Error EmailJS:", error);
    });

});


/* Animación al desplazarse por la página */

const elementosRevelar = document.querySelectorAll(".revelar");

const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

elementosRevelar.forEach((elemento) => {
    observadorScroll.observe(elemento);
});
