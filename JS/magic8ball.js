window.onload = () => {
    let tsitaadid = [
        "Õige mõte. - John",
        "Toetame igatahes! - Jäneste kogu",
        "Mida sa pobised, kas sa mõnda võtet ka oskad? - Tamagotchi tiimi liige",
        "Ära muretse, küll ma homseks midagi välja mõtlen. - Lotte",
        "Kas see ei ole mitte sport? Mina ei tohi sporti teha. - Bruno",
        "Õnnetus tuleb. - Lotte",
        "Midagi ei tule siin maailmas niisama. Tasuta hammasrattaid pole olemas. - Oskar",
        "Sa võidad homme nagunii. Sa oled ju parim leiutaja meie külas. - Lotte",
        "Isver, kui ebameeldiv! - James",
        "Ema palus öelda, et sa ei kugistaks. - Lotte",
        "Ma olen lihtsalt leiutaja tütar. - Lotte", 
        "Saeme välku pooleks! - Adalbert"

    ];
    let vastus = null;
    document.getElementById("vasta_lotte").onclick = () => {
        document.getElementById("küsimus").value = "";
        if (vastus != null) {
            document.getElementById("questions_wrapper").removeChild(vastus)
        }
        vastus = document.createElement("p");
        vastus.id = "vastus";
        vastus.textContent = tsitaadid[Math.floor(Math.random() * tsitaadid.length)];
        document.getElementById("questions_wrapper").appendChild(vastus)
    }
};
