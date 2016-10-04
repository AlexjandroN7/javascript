var Trains=1;
var operationalTrains=8;
var totalTrains=12;

while(Trains<=totalTrains){
	if (Trains <= operationalTrains){
		console.log("Train #" + Trains + " is running.");
	}else{
		console.log("Train #" + Trains + " is not operational.");
	}
	Trains+=1;
} 
//alert("We have "+operationalTrains+" operational trains!")
function trains(){
var al;
al=confirm("Do you want to take the train?");
if (al){
	console.log("Mind the gap!");
}else{
	console.log("Go home!");
}
}

function count(...args){
	var nargs= arguments.length;
	for (var i=0;i<nargs;i++){		
		console.log(arguments[i].length)
	}
}

function nombres(...args){
	var nargs=arguments.length;
	var names;
	for (var i=0;i<nargs;i++){
		document.write(arguments[i]);
	}
}
function invocarysumar(a,b){
	return a+b;
}
//a y b son funciones

function uno(){
	return 1;
}
function dos(){
	return 2;
}

function nombres_fin(){
	var n=prompt("Whats your name?");
	var ind=0;
	var array=[];
	while(n!='fin'){
		array.push(n);
		n=prompt("Whats your name?");
		ind++;
	}
	for (var i=0;i<array.length;i++){
		document.write(array[i]+"<br>");
	}
}

function banco(){
	var ncuenta=[];
	var nombre=[];
	var saldo=[];
	var s="";
	var acreedores=0;
	var n=prompt("Cual es tu numero de cuenta?");
	var usuario=0;
	while(n>0){
		ncuenta[usuario]=n;
		n=prompt("Como te llamas?");
		nombre[usuario]=n;
		n=prompt("Cual es tu saldo?");
		saldo[usuario]=parseInt(n);
		n=prompt("Cual es tu numero de cuenta?");
		usuario++;
	}
	for (var i=0;i<usuario;i++){
		s+="numero de cuenta: "+ncuenta[i]+"  nombre: "+nombre[i]+"   ";
		if (saldo[i]<0){
			s+="Estado de la cuenta: Deudor";
		}else if(saldo[i]>0){
			s+="Estado de la cuenta: Acreedor";
		}else{
			s+="Estadp de la cuenta: Nulo";
		}
		s+="<br>"
	}
	for (var i=0;i<usuario;i++){
		if(saldo[i]>0){
			acreedores+=saldo[i];
		}

	}
	document.write(s);
		document.write("Saldo de acreedores: "+acreedores);
	}
	
	function triangulo(){
	
	var base;
	var altura;
	var superficie;
	var s = 0;
	
	for (var i = 1; i<=3;i++){
	
		base=prompt("indica la base:");
		base=parseInt(base);
		altura=prompt("ingrese la altura:");
		altura=parseInt(altura);
		superficie=base*altura/2;
		if (superficie>12){
		 s++;
}
		 document.write("Triangulo numero: " + i + "<br>");
		 document.write("base: " + base + "<br>");
		 document.write("altura: " + altura + "<br>");
		 document.write("superficie: " + superficie + "<br>");
		 document.write(s + " esta es la cantidad de triangulos con superfiie superior a 12");

}
		
}
triangulo();