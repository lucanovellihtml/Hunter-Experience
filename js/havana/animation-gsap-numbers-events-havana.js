/*
    Funzione che gestisce il caricamento de numero degli eventi havana.
*/
gsap.registerPlugin(ScrollTrigger);

const numeroCaricamentoElement = document.getElementById('numeroCaricamento');
const target = 60;
const duration = 6; // Durata dell'animazione in secondi

gsap.to(numeroCaricamentoElement, {
    innerText: target,
    duration: duration,
    snap: { innerText: 1 }, // Assicura che i valori di innerText siano interi
    ease: "power1.inOut", // Definisce la curva di accelerazione/decelerazione
    scrollTrigger: {
        trigger: "#numeroCaricamento", // L'animazione si attiva quando questo elemento entra nella viewport
        start: "bottom bottom", // Inizia l'animazione quando la parte superiore dell'elemento è all'80% della viewport
        scrub: false, // Se impostato a true, l'animazione si "attacca" allo scroll
        once: true, // L'animazione avviene solo una volta
        markers: true
    }
});