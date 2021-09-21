//var n1 = 10;
//var n2 = 5;
//var operacion = "suma";
//var total = 0;

//if(operacion == "suma"){
//    total = n1 + n2;
//}

//if(operacion == "resta"){
//    total = n1 - n2;
//}

//if(operacion == "multiplicacion"){
//    total = n1 * n2;
//}

//if(operacion == "division"){
//    total = n1 / n2;
//}

//console.log(total);

//---------------------------------------------------

//var n1 = 10;
//var n2 = 5;
//var operacion1 = "resta";
//var operacion2 = "division";
//var total1 = 0;
//var total2 = 0;

//if(operacion1 == "suma"){
//    total1 = n1 + n2;
//}else{
//    total1 = n1 - n2;
//}

//if(operacion == "division"){
//    total2 = n1 / n2;
//}else{
//    total2 = n1 * n2;
//}

//console.log("El resultado de la operacion 1 = "+ total1);
//console.log("El resultado de la operacion 2 = "+ total2);


//----------------------------------------------------------------------------------------------------
// -- Constante
// const hola = "jeje";
// console.log(hola);
// hola = "jejeje";
// console.log(hola);

// -- Variable
// var ok = "HOla mundo";
// console.log(ok);
// ok = "Saludos desde otra linea de codigo";
// console.log(ok);

//------------------------------------------

var operacion = "suma"

switch (operacion) {
    case "suma":
        console.log("La Operacion es suma");
    break;
    case("resta"):
        console.log("La Operacion es resta");
    default:
        console.log("Escoje otra");
    break;
}