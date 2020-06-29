function submission1(event){
	
	alert("okkk");
    //var v1=document.getElementById("uName").value;
    
    var name=document.getElementById("uName").value;
        
	if(name==''){
        alert("Name is Blank");
        
		event.preventDefault();
	}
	
}