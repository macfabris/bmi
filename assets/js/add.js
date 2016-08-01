//adiciona.js

var button = document.querySelector("#add-patient");

button.addEventListener("click", function(event) {

	event.preventDefault();

	var nameField = document.querySelector("#name-field");
	var weightField = document.querySelector("#weight-field");
	var heightField = document.querySelector("#height-field");


	var newPatient = "<tr class='patient'>"+
							"<td class='info-name'>" + nameField.value + "</td>"+
							"<td class='info-weight'>" + weightField.value + "</td>"+
							"<td class='info-height'>" + heightField.value + "</td>"+
							"<td class='info-mbi'></td> "+
						"</tr>";

	var table = document.querySelector("table"); // seleciona sempre o primeiro elemento
	table.innerHTML = table.innerHTML + newPatient;

	nameField.value = "";
	weightField.value = "";
	heightField.value = "";

});