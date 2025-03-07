function addLink() {
    let title = document.getElementById("title").value;
    let link = document.getElementById("link").value;

    if (title && link) {
        let list = document.getElementById("linkList");
        let listItem = document.createElement("li");

        listItem.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
        list.appendChild(listItem);

        // Pulisce i campi dopo l'aggiunta
        document.getElementById("title").value = "";
        document.getElementById("link").value = "";
    } else {
        alert("Inserisci un titolo e un link valido!");
    }
}
