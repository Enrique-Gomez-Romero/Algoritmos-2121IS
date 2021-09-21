//var dinero = 10;//
//var perro = perro;//

//if (dinero <= 10) {
   // console.log("IF comprar una coca");
//} else {
  //  console.log("IF:comprar una cerveza");
//}

//switch (dinero) {
    //case 10:
        //console.log("SWITCH:comprar una coca");

       // break;
   // case 5:
        //console.log("SWITCH:comprar una cerveza");
        //break;

    //default:
        //console.log(" SWITCH:No hay nada xD");
        //break;
//}


//var n = 2;

//if (n > 10) {
    //console.log("compra un dulce");
//} //else {
   // switch (n) {
        //case 1:
           // console.log("IF CON SWITCH" + " " + 1);
           // break;

        //case 2:
           // console.log("IF CON SWITCH" + " " + 2);
           // break;

       // default:
         //   break;
    //}

//}
//default//

//15 EJEMPLOS////.................................................................................................................

/*Ejemplos de IF ...............................................................................................................*/

/*var variable1 = 5;
var mascota = "pajaro";

console.log("TU numero es "+ variable1+" Y tu mascota es "+mascota );
if (variable1 == 1 && mascota == "perro") {
    console.log("es 1 y perro");
} else {
    console.log("es diferente de 1 y de perro");
    if (variable1 == 2 && mascota == "gato") {
        console.log("es 2 y gato");
    } else {
        console.log("es diferente de 2 y de gato");
        if (variable1 == 3 && mascota == "pez") {
            console.log("es 3 y pez ");   
        } else {
            console.log("es diferente de 3 y de pez");
            if (variable1 == 4 && mascota == "pinguino") {
                console.log("es 4 y pinguino");
            } else {
                console.log("es diferente de 4 y de puinguino");
                if (variable1 == 5 && mascota == "pajaro") {
                    console.log("es 5 y pajaro");
                } else {
                    console.log("es diferente de 5 y de pajaro");
                    
                    
                }
            }
        }

    }

}*/

/*Ejemeplos de switch.......................................................................*/

/*var refresco = "refresco";
var cerveza = "cerveza";
var jugo = "jugo";
var tequila = "tequila";
var whisky = "whisky";
var bebida = 1;
var n = 7; Numero que desea de esa bebida */

/*Aqui hay dos formas para hacer, una daclarando varias variables y que sean igual a lo que desea
 o en otra comparar bebida sea igual a texto ingresado"refresco"
 El switch de JS es muy diferente al de Java*/

/* console.log("As seleccionado que quieres de babida "+bebida);

switch (bebida) {    
    case "refresco":
        console.log("A seleccionado refresco");
        switch (n) {
            case n:
                console.log("Se le a entregado " +n+" de "+bebida+"");
            break;
        
            default:
            break;
        }
     break;

    case "cerveza":
        console.log("A seleccionado cerveza");
        switch (n) {
            case n:
                console.log("Se le a entregado " +n+" de "+bebida+"");
            break;
        
            default:
            break;
        }
    break;

    case "jugo":
        console.log("A seleccionado jugo");
        switch (n) {
            case n:
                console.log("Se le a entregado " +n+" de "+bebida+"");
            break;
        
            default:
            break;
        }
    break;

    case "tequila":
        console.log("A seleccionado tequila");
        switch (n) {
            case n:
                console.log("Se le a entregado " +n+" de "+bebida+"");
            break;
        
            default:
            break;
        }
    break;

    case "whisky":
        console.log("A seleccionado whysky");
        switch (n) {
            case n:
                console.log("Se le a entregado " +n+" de "+bebida+""); 
            break;
        
            default:
            break;
        }
    break;

    default:
        console.log("ingresa una bebida valida");
        console.log("Vuelve a seleccionar");
        console.log("Solo tenemos refresco,cerveza,jugo,tequila y wysky");
    break;
} */

/* IF CON SWITCH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */

var si = "si te ama";
var r = "no te ama"
var accionSi = 6;
var accionNo = 4;

if (r == si) {
    console.log("Felicidades de ama xD");
    console.log("puedes hacer lo siguiente"+'\n'+
                " 1.-La invitas a salir"+'\n'+
                " 2.-La abrazas"+'\n'+
                " 3.-Te vas con ella"+'\n'+
                " 4.-LLoras de felicidad"+'\n'+
                " 5.-Se besan");

    switch (accionSi) {
        case 1:
            console.log("as seleccionado "+accionSi+":"+'\n'+" La as invitado a salir");
        break;
        case 2:
            console.log("as seleccionado "+accionSi+":"+'\n'+" La estas abrasando");
        break;
        case 3:
            console.log("as seleccionado "+accionSi+":"+'\n'+" Te vas con ella a su lado");
        break;
        case 4:
            console.log("as seleccionado "+accionSi+":"+'\n'+" Empiezas a LLorar de felicidad");
        break;
        case 5:
            console.log("as seleccionado "+accionSi+":"+'\n'+" La empiezas a besar");
        break;                
        default:
            console.log("Te queda elado por la respuesta "); 
            console.log("No escogiste una occion");
            if (accionSi >= 6 ) {
                console.log("Te pregunta si estas bien");
                
            } 
        break;
    }
    
} else {
    console.log("F por ti Bro , sera para la otra");
    console.log("1.-Quieres correr"+'\n'+
                "2.-Quedarte Atonadado"+'\n'+
                "3.-Te arrodillas y ruegas");
    switch (accionNo) {
        case 1:
            console.log("as seleccionado "+accionNo+":"+'\n'+" Sales corriendo xD");    
        break;
        case 2:
            console.log("as seleccionado "+accionNo+":"+'\n'+ " Te quedas Parado , Atonito");    
        break;
        case 3:
            console.log("as seleccionado "+accionNo+":"+'\n'+" te arrodilas y empiezas a rogar xD jsjsjs");    
        break;                
    
        default:
            console.log("no seleccionaste nada asi que");
            console.log("no entiendes que esta pasando");
            console.log("Por favor ingresa una opcion valida");
            if (accionNo >= 4) {
                console.log("Piensas volverlo a intentar");
            }

        break;
    }
    
}



