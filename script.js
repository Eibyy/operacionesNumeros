function capturar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var div_resultado = document.getElementById("resultado");
    var resultadoTexto = ""
    for (i=1;i<6;i++){
        switch(i){
            case 1:
                res = num1+num2;
                
                resultadoTexto += " <span style=color:red;> La suma de los dos numeros es: "+res+ " </span> <br  >"; 
                break;
                case 2: 
                res = num1-num2;
                resultadoTexto += "<span style=color:green;>La resta de los dos numeros es: "+res+ " </span><br>";

                break;
            case 3: 
                res = num1*num2;
                resultadoTexto += "<span style=color:yellow;> La multiplicacion de los dos numeros es: "+res+ " </span><br>";
                break;
            case 4: 
                res = num1/num2;
                resultadoTexto += "<span style=color:blue;>La division de los dos numeros es: "+res+ "</span><br>";
                break;
            case 5: 
                res = num1%num2;
                resultadoTexto += "El resto de la division de los dos numeros es: "+res+ "</span><br>";
                break;
        }
    }
    div_resultado.classList.add("mostrar-borde");
    div_resultado.innerHTML = resultadoTexto;
    
}