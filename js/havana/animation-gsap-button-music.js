// Gestione dell'animazione del titolo della sezione musica
const buttonMusic = document.getElementById('titleMusic');

function pulsateButton() {
    gsap.to(buttonMusic, {
        duration: 0.8,
        scale: 1.1,
        ease: "power1.inOut", // Funzione per la transizione
        onComplete: () => {
            gsap.to(buttonMusic, {
                duration: 0.8,
                scale: 1,
                ease: "power1.inOut",
                onComplete: pulsateButton // Richiama la funzione per ripetere
            });
        }
    });
}
pulsateButton(); // Avvia l'animazione

// Gestione della visualizzazione del paragrafo quando clicco il titolo della sezione musica
const paragraphMusic = document.getElementById("paragraphMusic");

buttonMusic.addEventListener("click", function () {
    if (paragraphMusic.style.display === "none") {
        paragraphMusic.style.display = "block";
        paragraphMusic.style.animation = "fadeIn 1s";
    } else {
        paragraphMusic.style.display = "none";
    }
});