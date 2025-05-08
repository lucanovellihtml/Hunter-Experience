function showFormatCollab() {
    var list = document.getElementById("listCollabHavana");
    if (list.style.display === "none") {
        list.style.display = "block";
        list.style.animation = "fadeIn 1s";

    } else {
        list.style.display = "none";
    }
}