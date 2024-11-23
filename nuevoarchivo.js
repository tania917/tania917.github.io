function enviar(event) {
	
	event.preventDefault();
	var a1=document.getElementById("nombre").value;
	var a2=document.getElementById("contrasena").value;
	 
	 if (a1=='sara' && a2=='itec'){
	 	
	   window.location.href="formulario.html";
	 }
	 else{alert("El nombre y la contrasena son incorrectos");
	 }
}

