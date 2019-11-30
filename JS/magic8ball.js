window.onload = () => {
    let tsitaadid = [
        "Õige mõte, James",
        "Toetame igatahes!"
    ];
    let vastus = null;
    document.getElementById("vasta_lotte").onclick = () => {
        document.getElementById("küsimus").value = "";
        if (vastus != null){
            document.getElementById("questions_wrapper").removeChild(vastus)
        }
        vastus = document.createElement("p");
        vastus.id = "vastus";
        vastus.textContent = tsitaadid[Math.floor(Math.random()*tsitaadid.length)];
        document.getElementById("questions_wrapper").appendChild(vastus)
    }
};
