window.onload = myFunction;

function myFunction() {
	var element = document.getElementById("lookup");
	var divElement = document.getElementById("result");
    
    element.onclick = function(){
    alert('...jghjgjgjgjhg..');
    
    var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/world.php";
	httpRequest.open('GET', url, true)
	
	httpRequest.onreadystate = function(){
		
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
			    
			var response = httpRequest.responseText;
			divElement.innerHTML = response;
		}
		else{
			divElement.innerHTML = "Error";
		}
	
	
	httpRequest.open("POST",url,true);
	httpRequest.send();}
		
	}
		
    //}
}
