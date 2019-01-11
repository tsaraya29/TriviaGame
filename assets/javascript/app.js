

//Set Interval to 30 seconds
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

  
    //  The run function sets an interval
    //  that runs the decrement function once a second.
      function timesUp() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $(".timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      $("#quiz").hide();
    }
    //Check answer
    var correctAnswers
    function checkAnswer(){

    }
    //  Execute the run function.
    timesUp();



