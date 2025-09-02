let resultado =0; // Resultado de todas las operaciones
let estado = 0; // Estado de operacion. 0 si no hay operacion definida, 1 para la suma,2 para resta,3
                // para multiplicacion y 4 para division.
let texto = "";
let indicador = 0; // Para ver si se borra o no la pantalla cuando se teclea un numero
document.querySelector("#Pantalla_texto").value = texto;
console.log(resultado)
console.log(estado)


function get_num(num){
    if (indicador == 0){
        texto = texto + String(num);
    }else{
        texto = String(num)
    }
    asignarTextoElemento("#Pantalla_texto",texto);
    indicador = 0;

}

function extras(n){
    if (n==1){
        texto += "00"
    }else if(texto.includes(".")==false){
        texto += "."
    }
    asignarTextoElemento("#Pantalla_texto",texto); 
    indicador = 0;
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
     elementoHTML.scrollLeft = elementoHTML.scrollWidth;
}

function Operacion(num){
        console.log(parseFloat(document.getElementById("Pantalla_texto").innerHTML))
        if (estado == 0){
            resultado = parseFloat(document.getElementById("Pantalla_texto").innerHTML);
            estado = num;
            texto ="";
            asignarTextoElemento("#Pantalla_texto",texto);
        }else{
            
            if (estado == 1){
                resultado +=  parseFloat(document.getElementById("Pantalla_texto").innerHTML);
                estado = num;
            }else if (estado == 2){
                resultado -= parseFloat(document.getElementById("Pantalla_texto").innerHTML);
                estado = num;
            }else if(estado == 3){
                resultado = resultado * parseFloat(document.getElementById("Pantalla_texto").innerHTML);
                estado = num;
            }else if (estado == 4){
                resultado = resultado / parseFloat(document.getElementById("Pantalla_texto").innerHTML);
                estado = num;
            }
            texto = "";
            asignarTextoElemento("#Pantalla_texto",texto);
        }
        console.log(resultado);
        //console.log(estado)
    }

function igualdad(){
    if (estado == 1){
        resultado +=  parseFloat(document.getElementById("Pantalla_texto").innerHTML);
    }else if (estado == 2){
        resultado -= parseFloat(document.getElementById("Pantalla_texto").innerHTML);
    }else if(estado == 3){
        resultado = resultado * parseFloat(document.getElementById("Pantalla_texto").innerHTML);
    }else if (estado == 4){
        resultado = resultado / parseFloat(document.getElementById("Pantalla_texto").innerHTML);
    }
    texto = String(resultado)
    asignarTextoElemento("#Pantalla_texto",texto);
    resultado = 0;
    estado=0;
    indicador = 1;
}
function borrar(n){
    if (n == 0){
        texto = texto.slice(0,-1);
    }else{
        texto = "";
    }
    asignarTextoElemento("#Pantalla_texto",texto);
}
asignarTextoElemento("#Pantalla_texto",texto);