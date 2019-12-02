(function() {
    function buildQuiz() {

        const output = [];


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }


            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
            );
        });


        quizContainer.innerHTML = output.join("");
    }

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll(".answers");


        let numCorrect = 0;


        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;


            if (userAnswer === currentQuestion.correctAnswer) {

                numCorrect++;


                answerContainers[questionNumber].style.color = "lightgreen";
            } else {

                answerContainers[questionNumber].style.color = "red";
            }
        });


        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [{
            question: "Kus elab Lotte?",
            answers: {
                a: "Lõunamaal",
                b: "Leiutajatekülas",
                c: "Kuu peal"
            },
            correctAnswer: "b"
        },
        {
            question: "Kes on Lotte parim sõber?",
            answers: {
                a: "Bruno",
                b: "Albert",
                c: "Susumu"
            },
            correctAnswer: "a"
        },
        {
            question: "Mis toitu oskab Lotte ema Anna eriti hästi teha?",
            answers: {
                a: "Puder",
                b: "Pannkoogid",
                c: "Porgandipirukas"
            },
            correctAnswer: "b"
        }, {
            question: "Mis on nende muttide nimed, kelle suvemaja asub Jaapanis?",
            answers: {
                a: "Marc ja Carl",
                b: "Peter ja Paul",
                c: "John ja James",
            },
            correctAnswer: "c"
        }, {
            question: "Kes oli Alberti ainuke sõber enne Lotte ja Brunoga sõbrunemist?",
            answers: {
                a: "Roheline kurk",
                b: "Oranž porgand",
                c: "Punane õun",
            },
            correctAnswer: "a"
        }, {
            question: "Kes üritas leiutiste võistlusel tellitest saia teha?",
            answers: {
                a: "Väino",
                b: "Jaak",
                c: "Adalbert",
            },
            correctAnswer: "a"
        }, {
            question: "Mille leiutas Lotte vanavanaisa vend?",
            answers: {
                a: "Pudru",
                b: "Pesumasina",
                c: "Martsipani",
            },
            correctAnswer: "c"
        }, {
            question: "Millist nimetatud taimedest polnud selles raamatus, mille vahelt Lotte ja Bruno leidsid Sususmu?",
            answers: {
                a: "Para Discocactus",
                b: "Preulo Parodia",
                c: "Cactae Lupi",
            },
            correctAnswer: "b"
        }, {
            question: "Kelle abi kasutab Adalbert, et leiutised tööle saada ilma reaalse tehnikata?",
            answers: {
                a: "Sohvi",
                b: "Lotte",
                c: "Alberti",
            },
            correctAnswer: "a"
        }, {
            question: "Kes leiutas moosi pannkookide peale?",
            answers: {
                a: "Lotte ema Anna",
                b: "Lotte vanaema",
                c: "Lotte vanatädi",
            },
            correctAnswer: "a"
        }, {
            question: "Lõpeta lause: Lotte kurivaim, ...",
            answers: {
                a: "...selg läks paigast ära!",
                b: "...ei tohi liiga palju sporti teha!",
                c: "...poisid, tooge suhkurt!"
            },
            correctAnswer: "c"
        }, {
            question: "Kes ütles: 'Oled sina alles paksuke, täitsa pallike valmis!'?",
            answers: {
                a: "Ville",
                b: "vihmauurija Voldemar",
                c: "Fred"
            },
            correctAnswer: "b"
        }, {
            question: "Millises filmis öeldi: 'Ja mina mõtlesin, et te olete jooksja!'?",
            answers: {
                a: "Leiutajateküla Lotte",
                b: "Lotte ja kuukivi saladus",
                c: "Lotte ja kadunud lohed"
            },
            correctAnswer: "b"
        }, {
            question: "'Aga ma ju küpsetasin pirukaid kaasa!' - mis pirukatega on tegu?",
            answers: {
                a: "Porgandipirukas",
                b: "Lihapirukas",
                c: "Kapsapirukas"
            },
            correctAnswer: "c"
        }, {
            question: "Kust leidsid Lotte ja Tik punase kivi?",
            answers: {
                a: "Ville juurest",
                b: "Fredi juurest",
                c: "Pingviinide saarelt"
            },
            correctAnswer: "c"
        }, {
            question: "Lõpeta lause: 'On jah...'",
            answers: {
                a: "...kellukesed!",
                b: "...porgand!",
                c: "...kivikesed!"
            },
            correctAnswer: "b"
        }, {
            question: "Lõpeta: 'Kes mind hüüab? Juba tulen!...'",
            answers: {
                a: "...Siin ma olen!",
                b: "...Mis vaja on?",
                c: "...Tere!"
            },
            correctAnswer: "a"
        }, {
            question: "Matkatarkus number 5:",
            answers: {
                a: "Üks õige rännumees peab lihtsalt uskuma neid asju.",
                b: "Üks õige rännumees ei lähe kunagi ilma vihmavarjuta reisile.",
                c: "Merest püütud pannkoogid on kõige magusamad."
            },
            correctAnswer: "c"
        }, {
            question: "Lõpeta: 'Praegu on aeglane salm. Kohe tuleb kiirem salm, siis..'",
            answers: {
                a: "...saamegi minema hakata.",
                b: "...jõuamegi kohale.",
                c: "...sõidame kiiremini."
            },
            correctAnswer: "c"
        }, {
            question: "Esimene asi judos:",
            answers: {
                a: "Sina kukud õigesti.",
                b: "Sina kummardad.",
                c: "Sina võtad vastasest kinni."
            },
            correctAnswer: "b"
        }, {
            question: "Lõpeta: 'Kes suvel ei harjuta,...'",
            answers: {
                a: "...see ei jõua talvel sentimeetritki sõita.",
                b: "...on talvel hädas.",
                c: "...ei jaksa talvel uisutada."
            },
            correctAnswer: "a"
        }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();