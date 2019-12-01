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
            question: "Mis oli Alberti ainuke sõber enne Lotte ja Brunoga sõbrunemist?",
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
            correctAnswer: "b"
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
            question: "Mida oskas teha robot, mille ideed Adalbert Oskarilt varastada tahtis?",
            answers: {
                a: "Ringe joonistada",
                b: "Sokke triikida",
                c: "Muusikat järgi tantsida",
            },
            correctAnswer: "a"
        }
    ];

    buildQuiz();

    submitButton.addEventListener("click", showResults);
})();