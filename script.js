// 2 Inputs
// on recupere et on stocke
// on securise avec le HTML input REQUIRED et MIN

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    console.log("Hello you, here is " + nbr1 + " and " + nbr2);

        if((typeof parseInt(nbr1) === 'number') && (typeof parseInt(nbr2) === 'number')) {
        console.log("Tout va bien ;-) " + nbr1 + " et " + nbr2 + " sont des nombres !");
        } else if ((typeof parseInt(nbr1) !== 'number') && (typeof parseInt(nbr2) !== 'number')) {
        console.log("entrer un nombre");
        } else {
        }

        if(document.getElementById("add").selected) {
            resultat = parseInt(nb1) + parseInt(nbr2);
        }
        else if(document.getElementById("sous").selected) {
            resultat = parseInt(nb1) - parseInt(nbr2);
        }
        else if(document.getElementById("mult").selected) {
            resultat = parseInt(nb1) * parseInt(nbr2);
        }
        else {
            resultat = parseInt(nbr1) / parseInt(nbr2);
        }

        document.getElementById("btn").onclick = calculer();
} 



// Opérande 





// Calculer







