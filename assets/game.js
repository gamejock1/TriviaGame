$(document).ready(function () {
  var wins = 0;
  var losses = 0;
  var arrayCounter = 0;
  var timerId = 0;
  var onesecond = 0;
  var questionarray = [
    question1 = {
      question: "What size engine came in a base model 1969 Camaro?",
      choices: ["350ci", "327ci", "289ci", "400ci"],
      answer: "350ci",
    }
    ,
    question2 = {
      question: "What is the coolest car ever?",
      choices: ["Firebird", "Camaro", "Chevelle", "Corvette"],
      answer: "Chevelle",
    }
    ,
    question3 = {
      question: "Which is the best selling car?",
      choices: ["Firebird", "Camaro", "Chevelle", "Corvette"],
      answer: "Camaro",
    }
    ,
    question4 = {
      question: "Which of these does't match the others?",
      choices: ["Firebird", "Camaro", "Chevelle", "Corvette"],
      answer: "Firebird",
    }
  ]



  function startTimer() {
    if (arrayCounter < questionarray.length) {
      var timeLeft = 15;
      var elem = document.getElementById('timer1');
      timerId = setInterval(countdown, 1000);

      question(questionarray[arrayCounter])
    }
    else {
      lastPage();
    }

    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        arrayCounter++;
        losses++;
        setAnswer("Out Of Time!");
      }
      else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
  }



  function question(questioninput) {
    $("#question").html(questioninput.question);
    $("#choice1").html(questioninput.choices[0]);
    $("#choice2").html(questioninput.choices[1]);
    $("#choice3").html(questioninput.choices[2]);
    $("#choice4").html(questioninput.choices[3]);
  }


  function lastPage() {
    $("#timer1").empty();
    $("#question").html("Wins: " + wins);
    $("#choice1").html("Losses: " + losses);
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();

  }



  $(".choices").on("click", function () {
    clearTimeout(timerId)
    if (this.innerHTML === questionarray[arrayCounter].answer) {
      wins++;
      arrayCounter++;
      setAnswer("<h1>Correct</h1>");
      console.log("yes!");
    }

    else {
      losses++;
      arrayCounter++;
      setAnswer("<h1>Incorrect</h1>")
      console.log("nope!")
    }

  });





  function setAnswer(userGuess) {
    var timeleft = 0;
    onesecond = setInterval(answer2, 500);
    function answer2() {
      if (timeleft >= 1) {
        startTimer();
        clearTimeout(onesecond);
      }
      else {
        timeleft++;
        $("#timer1").empty();
        $("#question").html(userGuess);
        $("#choice1").empty();
        $("#choice2").empty();
        $("#choice3").empty();
        $("#choice4").empty();
      }

    }
  }
startTimer();
})

