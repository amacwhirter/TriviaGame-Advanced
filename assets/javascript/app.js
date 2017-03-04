$(document).ready(function() {


    //set up Global variables
    var totalQuiz = 15,
        correctAnswer = 0,
        incorrectAnswer = 0,
        noAnswer = 0,
        questionIndex = 0,
        count = 60;

    //set up questions and answers
    var questions = [{
        question: "What is Canada's national animal?",
        choices: ["Beaver", "Moose", "Goose", "Polar Bear"],
        answer: 0
    }, {
        question: "What is Canada's national sport?",
        choices: ["Rugby", "Curling", "Lacrosse", "Baseball"],
        answer: 2
    }, {
        question: "How many provinces does Canada have?",
        choices: ["12", "10", "24", "18"],
        answer: 1
    }, {
        question: "Canada is a bilingual country. English is one language, what is the other?",
        choices: ["French", "Spanish", "Portuguese", "Mandarin"],
        answer: 0
    }, {
        question: "How many oceans border Canada?",
        choices: ["1", "2", "3", "4"],
        answer: 2
    }, {
        question: "The name, Canada, originates from a Saint-Lawrence Iroquoian word kanata... what does it mean in Iroquoian?",
        choices: ["Beautiful", "Wildlife", "Cold Land", "Village"],
        answer: 3
    }, {
        question: "Canada is considered the ________ largest country in the world.",
        choices: ["1st", "2nd", "3rd", "4th"],
        answer: 1
    }, {
        question: "What is the capital city of Canada?",
        choices: ["Toronto", "Ottawa", "Vancouver", "Calgary"],
        answer: 1
    }, {
        question: "What is a Canadian one dollar coin called?",
        choices: ["Loonie", "Dollie", "Single", "Flip"],
        answer: 0
    }, {
        question: "What is a Canadian two dollar coin called?",
        choices: ["Double", "Twos", "Coiner", "Toonie"],
        answer: 3
    }, {
        question: "What do Canadians call doughnut holes?",
        choices: ["Fillers", "Timbits", "Timbites", "Doles"],
        answer: 1
    }, {
        question: "What is Canada's famous coffee shop?",
        choices: ["Tim Martins", "Tim Bucks", "Tim Jacksons", "Tim Hortons"],
        answer: 3
    }, {
        question: "Which actor is Canadian?",
        choices: ["Ben Affleck", "Leonardo DiCaprio", "Ryan Reynolds", "Johnny Depp"],
        answer: 2
    }, {
        question: "What is Canada's version of 'MTV'?",
        choices: ["CMTV", "More Music", "Much Music", "MTVC"],
        answer: 2
    }, {
        question: "Who let the dogs out?",
        choices: ["Who?", "Who?", "Who?", "Who?"],
        answer: 2
    }];

    //load new question to DOM
    function loadQuestion() {
        //if we have not completed all the questions..
        if (questionIndex < questions.length) {
            //display question
            $('#questions').html(questions[questionIndex].question);
            //display possible answers
            $("#0").text(questions[questionIndex].choices[0]);
            $("#1").text(questions[questionIndex].choices[1]);
            $("#2").text(questions[questionIndex].choices[2]);
            $("#3").text(questions[questionIndex].choices[3]);
        } else {
            clearInterval(timer);
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCount();
        }
    };

    //user selection - check answer - if else for correct or incorrect

    $(".mc").click(function() {
        userGuess = $(this).attr("id");
        //check for correct answer
        if (userGuess == questions[questionIndex].answer) {
            correct = correctAnswer++;
            alert("correct!");
            console.log(correct + " correct");
        } else {
            incorrect = incorrectAnswer++;
            alert("Incorrect!");
            console.log(incorrect + " incorrect");
        }
        questionIndex++;
        loadQuestion();
    });

    //score count for result page

    //check how many questions were blank by subtracting the if/else values from above from the total number of questions.
    function scoreCount() {
        var totalAnswered = correctAnswer + incorrectAnswer;
        console.log(totalAnswered);
        if (totalAnswered !== totalQuiz) {
            blank = totalQuiz - totalAnswered;
        }else{
            blank = 0;
        }

        $('#correct').html(" " + correctAnswer);
        $('#incorrect').html(" " + incorrectAnswer);
        $("#blank").html(" " + blank);
    } //end scoreCount

    //hide quiz until click play\\
    $("#quiz, #results").hide();

    //questions show and timer begins\\

    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");
        loadQuestion();

        //Setup timer to countdown from 60 seconds total to answer all questions

        var startTimer = setInterval(function() {
            count--;
            $("#countdown").html(count);

            //if user runs out of time before completing questions, go to results page.

            if (count === 0) {
                clearInterval(timer);
                $("#quiz, #timer").hide("slow");
                $("#results").show("slow");
                scoreCount();
            }
        }, 1000);
    });

    //restart button refreshes page back to start screen//

    $("#restart").click(function() {
        location.reload();
    });

});
