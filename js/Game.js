		var circles = ["#c1","#c2","#c3","#c4","#c5","#c6","#c7","#c8","#c9"];
		var wrong = 0;
		var correct = 0;
		var score = 0;
		var highScore = 0;
		var interval = 1000;
		var timer;

		
		function startGame(){
			var rc;
			timer = setInterval(function(){ 
			rc = getRandomCircle();	
			if($(rc).attr('class') == 'off'){
			$(rc).attr('class','on');
			} else {
			$(rc).attr('class','off');
			}
			}, interval);
			
		}
		
		function endGame(){
		  if(gameOver() == true){
			clearInterval(timer);
			$('#c1,#c2,#c3,#c4,#c5,#c6,#c7,#c8,#c9').attr("class","off");
			displayEndGameScreen();
			}
		}
		
		function displayEndGameScreen(){
			var id = document.getElementById("game-over-screen");
			id.style.display = 'block';
			document.getElementById("final-score").innerHTML = "Final Score: " + score;
		}
		
		function speedUp(){
		if(correct > 5 && correct < 20){
			clearInterval(timer);
			interval = 700;
			timer = setInterval(function(){ 
			rc = getRandomCircle();	
			if($(rc).attr('class') == 'off'){
			$(rc).attr('class','on');
			} else {
			$(rc).attr('class','off');
			}
			}, interval);
			}
			
		else if(correct > 20 && correct < 40){
			clearInterval(timer);
			interval = 300;
			score = score + 100;
			timer = setInterval(function(){ 
			rc = getRandomCircle();	
			if($(rc).attr('class') == 'off'){
			$(rc).attr('class','on');
			} else {
			$(rc).attr('class','off');
			}
			}, interval);
			}
			
		else if(correct > 40 && correct < 55){
			clearInterval(timer);
			interval = 600;
			timer = setInterval(function(){ 
			rc = getRandomCircle();	
			if($(rc).attr('class') == 'off'){
			$(rc).attr('class','on');
			} else {
			$(rc).attr('class','off');
			}
			}, interval);
			}
			
		else if(correct > 50){
			clearInterval(timer);
			interval = 200;
			score = score + 300;
			timer = setInterval(function(){ 
			rc = getRandomCircle();	
			if($(rc).attr('class') == 'off'){
			$(rc).attr('class','on');
			} else {
			$(rc).attr('class','off');
			}
			}, interval);
			}
		}
		
		function getRandomCircle(){
			var rcircle = circles[Math.floor(Math.random() * circles.length)];
			return rcircle;
		}
		
		function setHighScore(currentScore){
			if(currentScore > highScore){
				highScore = currentScore;
			}
		}
		
		function updateCorrect(){
			correct = correct + 1;	
		}
		
		function updateWrong(){
			wrong = wrong + 1;
			if(wrong > 3){
			wrong = 3;
			}
		}
		
		function pointScored(){
		
		$('#c1').click(function(){
		if($('#c1').attr("class") == 'on'){
		$('#c1').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c1').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c2').click(function(){
		if($('#c2').attr("class") == 'on'){
		$('#c2').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c2').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c3').click(function(){
		if($('#c3').attr("class") == 'on'){
		$('#c3').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c3').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c4').click(function(){
		if($('#c4').attr("class") == 'on'){
		$('#c4').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c4').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c5').click(function(){
		if($('#c5').attr("class") == 'on'){
		$('#c5').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c5').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c6').click(function(){
		if($('#c6').attr("class") == 'on'){
		$('#c6').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c6').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c7').click(function(){
		if($('#c7').attr("class") == 'on'){
		$('#c7').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c7').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c8').click(function(){
		if($('#c8').attr("class") == 'on'){
		$('#c8').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c8').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		$('#c9').click(function(){
		if($('#c9').attr("class") == 'on'){
		$('#c9').attr("class","off");
		updateCorrect();
		speedUp();
		score = score + 100;
		} 
		else if($('#c9').attr("class") == 'off'){
		updateWrong();
		endGame();
		}
		document.getElementById("score").innerHTML = "Score: " + score;
		document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
		});
		
		}
		
		function playGame(){
			startGame();
			pointScored();
			document.getElementById("strikes").innerHTML ="Strikes: " + wrong;
			document.getElementById("score").innerHTML = "Score: " + correct;
		}
		
		function gameOver(){
		 if(wrong == 3){
			return true;
		 }
		 return false;
		}
		
		$(document).ready(function(){
		playGame();	
		});
