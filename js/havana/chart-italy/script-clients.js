/*
    Funzione che mostra, quando viene cliccata la regione gialla del chart italy, 
    il div con i loghi dei clienti e l'animazione dello scroll.
*/

// Elemento chart italia
const chartItalia = document.getElementById("map");

// Elemento clients list Havana
const clientsHavana = document.getElementById("listCollabHavana");

// Array che contiene la condizione
const arrayCondition = [
    `<div class="tt_name_sm">Valle d'Aosta</div>`,
    `<div class="tt_name_sm">Piemonte</div>`,
    `<div class="tt_name_sm">Lombardia</div>`,
    `<div class="tt_name_sm">Liguria</div>`,
    `<div class="tt_name_sm">Calabria</div>`,
    `<div class="tt_name_sm">Trentino-Alto Adige</div>`
];

chartItalia.addEventListener("click", function () {
    const bodyHtml = chartItalia.outerHTML;

    // Valutiamo sempre true
    switch (true) {
        case bodyHtml.includes(arrayCondition[0]):
            showClients();
            break;
        case bodyHtml.includes(arrayCondition[1]):
            showClients();
            break;
        case bodyHtml.includes(arrayCondition[2]):
            showClients();
            break;
        case bodyHtml.includes(arrayCondition[3]):
            showClients();
            break;
        case bodyHtml.includes(arrayCondition[4]):
            showClients();
            break;
        case bodyHtml.includes(arrayCondition[5]):
            showClients();
            break;
        default:
            console.log("L'espressione non corrisponde a nessuna condizione");
    }
});

function showClients() {
    if (clientsHavana.style.display === "none") {
        clientsHavana.style.display = "block";
        clientsHavana.style.animation = "fadeIn 1s";
        scrollToClient();
    } else {
        clientsHavana.style.display = "none";
    }
}

function scrollToClient() {
    window.scrollTo({
        top: clientsHavana.offsetTop,
        behavior: "smooth"
    });
}

