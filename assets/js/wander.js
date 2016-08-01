//arquivo precorre.js
function wanderArray(trsPatients, behavior) {

    for(var i = 0; i <= trsPatients.length - 1; i++){

        var currentTrPatient = trsPatients[i];
        behavior(currentTrPatient);
    }
}