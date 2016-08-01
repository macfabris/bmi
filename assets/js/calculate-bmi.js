var button = document.getElementById("calculate-bmis");
button.addEventListener("click", function() {

	var trsPatients = document.getElementsByClassName("patient");

	wanderArray(trsPatients, function (trPatient){

	    var tdName = trPatient.getElementsByClassName("info-name")[0]; 
	    var tdWeight = trPatient.getElementsByClassName("info-weight")[0]; 
	    var tdHeight = trPatient.getElementsByClassName("info-height")[0];

	    var currentPatient = { 
	        name : tdName.textContent, 
	        weight : tdWeight.textContent, 
	        height : tdHeight.textContent,
	        getBmi: function() {

	            if(this.height != 0){
	                var bmi = this.weight / (this.height * this.height);
	                return bmi;
	            } else{

	                console("Can't divide by zero");
	            }
	        }
	    };    

	    var bmi = currentPatient.getBmi();

	    var tdBmi = trPatient.getElementsByClassName("info-bmi")[0]; 
	    tdBmi.textContent = bmi;

	    console.log(bmi);
	}); 
});