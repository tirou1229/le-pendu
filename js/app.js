const choixia = ["Thomas", "Denilson", "Azerty", "Mouchoirs", "Hollywood", "AgentCarter", "Feuille", "Bouteille", "Ordinateur", "Simplon"];

let choixOrdi = choixia[Math.random() * choixia.length | 0];
let lettresTrouvees = 0;
let coupsManques = 0;	
let tailleMot = choixOrdi.length;

console.log(choixOrdi);



function jouer(){
	    
                let userChoice = document.getElementById("letterUser").value;
               
                for(var i=0; i<tailleMot; i++) {
						                
						                // Si c'est le cas :
						                if(tableauMot[i].innerHTML==lettre) {
							                tableauMot[i].style.visibility='visible';	// On affiche la lettre
							                trouve=true;
							                lettresTrouvees++;
						                }
						
        
     }


let motDeviner = document.getElementById("motDeviner").innerHTML = choixOrdi;
.	    if (document.getElementById('letterUser').value = choixOrdi){

	    	document.getElementById("motDeviner").style.visibility = "visible";


/*if (choixOrdi.charAt(userChoice)){
	console.log()
}
*/

 
 	