var n1 = 10;
var n2 = 5;
var operacion = "suma";
var total = 0;

if(operacion == "suma"){
    total = n1 + n2;
}

if(operacion == "resta"){
    total = n1 - n2;
}

if(operacion == "multiplicacion"){
    total = n1 * n2;
}

if(operacion == "division"){
    total = n1 / n2;
}

console.log(total);
