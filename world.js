window.onload = myFunction;

function myFunction() {
	var element = document.getElementById("lookup");
	var element2 = document.getElementById("lookup2");
	var divElement = document.getElementById("result");
	var url;
	var country;
	
    element.onclick = function(){
    	country = document.getElementById("country").value;
    	url = "https://e2eb694e20814d80ac20af2aa2e13058.vfs.cloud9.us-east-1.amazonaws.com/world.php?country="+country;
    	clickFunction(url);
    };
    
    element2.onclick = function(){
    	country = document.getElementById("country").value;
    	url = "https://e2eb694e20814d80ac20af2aa2e13058.vfs.cloud9.us-east-1.amazonaws.com/world.php?country="+country+"&context=cities";
    	clickFunction(url);
    }
    
    function clickFunction(url){
	
    
    var request = new XMLHttpRequest();
	
	
	request.open("GET", url, true);
	request.send();	
	
    request.onreadystatechange = function(){
		if(this.readyState === 4 && this.status === 200) {
			    
			var response = request.responseText;
			divElement.innerHTML = response;
		}
		else{
			divElement.innerHTML = "Error";
		}
	};
	
}
}

