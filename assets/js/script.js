var button = document.querySelectorAll(".button-single")
var display = document.querySelector('.display')
var equalButton = document.querySelector("#equalFunctionButton")
functionButtons = document.querySelectorAll('.function-buttons')

const pressingButtons = (numero) =>{
    console.log(numero);
    
    if(display.value == 0){
        display.value = numero;
    }else{
        display.value += numero;
    }

    for(var i = 0; i < button.length; i++){
    
        if(display.value.length > 12){
            button[i].style.pointerEvents="none"
            equalButton.style.pointerEvents='all'
        }

    }

}


const pressingFunctionButtons = (attribute) =>{
    switch(attribute){
        case '+' :
            display.value+='+'
        break;
        case '-' :
            display.value+='-'
        break;
        case '*' :
            display.value+='*'
        break;
        case '/' :
            display.value+='/'
        break;
        case '<' :
            let numberErase = display.value.substring(0, display.value.length-1)

            display.value=numberErase;

            if(display.value == ''){
                display.value = '0'
            }
        break;
        case 'c' :
            display.value=''
        break;
        case '=' :
            let result = eval(display.value);
            display.value = result;
        break;
    }
}

    


