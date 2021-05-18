// 2 Inputs

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    // console.log("Hello you, here is " + nbr1 + " and " + nbr2);

    let resultat = parseInt(nbr1) + parseInt(nbr2);
    //test NaN

        if(resultat != NaN) {
        alert(resultat);}
        else {
        alert("Ouille ! ;-( Entrer un nombre.")} 
        //Qd on recupere valeur ds input par defaut = string. Si parsInt = number


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
} 


// Opérande 
// Calculer







