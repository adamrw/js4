var quantity=prompt("How many disaster victims do you wish to enter?");
var infoname=[];
var infophone=[];
var infoaddy=[];
for (var i=0; i<quantity; i++) {
			var vicname=prompt("Please enter the name of the victim");
				infoname.push(vicname);
			var vicphone=prompt("Please enter the phone number of the victim");
				infophone.push(vicphone);
			var vicaddy=prompt("Please enter the address of the victim");
				infoaddy.push(vicaddy);

	console.log(infoname);
};

var volunteers=prompt("How many volunteers would you like to enter?");
var volinfoname=[];
var volinfophone=[];
var volinfoaddy=[];
for (var i=0; i<volunteers; i++) {
			var volname=prompt("What is the name of the volunteer?");
				volinfoname.push(volname);
			var volphone=prompt("Please enter the phone number of the volunteer")
				volinfophone.push(volphone);
			var voladdy=prompt("What is the address of the volunteer?");
				volinfoaddy.push(voladdy)

	console.log(volinfoname)
};

alert("You have " + quantity + " victims in need." + " You have " + volunteers + " volunteers. " + "The victims are: " + infoname + ". " + "The volunteers are: " + volinfoname + ".");

