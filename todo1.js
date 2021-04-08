var closeButton=document.getElementsByClassName("close");
var ullist=document.querySelector('ul');
ullist.addEventListener('click',function(event){
	if(event.target.tagName==='LI'){
	event.target.classList.toggle('checked');
	}

});
function createNewElement(){
var li=document.createElement("li");
var theInputValue=document.getElementById("the-input").value;
var text=document.createTextNode(theInputValue);
li.appendChild(text);
if(theInputValue===""){
alert("Something is wrong!!");
}
else{
document.getElementById("the-ul").appendChild(li); 
}

var thepang=document.createElement('span');
var txt=document.createTextNode('\u00D7');
thepang.className="close";
li.appendChild(thepang);
thepang.appendChild(txt);
for( i=0;i<closeButton.length;i++)
{
	closeButton[i].onclick=function(){
	
		var div=this.parentElement;
		div.style.display="none";
		}
	}
}

