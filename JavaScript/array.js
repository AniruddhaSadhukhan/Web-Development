//Same as the default forEach
Array.prototype.myForEach = function(func)
{
	for(var i = 0;i<this.length;i++)
		func(this[i],i);
}


var ans;
var arr = []
while(true)
{
	ans = Number(prompt("Enter Option: "));
	if(ans===1)
		insert()
	else if(ans===2)
		del()
	else if(ans===3)
		view()
	else if(ans===4)
		sum()
	else if(ans===5)
		max()
	else if(ans===6)
		rev()
	else if(ans===7)
		isUnique()
	else if(ans===8)
		break;
	else
		alert("Wrong option");
}

function insert()
{
	arr.push(prompt("Insert item"));
}

function del()
{
	arr.splice(prompt("Delete item index? :"),1);
	alert("Item Deleted");
}

function view()
{
	console.log("**************************");
	arr.myForEach(function(item,i){
		console.log(i+": "+item)
	});
	console.log("**************************");
	alert(arr);
}

function rev()
{
	var revArr = [];
	console.log("**************************");
	for(var i=arr.length-1;i>=0;i--)
	{
		revArr.push(arr[i]);
		console.log(arr[i]);
	}
	console.log("**************************");
	alert(revArr);
}

function sum()
{
	var s=0;
	arr.myForEach(function(i)
	{
		s+=Number(i)
	})
	alert("Sum is = "+s);	
}

function max()
{
	var m=arr[0];
	for(var i=1;i<arr.length;i++)
		if(arr[i]>m)
			m=arr[i];
	alert("Max is = "+m);
}

function isUnique()
{
	var m=arr[0];
	for(var i=1;i<arr.length;i++)
		if(arr[i]!==m)
		{
			alert("Items are not unique ");
			return
		}
	alert("Items are unique ");		
}


