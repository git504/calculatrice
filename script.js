// 1 Inputs cards
// 3 Calculer cards

function calculer() {
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    let signedeloperation = document.getElementById("toucheoperation").value;
    //let resultat = parseInt(nbr1) + parseInt(nbr2);

        if(!isNaN(resultat)) {
        document.getElementById("screen").innerHTML = resultat;
        } else {
        alert("Ouille ! ;-( Entrer un nombre.")
        } 
        //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
    
        switch (signedeloperation) {
            case '+':
              console.log(nbr1 + nbr2);
                break;
            case '-':
                console.log(nbr1 - nbr2);

                break;
            case 'x':
              console.log(nbr1 * nbr2);
                break;
              case '/':
                console.log(nbr1 / nbr2);
                break;
          }
    }

// 2 Opérande cards

function touches(signe) {
//    let e = document.getElementById(signe).value;
    document.getElementById("toucheoperation").innerHTML = signe;
    console.log(signe);
}








