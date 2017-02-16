$(document).ready(function(){
 	
 	var minNumber = 19;
 	var maxNumber = 40;
 	var randomNumber1 = randomNumberFromRange(minNumber, maxNumber);

 	var minButton = 1;
 	var maxButton = 12;

 	var button1 = randomNumberFromRange(minButton, maxButton);
 	var button2 = randomNumberFromRange(minButton, maxButton);
 	var button3 = randomNumberFromRange(minButton, maxButton);
 	var button4 = randomNumberFromRange(minButton, maxButton);

 	var score = 0;

 	var win = 0;
 	var lose = 0;
 	

 	function randomNumberFromRange(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
	}

	function addValue(button1){
		score = score + button1;

	}

	function addValue(button2){
		score = score + button2;

	}

	function addValue(button3){
		score = score + button3;

	}

	function addValue(button4){
		score = score + button4;

	}

	function updateDisplay(){
		$("#finalscore").html(score);
		$("#num").html(randomNumber1);
	}


 	$("#image1").click(function(){
 		addValue(button1);
 		console.log(score);
 		updateDisplay();

 		if ((score == randomNumber1)){
 		win++;
 		console.log("You Won!");
 		$("#Win").html("Wins: " + win);
        alert("You won that round, Play Again?");
        score = 0;
        randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
        updateDisplay();

		}

 		if((score >= randomNumber1)){
 		lose++;
 		console.log("You Lost!");
 		$("#Loss").html("Losses: " + lose);
 		alert("You lost that round, Play Again?");
 		score = 0;
 		randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
 		updateDisplay();
 		}

	})


 	$("#image2").click(function(){
 		addValue(button2);
 		console.log(score);
 		updateDisplay();

 		if ((score == randomNumber1)){
 		win++;
 		console.log("You Won!");
 		$("#Win").html("Wins: " + win);
         alert("You won that round, Play Again?");
         score = 0;
         randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
         updateDisplay();

		}

 		if((score >= randomNumber1)){
 		lose++;
 		console.log("You Lost!");
 		$("#Loss").html("Losses: " + lose);
 	 	alert("You lost that round, Play Again?");
 		score = 0;
 		randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
 		updateDisplay();
 		}

 	})


 	$("#image3").click(function(){
 		addValue(button3);
 		console.log(score);
 		updateDisplay();

 		if ((score == randomNumber1)){
 		win++;
 		console.log("You Won!");
 		$("#Win").html("Wins: " + win);
         alert("You won that round, Play Again?");
         score = 0;
         randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
         updateDisplay();
		}

 		if((score >= randomNumber1)){
 		lose++;
 		console.log("You Lost!");
 		$("#Loss").html("Losses: " + lose);
 		alert("You lost that round, Play Again?");
 		score = 0;
 		randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
 		updateDisplay();
 		}

 	})


 	$("#image4").click(function(){
 		addValue(button4);
 		console.log(score);
 		updateDisplay();
		
		if ((score == randomNumber1)){
 		win++;
 		console.log("You Won!");
 		$("#Win").html("Wins: " + win);
         alert("You won that round, Play Again?");
         score = 0;
         randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
         updateDisplay();

		}

		if((score >= randomNumber1)){
 		lose++;
 		console.log("You Lost!");
 		$("#Loss").html("Losses: " + lose);
 		alert("You lost that round, Play Again?");
 		score = 0;
 		randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
 		updateDisplay();
 		}

 	})



 });

//randomly generate a number in the .numberbox between 19-40

//give the 4 crystal buttons a random value for each game between 1-12

//when you click the crystal buttons the button value is added to the .numberbox

//the .lastscore box displays your guesses total added up after you click one of the crystal buttons

//if the .lastscore box matches the .numberbox, player wins a game

//if the .lastscore box goes over the .numberbox, player loses the game

//after player wins a game add 1 or if player looses a game subtract 1 and shown on the screen in the .winlose box and diplay if user won or lost on top of score
