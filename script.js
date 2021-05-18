// 1 Inputs cards

function calculer() {
    console.log(calculer);
    let nbr1 = document.getElementById("enternbrs1").value;
    let nbr2 = document.getElementById("enternbrs2").value;
    let signedeloperation = document.getElementById("toucheoperation").innerText;
    let resultat = "";
    
// 3 Calculer cards

    switch (signedeloperation) {
            case '+':
              resultat = parseInt(nbr1) + parseInt(nbr2);
              if(!isNaN(resultat)) {
                document.getElementById("screen").innerHTML = resultat;
                } else {
                alert("Ouille ! ;-( Entrer un nombre.")
                } 
                //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
                break;
            case '-':
                resultat = parseInt(nbr1) - parseInt(nbr2);
                if(!isNaN(resultat)) {
                    document.getElementById("screen").innerHTML = resultat;
                    } else {
                    alert("Ouille ! ;-( Entrer un nombre.")
                    } 
                    //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
                break;
            case 'x':
                resultat = parseInt(nbr1) * parseInt(nbr2);
                if(!isNaN(resultat)) {
                    document.getElementById("screen").innerHTML = resultat;
                    } else {
                    alert("Ouille ! ;-( Entrer un nombre.")
                    } 
                    //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
                break;
              case '/':
                resultat = parseInt(nbr1) / parseInt(nbr2);
                if(!isNaN(resultat)) {
                    document.getElementById("screen").innerHTML = resultat;
                    } else {
                    alert("Ouille ! ;-( Entrer un nombre.")
                    } 
                    //Qd on recupere valeur dans un input HTML par defaut = valeur string. Si parsInt = valeur number
                break;
          }
    }
//test 
console.log(signedeloperation);


// 2 Opérande cards

function touches(signe) {
//    let e = document.getElementById(signe).value;
    document.getElementById("toucheoperation").innerHTML = signe;
    console.log(signe);
}








