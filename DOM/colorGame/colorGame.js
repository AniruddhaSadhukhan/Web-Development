var colors = [];
var numSquares = 6;
var pickedColor;
var chance;

var sqs = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var msg = document.querySelector("#message");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");
var confettiElement = document.querySelector("canvas");
var chanceDisplay = document.querySelector("#chance");
var helpButton = document.querySelector("#help");
var helpContent = document.querySelector(".help");


init();

function init()
{
	//Mode Buttons
	for(var i = 0; i<mode.length;i++)
		mode[i].addEventListener("click",function(i){
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			mode[2].classList.remove("selected");
			this.classList.add("selected");
			
			numSquares = this.textContent === "Easy"? 3:this.textContent === "Hard"?6:9;
			
			resetColors();

		});
	
	//Reset Buttons
	reset.addEventListener("click",resetColors)
	
	//Help Button
	helpButton.addEventListener("click", function() 
	{
		this.classList.add("selected");
		document.querySelector("#grid").style.display = 'none';
		//Set a default mode if the "new game" button will be clicked
		numSquares = 6;
		//Display the help content
		helpContent.style.display = "block";
	});


	//Add event listeners to squares
	for (var i=0 ; i<sqs.length ; i++)
	{	
		//add click listeners to squares
		sqs[i].addEventListener("click",function(){
			//compare clicked color to picked color
			if(this.style.backgroundColor === pickedColor)
			{
				msg.textContent = "Correct !!!";
				changeColor(pickedColor);
				reset.textContent = "Play Again?";
				confetti(true);
			}
			else
			{
				this.style.backgroundColor = "#232323";
				
				chance--;
				
				if(!chance)
				{
					chanceDisplay.style.display = 'none';
					document.querySelector("#chanceLeft").style.display = 'none';
					msg.textContent = "Sorry,You Lost!!!";
					reset.textContent = "Play Again?";
					for (var i=0 ; i<sqs.length ; i++)
					{
						sqs[i].style.pointerEvents = 'none';
						if(sqs[i].style.backgroundColor !== pickedColor)
							sqs[i].style.backgroundColor = "#232323";
					}
						
				}
				else
				{
					msg.textContent = "Try Again !!!";				
					chanceDisplay.innerHTML = chance;
				}
			}
		});
	}
	
	resetColors();
}


function changeColor(color)
{
	for (var i=0 ; i<sqs.length ; i++)
	{
		//add initial colors to squares
		sqs[i].style.backgroundColor = color;
	}
	document.querySelector("h1").style.backgroundColor = color;
}

function pickColor()
{
	 return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(n)
{
	var c = [];
	
	for(var i=0;i<n;i++)
	{
		c.push(randomColor());
	}
	return c;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


function resetColors()
{
	helpContent.style.display = "none";
	helpButton.classList.remove("selected");
	document.querySelector("#grid").style.display = '';
	confetti(false);
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	
	//change display color
	var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(pickedColor);
	colorDisplay.innerHTML = "rgb(" + style("#b11212", rgb[1]) 
					+ ", " + style("#0a6b0a", rgb[2]) 
					+ ", " + style("#1c1cc4", rgb[3])
					+ style("white", ")");
	
	//change color of square and reenable them
	for (var i=0 ; i<sqs.length ; i++)
	{
		sqs[i].style.pointerEvents = 'auto';
		
		if(colors[i])
		{
			sqs[i].style.backgroundColor = colors[i];
			sqs[i].style.display = "block";
		}	
		else
			sqs[i].style.display = "none";
	}
		
	
	//reset h1 background
	document.querySelector("h1").style.backgroundColor = "steelblue";
	//change Play Again to New Colors
	reset.textContent = "New Colors";
	//change msg to blank
	msg.textContent = "";
	//calculate chance
	chance = numSquares/3 +1 ;
	chanceDisplay.innerHTML = chance;
	//reappear chance 
	chanceDisplay.style.display = null;
	document.querySelector("#chanceLeft").style.display = null;
}

function style( color, text ) 
{
	return "<span style=\"color:" + color + "\">" + text + "</style>";
}

function confetti(party)
{
	if(party)
		confettiElement.style.display = null;//Turn on
	else
		confettiElement.style.display = "none";//Turn off
}
