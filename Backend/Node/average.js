function average(scores)
{
	var total = 0;
	
	scores.forEach(function(score)
	{
		total += score;
	});
	
	var avg = total/scores.length;
	
	console.log(Math.round(avg));
}

var scores = [90,98,89,100,100,86,94];
average(scores);

var scores2 = [40,65,77,82,80,54,73,63,95,49];
average(scores2);
