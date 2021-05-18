// 1 Inputs cards

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    // console.log("Hello you, here is " + nbr1 + " and " + nbr2);

    let resultat = parseInt(nbr1) + parseInt(nbr2);
    let signedeloperation = document.getElementById("toucheoperation").value;
    //test NaN

        if(!isNaN(resultat)) {
        document.getElementById("screen").innerHTML = resultat;
        } else {
        alert("Ouille ! ;-( Entrer un nombre.")
        } 
        //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
    }


        // if(document.getElementById("+").selected) {
        //     resultat = parseInt(nb1) + parseInt(nbr2);
        // }
        // else if(document.getElementById("-").selected) {
        //     resultat = parseInt(nb1) - parseInt(nbr2);
        // }
        // else if(document.getElementById("x").selected) {
        //     resultat = parseInt(nb1) * parseInt(nbr2);
        // }
        // else {
        //     resultat = parseInt(nbr1) / parseInt(nbr2);
        // }

        // document.getElementById("btn").onclick = calculer();
 

// 2 Opérande cards
// onclick="touches(id)"

function touches(signe) {
//    let e = document.getElementById(signe).value;
    document.getElementById("toucheoperation").innerHTML = signe;
    console.log(signe);
}


// 3 Calculer cards








