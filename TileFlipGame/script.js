var imgsources = [];
var grid;
var imgs;
var msg;
var clicks;
var seconds;
var gameTimer;
function init(){
	imgsources = [];
	imgsources = [{name:"blue.gif",paired:false},{name:"red.gif",paired:false},{name:"red.gif",paired:false},{name:"blue.gif",paired:false},
				   {name:"three.gif",paired:false},{name:"three.gif",paired:false},{name:"six.gif",paired:false},{name:"five.gif",paired:false},
				   {name:"seven.gif",paired:false},{name:"four.gif",paired:false},{name:"seven.gif",paired:false},{name:"eight.gif",paired:false},
				   {name:"six.gif",paired:false},{name:"five.gif",paired:false},{name:"eight.gif",paired:false},{name:"four.gif",paired:false}
	];
	grid = document.getElementById("grid");
	imgs = grid.getElementsByTagName("img");
	msg = "";
	clicks = 0;
	seconds = 0;
	timer_start();
	
	//document.cookie = "visit="+1;
	//show_cookies();
	
}
function timer_start(){
	document.getElementById("timer").innerHTML = seconds++;
	gameTimer = setTimeout(timer_start,1000);
}
document.getElementById("play").onclick = function(){ 
	clearTimeout(gameTimer);init();myfunc();
	document.getElementById("result").innerHTML = "Result will be shown here";
	document.getElementById("clickcount").innerHTML = "Clicks: "+clicks;
	read_cookies();
	 loadGame();
	}

//cookie related functions starts here
function set_cookies(){
	if(user_exists(document.getElementById("user").value)){
		//welcome him back
		//just append his score values, 
		var key = get_userkey(document.getElementById("user").value); 
		var clickvalue = clicks+";";//document.getElementById("score").value +";";
		var secondsvalue = seconds+";";

		var clickstring = get_clickstring(key);
		var secondstring = get_secondstring(key);

		if(clickstring!=null)
		document.cookie = "clicks"+key+"="+clickstring+","+clickvalue;
		else
		document.cookie = "clicks="+clickvalue;			//storing score for the first time

	if(secondstring!=null)
			document.cookie = "seconds"+key+"="+secondstring+","+secondsvalue;
		else
		document.cookie = "seconds="+secondsvalue;			//storing score for the first time

		//alert(document.cookie);
		//alert("Bravo!you solved it, "+document.getElementById("user").value);
	}
	else
	{

		//create new user
		if(document.cookie.length>0)
		var i = get_lastkey()+1;
		else
		var i = 0; //brand new user

		var namevalue = document.getElementById("user").value + ";";
		var clickvalue = clicks+";"; // document.getElementById("score").value +";";
		var secondsvalue = seconds+";";
		document.cookie = "user"+i+"="+namevalue;
		document.cookie = "clicks"+i+"="+clickvalue;
		document.cookie = "seconds"+i+"="+secondsvalue;
	//alert(namevalue);	
	}
}
function get_clickstring(j){
	var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	
	for(var i=0;i<cookiesarray.length;i++)
	{
		name = cookiesarray[i].split('=')[0];
      value = cookiesarray[i].split('=')[1];
    	if(name.trim()=="clicks"+j)
      	{

	      		//values = value.split(',');
      			break;
      	}	
     }
     console.log(value);
return value;

}
function get_secondstring(j){
	var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	
	for(var i=0;i<cookiesarray.length;i++)
	{
		name = cookiesarray[i].split('=')[0];
      value = cookiesarray[i].split('=')[1];
    	if(name.trim()=="seconds"+j)
      	{

	      		//values = value.split(',');
      			break;
      	}	
     }
     console.log(value);
return value;

}

function user_exists(nvalue){
	console.log(nvalue);

var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	var existflag = false;
	for(var i=0;i<cookiesarray.length;i++)
	{
		name = cookiesarray[i].split('=')[0];
  	    value = cookiesarray[i].split('=')[1];
    	if(name.indexOf("user")>-1)
		    {
		    	console.log("val="+value);
		    	if(value.trim()==nvalue.trim())
		    	{
		    		existflag = true;
		    		break;
		    	}
		    	console.log(nvalue.charAt(value.length));
		    }
}
	return existflag;
}
function get_userkey(nvalue){
	console.log(nvalue);

var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	var existflag = false;
	var key = "";
	for(var i=0;i<cookiesarray.length;i++)
	{
		name = cookiesarray[i].split('=')[0];
  	    value = cookiesarray[i].split('=')[1];
    	if(name.indexOf("user")>-1)
		    {
		    	if(value.trim()==nvalue.trim())
		    	{
		    		existflag = true;
		    		key = name.charAt(name.length-1);
		    		break;
		    	}
		    	//console.log(nvalue.charAt(value.length));
		    }
}
	console.log(key);
	return key;
}
function get_lastkey(){
	

var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	var key = "";
	var i = cookiesarray.length-1;
	
		name = cookiesarray[i].split('=')[0];
  	    value = cookiesarray[i].split('=')[1];
    	if(name.indexOf("user")>-1)
		    key = name.charAt(name.length-1);

	console.log(key);
	return key;
}

function read_cookies(){
if(user_exists(document.getElementById("user").value)){
	    document.getElementById("welcomeDiv").innerHTML = "Welcome back user,<h3>"+document.getElementById("user").value +"</h3><br>Timer Seconds<br>";
		var key = get_userkey(document.getElementById("user").value); 
		var clickstring = get_clickstring(key);
		var secondstring = get_secondstring(key);

		var clicksarray = clickstring.split(',');
		var secondsarray = secondstring.split(',');
		
		document.getElementById("clicks").innerHTML ="User Click History<br>";
		var ccount = 0;
		var scount = 0;
		for(var i=clicksarray.length-1;i>=0;i--)
		{

			document.getElementById("clicks").innerHTML+=clicksarray[i]+"<br>";
			ccount++;
			if(ccount==10)
				break;
		}

	document.getElementById("seconds").innerHTML ="User Time History(seconds)<br>";
		for(var i=secondsarray.length-1;i>=0;i--)
		{
			document.getElementById("seconds").innerHTML+=secondsarray[i]+"<br>";
			scount++;
			if(scount==10)
				break;
		}

	}
	else
		{
			document.getElementById("welcomeDiv").innerHTML = "Welcome new user,<h3>"+document.getElementById("user").value +"</h3><br>Timer Seconds<br>";
			document.getElementById("clicks").innerHTML = "no history click records";
			document.getElementById("seconds").innerHTML = "no history time records";			
		}

/*
	var allcookies = document.cookie;
	var cookiesarray = allcookies.split(';');
	alert(cookiesarray.length);
	for(var i=0;i<cookiesarray.length;i++)
	{
		name = cookiesarray[i].split('=')[0];
      value = cookiesarray[i].split('=')[1];
      if(name.indexOf("clicks")>-1)
      	{
      		values = value.split(',');
      		for(var j=0;j<values.length;j++)
      			alert(values[j]);
      	}	
      else
            alert("Key is : " + name + " and Value is : " + value);
	}*/
}


//cookie related function ends here


function isGameOver(){
	count = 0;
	for(var i=0;i<imgsources.length;i++){
		if(imgsources[i].paired) count++;
	}
	if(count == imgsources.length)
	{document.getElementById("result").innerHTML += " game over!"; clearTimeout(gameTimer);
		alert("Bravo! You solved it! "+document.getElementById("user").value);
	 //document.cookie = "userclicks"+clicks+"="+clicks;
	 //document.cookie = "timer="+gameTimer;
	  //console.log(document.cookie);
	  set_cookies();
	}
	document.getElementById("clickcount").innerHTML = "Clicks: "+clicks;

}

function myfunc(){
	for(i=0;i<imgs.length;i++)
				{
					if(!imgsources[i].paired) imgs[i].setAttribute("src","smiley.gif");
				}
}

function hello(c){
		if(c%2==0) setTimeout(myfunc,1000);
		isGameOver();
}

function loadGame(){
var i;
var toggle;
console.log("image length is.."+imgs.length);
for(i=0;i<imgs.length;i++)
{	
	imgs[i].onclick = (function(index){
	return function(){ 
	clicks += 1;
		imgs[index].setAttribute("src",imgsources[index].name);
		var count = 0;
	if(msg!="")
	{
		console.log("topM: before "+msg);
		msg += ","; msg += imgs[index].getAttribute("src");
		console.log("topM: after "+msg);
		msgarr = msg.split(",");
		if(msgarr.length == 2)
		{
			if(msgarr[0]==msgarr[1])
			{ 			
			for(var k=0;k<imgsources.length;k++)
				if(imgsources[k].name == msgarr[0].trim()) imgsources[k].paired = true; 
			}
			msg = ""; msgarr = [];
		}
	 }
		else
		{	console.log("M: before "+msg);
			msg += imgs[index].getAttribute("src");
				console.log("M: after "+msg);}

		for(var j=0;j<imgs.length;j++){
			if(imgs[j].getAttribute("src")!="smiley.gif")
				count += 1; 
		}
		console.log("COUNT="+count);
		hello(count);

	};})(i);
}

}

function enablePlay(){
               if(document.getElementById("user").value.length>0)
                document.getElementById("sbutton").disabled =false;
            else
            	document.getElementById("sbutton").disabled =true;
                       }
function hideme(){
	document.getElementById("formdiv").style.visibility = 'hidden';
	document.getElementById("gameDiv").style.visibility = 'visible';

init();
read_cookies();
loadGame();

//set_cookies();
}

window.onload = function(){
document.getElementById("gameDiv").style.visibility = 'hidden';

}