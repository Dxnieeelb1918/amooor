function mostrarPreguntas() {
    document.getElementById("inicio").classList.add("hidden");
    document.getElementById("preguntas").classList.remove("hidden");
}

function validarRespuestas() {
    let respuestas = document.querySelectorAll('input[type="radio"]:checked');
    if (respuestas.length < 4) {
        alert("Por favor, responde todas las preguntas.");
        return;
    }

    let todasSi = true;
    respuestas.forEach(r => {
        if (r.value === "no") {
            todasSi = false;
        }
    });

    document.getElementById("preguntas").classList.add("hidden");

    if (todasSi) {
        document.getElementById("mensajeFinal").classList.remove("hidden");
    } else {
        alert("Vuelve a leer las preguntas, amor 😘");
    }
}

function mostrarCorazones() {
    for (let i = 0; i < 20; i++) {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";
        corazon.style.left = Math.random() * 100 + "vw";
        corazon.style.top = Math.random() * 100 + "vh";
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.getElementById("corazones").appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 3000);
    }

    alert("Te hare la mujer más feliz de todas, te amo ❤️");
}