/*
 Funzione che carica i tre script del chart-italy dopo tre secondi, questo per far fronte al caricamenteo della pagina di loading e al caricamento della pagina Hvana.
 Questo per permettere allo script del chart di fare la setViewBox del grafico una volta che la pagina Havana ha caricato.
*/

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Carica lo script dopo 3 secondi
setTimeout(() => {
    loadScript('/js/havana/chart-italy/mapdata.js', function () {
    });
    loadScript('/js/havana/chart-italy/countrymap.js', function () {
    });
    loadScript('/js/havana/chart-italy/script-clients.js', function () {
    });
}, 3000)