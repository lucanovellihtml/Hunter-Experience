// Nascondi il loading screen e mostra il contenuto dopo un breve ritardo (simulando il caricamento)
setTimeout(() => {
    document.getElementById("pageLoading").style.display = "none";
    document.getElementById("headerHavana").style.display = "block";
    document.getElementById("mainHavana").style.display = "block";
    document.getElementById("footerHavana").style.display = "block";
}, 1000);