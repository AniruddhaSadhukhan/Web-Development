//Constructor function for vehicle
function Vehicle(make,model,year)
{
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}

//Every object created from Vehicle constructor have function turnOn setting isRunning to true
Vehicle.prototype.turnOn = function(){
	this.isRunning = true;
}

//Every object created from Vehicle constructor have function turnOff setting isRunning to false
Vehicle.prototype.turnOff = function(){
	this.isRunning = false;
}

//Every object created from Vehicle constructor have function honk returning "beep" if isRunning is true 
Vehicle.prototype.honk = function(){
	if(this.isRunning)
	{
		return "beep";
	}
	else
	{
		return "zzz";
	}
}

var jeep = new Vehicle("jeep","A2C","1998");
var taxi = new Vehicle("taxi","XT8","1875");
var car  = new Vehicle("car","BNM","2000");


console.log("All off");
console.log(jeep.honk());
console.log(taxi.honk());
console.log(car.honk());

jeep.turnOn();
car.turnOn();

console.log("taxi off");
console.log(jeep.honk());
console.log(taxi.honk());
console.log(car.honk());

taxi.turnOn();
jeep.turnOff();
car.turnOff();

console.log("taxi on");
console.log(jeep.honk());
console.log(taxi.honk());
console.log(car.honk());

