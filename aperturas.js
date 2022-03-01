const cadena = "{[()()[()]]}{()[((()))()]}{}{";
let aux = [0, 0, 0];
console.log(aux);

for (let i = 0; i < cadena.length; i++){
    let a = false;
    switch(cadena[i]){
        case "{":
            if(aux[2] > 0 || aux[1] > 0){
                a = incorrecto(i);
            } else {
                aux[0]++;
            }
            break;
        case "}":
            if(aux[0] == 0){
                a = incorrecto(i);
            } else {    
                aux[0]--;
            }
            break;
        case "[":
            if(aux[2] > 0){
                a = incorrecto(i);
            } else {    
                aux[1]++;
            }
            break;
        case "]":
            if(aux[1] == 0){
                a = incorrecto(i);
            } else {    
                aux[1]--;
            }
            break;
        case "(":
            aux[2]++;
            break;
        case ")":
            if(aux[2] == 0){
                a = incorrecto(i);
            } else {    
                aux[2]--;
            }
            break;
    }

    if(a){
        break;
    }
}

if((aux[0] + aux[1] + aux[2]) > 0){
    console.log(`Incorrecto, error en la linea ${cadena.length}`);
} else {
    console.log("Correcto");
}

function incorrecto(n){
    console.log(`Incorrecto, error en la linea ${n + 1}`);
    return true;
}
console.log(aux);