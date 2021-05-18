// 2 Inputs

// on recupere et on stocke
// on securise avec le HTML input REQUIRED et MIN

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    console.log("Hello you, here is " + nbr1 + " and " + nbr2);

    if(typeof parseInt(nbr1) === 'number' && typeof parseInt(nbr2) === 'number') {
            console.log("Tout va bien ;-) C'est un nombre !");
            }else{
            console.log(typeof nbr1);
            }
} 



// Opérande 



// Calculer





