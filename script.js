let midiv = document.getElementById("midiv");

let miboton = document.getElementById("miboton");

miboton.onclick=my_funcion;


function mifuncion(){
	midiv.innerHTML="Epale"
}

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //document.getElementById("demo").innerHTML = this.responseText;
	midiv.innerHTML = this.responseText;
  }
  xhttp.open("GET", "www.w3schools.com");
  xhttp.send();
}

function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    //document.getElementById("demo").innerHTML =
    //this.responseText;
	console.log()
	midiv.innerHTML = this.responseText;
  }
  xhttp.open("GET", "https://www.w3schools.com/xml/xml_http.asp");
  xhttp.send();
}

function loadDoc3() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}


function my_funcion(){
	var my_string='';
	var data='';
	var my_parse;
//	let my_url = document.getElementById("my_url").value;
//	let my_url = "www.w3schools.com";
	let my_url = "https://www.w3schools.com/tags/ref_httpmessages.asp";
//	let my_url = "https://jsonplaceholder.typicode.com/posts";
	console.log( my_url);

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function(){
		my_string = this.responseText;
//		document.getElementById("my_div").innerHTML = my_string;
		midiv.innerHTML = my_string;
	data = JSON.parse(my_string);
		my_parse = data;
	console.log(data);
	my_keys(data);
		}
	xhttp.open("POST",my_url);
	xhttp.send();
}
