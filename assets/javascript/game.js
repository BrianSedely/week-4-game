$(document).ready(function () {
    //placeholder functions for the football buttons
    buttonFunction();

    var playerScore = null;
    var goalScore = null;
    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);

    //array for possible regular points
    var fbPoints = [2, 3, 6];
    var fbGoals = ["SAFETY", "FIELD GOAL", "TOUCHDOWN!"];

    //array for extra points
    var fbExtraPoints = [0, 1, 2];
    var fbExtraGoals = ["MISSED POINT AFTER", "KICK IS GOOD!", "2 POINT CONVERSION"]

    //function to increment wins and reset scoreboard and FBValues for new round of play
    function won() {
        if (playerScore == goalScore) {
            wins++;
            $("#wins").text(wins);
            reset();
        }
    }

    function loss() {
        if (playerScore > goalScore) {
            losses++;
            $("#losses").text(losses);
            reset();
        }
    }

    //*** near the bottom of the code is a reset() fx that nests these next two fx's
    // updateGoalScore and updateFBValues

    //updateGoalScore refreshes the scoreboard at the top of the page, footer message, and
    //the set of footballs back to the regular set (2,3,6)
    var updateGoalScore = function () {
        //here we make a score from 14 up to 59
        goalScore = Math.floor((Math.random() * 45) + 14);

        //here we print the goalScore to the scoreboard
        $("#goalScore").text(goalScore);

        //reset playerScore counter to 0 and display on scoreboard
        playerScore = 0;
        $("#playerScore").text(playerScore);

        //update navbar footer message
        $("#message").text("GO UCF KNIGHTS!!");

        //hide the (0,1,2) footballs, show the (2,3,6)
        $("#extraPoints").hide();
        $("#regPoints").show();
    };


    //updateFBValues assigns a random value from within the applicable array
    //to the first set of footballs (2,3,6) and the second (0,1,2)
    var updateFBValues = function () {
        //assigns value to fb1 from the 3 core values of 2, 3, or 6
        fb1 = fbPoints[Math.floor(Math.random() * fbPoints.length)];
        console.log("fb1 " + fb1);
        //this part removes from the array the value that was used
        //finds the index of the number that was randomly chosen
        var indexfb1 = fbPoints.indexOf(fb1);
        fb1Goal = fbGoals[indexfb1];
        console.log("indexfb1 " + indexfb1);
        //the splice method removes the value with the corresponding index from above
        if (indexfb1 > -1) {
            fbPoints.splice(indexfb1, 1);
            fbGoals.splice(indexfb1, 1);
        }
        console.log("fbpoints2 " + fbPoints)
        //here fb2 is presented with only 2 items in the array
        fb2 = fbPoints[Math.floor(Math.random() * fbPoints.length)];

        console.log("fb2 " + fb2);

        var indexfb2 = fbPoints.indexOf(fb2);
        fb2Goal = fbGoals[indexfb2];
        console.log("indexfb2 " + indexfb2);
        //the splice method removes the value with the corresponding index from above
        if (indexfb2 > -1) {
            fbPoints.splice(indexfb2, 1);
            fbGoals.splice(indexfb2, 1);
        }
        console.log("fbpoints3 " + fbPoints)
        //here fb3 is presented with only 1 item left in the array
        fb3 = fbPoints[Math.floor(Math.random() * fbPoints.length)];

        console.log("fb3 " + fb3);


        fb3Goal = fbGoals[0];


        //assigns value to fb4 from the 3 extra point values of 2, 1, or 0
        fb4 = fbExtraPoints[Math.floor(Math.random() * fbExtraPoints.length)];
        console.log("fb4 " + fb4);
        //this part removes from the array the value that was used
        //finds the index of the number that was randomly chosen
        var indexfb4 = fbExtraPoints.indexOf(fb4);
        fb4Goal = fbExtraGoals[indexfb4];
        console.log("indexfb4 " + indexfb4);
        //the splice method removes the value with the corresponding index from above
        if (indexfb4 > -1) {
            fbExtraPoints.splice(indexfb4, 1);
            fbExtraGoals.splice(indexfb4, 1);
        }
        console.log("fbpoints5 " + fbExtraPoints)
        //here fb5 is presented with only 2 items in the array
        fb5 = fbExtraPoints[Math.floor(Math.random() * fbExtraPoints.length)];

        console.log("fb5 " + fb5);

        var indexfb5 = fbExtraPoints.indexOf(fb5);
        fb5Goal = fbExtraGoals[indexfb5];
        console.log("indexfb5 " + indexfb5);
        //the splice method removes the value with the corresponding index from above
        if (indexfb5 > -1) {
            fbExtraPoints.splice(indexfb5, 1);
            fbExtraGoals.splice(indexfb5, 1);
        }
        console.log("fbpoints6 " + fbExtraPoints)
        //here fb6 is presented with only 1 item left in the array
        fb6 = fbExtraPoints[Math.floor(Math.random() * fbExtraPoints.length)];

        console.log("fb6 " + fb6);

        fb6Goal = fbExtraGoals[0];
    };

    //*** next 50 lines are button interactions and related fx's
    // this fx increases and displays playerscore by the assigned random value when a
    //football is cliked. it also tests if a win or lose scenario has occured
    //and if a touchdown was selected, it hides the regFB set (2,3,6) and shows the
    //extraPointFBSet (0,1,2)
    function fbRegSet(a, b) {
        playerScore = a + playerScore;
        $("#playerScore").text(playerScore);
        won();
        loss();
        $("#message").text(b).addClass("score");
        if (a == 6) {
            $("#extraPoints").show();
            $("#regPoints").hide();
        }
    }
    //calling fx fbRegSet when a btn is clicked
    $("#btnFB1").on("click", function () {
        fbRegSet(fb1, fb1Goal)
    })
    $("#btnFB2").on("click", function () {
        fbRegSet(fb2, fb2Goal)
    })
    $("#btnFB3").on("click", function () {
        fbRegSet(fb3, fb3Goal)
    })

    //similar to fbRegSet fx only this one applies to extra points
    function fbExtraSet(a, b) {
        playerScore = a + playerScore;
        console.log(playerScore);
        $("#playerScore").text(playerScore);
        won();
        loss();
        $("#message").text(b).addClass("score");
        if (a > -1) {
            $("#regPoints").show();
            $("#extraPoints").hide();
        }
    }

    //running fbExtraSet when extra point buttons are visible and clicked
    $("#btnFB4").on("click", function () {
        fbExtraSet(fb4, fb4Goal)
    })
    $("#btnFB5").on("click", function () {
        fbExtraSet(fb5, fb5Goal)
    })
    $("#btnFB6").on("click", function () {
        fbExtraSet(fb6, fb6Goal)
    })



    // Execute on page load.
    var reset = function () {
        updateFBValues();
        updateGoalScore();
    };
    reset();

});

//the football image buttons
function buttonFunction() {
    $("#btnFB1")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
    $("#btnFB2")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
    $("#btnFB3")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
    $("#btnFB4")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
    $("#btnFB5")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
    $("#btnFB6")
        .text("")
        .append("<img src=assets/images/football.png class=img-responsive  />");
}