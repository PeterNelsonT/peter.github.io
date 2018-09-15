var r;
var g;
var b;
var sqr;
var gus;
var s;
function rndclr()
{
	r=Math.floor(Math.random()*256);
	g=Math.floor(Math.random()*256);
	b=Math.floor(Math.random()*256);
}

function init()
{
	sqr=document.querySelectorAll(".square");
	for(var i=0;i<s;i++)
	{
		rndclr();
		sqr[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
	}
	for(var i=s;i<sqr.length;i++)
	{
		rndclr();
		sqr[i].style.backgroundColor="black";
	}
	gus=sqr[Math.floor(Math.random()*s)].style.backgroundColor;
	document.querySelectorAll("span")[0].innerHTML=gus.toUpperCase();
}

function play()
{
	for(var i=0;i<s;i++)
	{
		sqr[i].addEventListener("click",function(){
		
		if(this.style.backgroundColor==gus)
		{
			document.querySelector(".content").style.backgroundColor=gus;
			for(var j=0;j<s;j++)
			{
				sqr[j].style.backgroundColor=gus;
			}
			document.querySelectorAll("span")[1].style.color="green";
			document.querySelectorAll("span")[1].innerHTML="Correct !";
			document.querySelectorAll("button")[0].innerHTML="Play Again".toUpperCase();
		}
		else
		{
			document.querySelectorAll("span")[1].style.color="red";
			document.querySelectorAll("span")[1].innerHTML="Try Again";
			this.style.backgroundColor="black";
		}
	})
	}
	document.querySelectorAll("button")[0].addEventListener("click",function(){

		if(document.querySelectorAll("button")[0].innerHTML!="NEW COLORS")
		{
		document.querySelectorAll("span")[1].innerHTML="";
		document.querySelectorAll("button")[0].innerHTML="NEW COLORS";
		document.querySelector(".content").style.backgroundColor="steelblue";
		init();
		play();	
		}
		// document.location.reload();
		else
		{
		document.querySelectorAll("span")[1].innerHTML="";
		document.querySelectorAll("button")[0].innerHTML="NEW COLORS";
		document.querySelector(".content").style.backgroundColor="steelblue";
		init();
		play();
		}
	})
}
// function level()
// {
	document.querySelectorAll("button")[1].addEventListener("click",function(){
		document.querySelectorAll("span")[1].innerHTML="";
		document.querySelectorAll("button")[0].style.color="steelblue";
		document.querySelectorAll("button")[0].innerHTML="NEW COLORS";
		document.querySelector(".content").style.backgroundColor="steelblue";
		s=3;
		document.querySelectorAll("button")[1].style.backgroundColor="steelblue";
		document.querySelectorAll("button")[1].style.color="white";
		document.querySelectorAll("button")[2].style.backgroundColor="white";
		document.querySelectorAll("button")[2].style.color="steelblue";
		init();
		play();
	})
	document.querySelectorAll("button")[2].addEventListener("click",function(){
		document.querySelectorAll("span")[1].innerHTML="";
		document.querySelectorAll("button")[0].style.color="steelblue";
		document.querySelectorAll("button")[0].innerHTML="NEW COLORS";
		document.querySelector(".content").style.backgroundColor="steelblue";
		document.querySelectorAll("button")[2].style.backgroundColor="steelblue";
		document.querySelectorAll("button")[2].style.color="white";
		document.querySelectorAll("button")[1].style.backgroundColor="white";
		document.querySelectorAll("button")[1].style.color="steelblue";
		s=6;
		init();
		play();
	})
// }
// level();