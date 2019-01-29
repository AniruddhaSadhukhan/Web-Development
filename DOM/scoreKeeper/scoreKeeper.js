var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var inp = document.querySelector("input");
var maxScoreDisplay = document.querySelector("h5 span");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1Score = 0,p2Score = 0,gameOver = false,maxScore = 5


p1.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === maxScore) 
		{
			gameOver = true;
			alert("Player 1 wins");
			p1Display.classList.add("winner");
		}
	}	
})

p2.addEventListener("click",function(){
	if(!gameOver)
	{
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === maxScore)
		{
			gameOver = true;
			alert("Player 2 wins");
			p2Display.classList.add("winner");
		}
	}	
})

function reset()
{
	p1Score = p2Score = 0;
	gameOver = false;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}
resetButton.addEventListener("click",reset)

inp.addEventListener("change",function(){
	maxScore = Number(this.value);
	maxScoreDisplay.textContent = maxScore;
	reset();
})






