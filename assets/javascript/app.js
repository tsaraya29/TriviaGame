

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
    var correctAns = ["3","2","1","4","1","4","4"];
    var quizAns = [];
    
    function checkAns(){
      var l = $("input[name=lake]:checked").val();
      var s = $("input[name=state]:checked").val();
      var r = $("input[name=river]:checked").val();
      var o = $("input[name=oceans]:checked").val();
      var t = $("input[name=trees]:checked").val();
      var n = $("input[name=rain]:checked").val();
      var c = $("input[name=corn]:checked").val();

      quizAns.push(l,s,r,o,t,n,c);    
      
      if (JSON.stringify(correctAns) === JSON.stringify(quizAns)) {
    console.log('They are equal!');
    }
      else {
        console.log("sorry, try again");
      }
  }
    //  Execute the run function.
    timesUp();



