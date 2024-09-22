/*
Here is my code for the first Javascript function
  This code uses an alert, when the function is run
*/
function MyFirstFunction(){
    alert("Welcome to my Game!");
}   
MyFirstFunction();
/*
 Here is my code for the second JavaScript function 
 The code uses a button, when the function is run
*/
function rollDice(){
    //set variables for the minimum number of 1 and maximum of 6
    let minDieNumber = 1;
    let maxDieNumber = 6;

    /* The syntax Math.floor(Math.random() * (maxDieNumber - minDieNumber + 1)) + minDieNumber is used to 
    ensure that the minimum random number will always be 1 and the maximum random number will always be 6
    */

    let x = Math.floor(Math.random() * (maxDieNumber - minDieNumber + 1)) + minDieNumber;
    let y = Math.floor(Math.random() * (maxDieNumber - minDieNumber + 1)) + minDieNumber;

     //Output the results to the user 
    document.getElementById("Die1").innerHTML = " You rolled a [" + x + "] on the face of die #1";
    document.getElementById("Die2").innerHTML = " You rolled a [" + y + "] on the face of die #2";

    //add and subtract the two dice numbers together 
    let rollTotal = x + y;
    let rollEqual = x - y;

    //Process returns the results to the user by using a condition 
    if (rollEqual == 0){
     document.getElementById("Results").innerHTML = "COOL DOUBLES! Move 20 spaces!"
    }


    //if 5, 7, 9 or 11 display a message
    else if (rollTotal == 5){
     document.getElementById("Results").innerHTML = "Get on the 5 Train! Move spaces to the nearest RailRoad!"
    }
    else if (rollTotal == 7){
     document.getElementById("Results").innerHTML = "You rolled LUCKY #7! YOU WIN! Move 50 spaces and Pass Go!"
    }
    else if (rollTotal == 9){
      document.getElementById("Results").innerHTML = "SORRY 9! Move backwards 9 spaces!"
    }
    else if (rollTotal == 11){
      document.getElementById("Results").innerHTML = "You rolled 11! You Lose! Go striaght to Jail! DO NOT Pass Go!"
    }

    //if it is not a 0, 2, 5, 7, 9 or 11 display a general message
    else{
     document.getElementById("Results").innerHTML = "Regular roll... Move as many spaces equal to the sum of both dice!"
    }
}