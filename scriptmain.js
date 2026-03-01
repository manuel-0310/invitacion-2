const weddingDate = new Date("Jul 19, 2026 15:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "¡LLEGÓ EL DÍA!";
    }
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("miMusica");
    const btnMusica = document.getElementById("btnMusica");
    const texto = document.getElementById("texto");

    const debeReproducir = localStorage.getItem("reproducirMusica");

    if (debeReproducir === "true") {
        audio.play();
        btnMusica.classList.add("sonando");
        texto.innerText = "Pausar";
        localStorage.removeItem("reproducirMusica");
    }

    btnMusica.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            btnMusica.classList.add("sonando");
            texto.innerText = "Pausar";
        } else {
            audio.pause();
            btnMusica.classList.remove("sonando");
            texto.innerText = "Reproducir canción";
        }
    });
});

function iniciarSonidoMusicaDesdeIntro() {
    const audio = document.getElementById("miMusica");
    const btnMusica = document.getElementById("btnMusica");
    const texto = document.getElementById("texto");

    if (!audio || !btnMusica || !texto) {
        return;
    }

    audio.play().then(() => {
        btnMusica.classList.add("sonando");
        texto.innerText = "Pausar";
    }).catch(() => {
        texto.innerText = "Reproducir canción";
    });
}

window.iniciarMusicaDesdeIntro = iniciarSonidoMusicaDesdeIntro;
