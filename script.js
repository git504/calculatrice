// 1 Inputs cards
// 3 Calculer cards

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    // console.log("Hello you, here is " + nbr1 + " and " + nbr2);

    let resultat = parseInt(nbr1) + parseInt(nbr2);
    //test NaN

        if(!isNaN(resultat)) {
        document.getElementById("screen").innerHTML = resultat;
        } else {
        alert("Ouille ! ;-( Entrer un nombre.")
        } 
        //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
    }


        // if(document.getElementById("add").selected) {
        //     resultat = parseInt(nb1) + parseInt(nbr2);
        // }
        // else if(document.getElementById("sous").selected) {
        //     resultat = parseInt(nb1) - parseInt(nbr2);
        // }
        // else if(document.getElementById("mult").selected) {
        //     resultat = parseInt(nb1) * parseInt(nbr2);
        // }
        // else {
        //     resultat = parseInt(nbr1) / parseInt(nbr2);
        // }

        // document.getElementById("btn").onclick = calculer();
 

// 2 Opérande cards

function operateur(signe) {
   let e = document.getElementById(signe)
}










