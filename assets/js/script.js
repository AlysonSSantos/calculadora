var button = document.querySelectorAll(".button-single")
var display = document.querySelector('.display')
var equalButton = document.querySelector("#equalFunctionButton")
functionButtons = document.querySelectorAll('.function-buttons')
var eraseButton = document.getElementById("eraseButton")

const pressingButtons = (number) =>{
    
    console.log(number);
    
    if(display.value == 0){
        display.value = number;
    }else{
        display.value += number;
    }

    for(var i = 0; i < button.length; i++){
    
        if(display.value.length >= 20){
            button[i].style.pointerEvents="none"
        } else{
            button[i].style.pointerEvents="all"
            
        }

    }

}

window.addEventListener('keydown',(event)=>{

    if(display.value.length < 20){
        keysDown();
    }else{
        if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
            attribute = event.key;
            pressingButtons(attribute);
        } 
    
        switch(event.key){
            case '=':
                attribute = '=';
                pressingFunctionButtons(attribute);
            break;
            case 'Backspace':
                attribute = '<';
                pressingFunctionButtons(attribute);
            break;
            case 'Enter':
                attribute = '=';
                pressingFunctionButtons(attribute);
            break;
            case 'c':
                attribute = 'c';
                pressingFunctionButtons(attribute);
            break;
        }
    }

    function keysDown(){

    if(event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0|| event.key == '.'){
        number = event.key;
        pressingButtons(number);
    }

    if(event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/'){
        attribute = event.key;
        pressingButtons(attribute);
    } 

    switch(event.key){
        case '=':
            attribute = '=';
            pressingFunctionButtons(attribute);
        break;
        case 'Backspace':
            attribute = '<';
            pressingFunctionButtons(attribute);
        break;
        case 'Enter':
            attribute = '=';
            pressingFunctionButtons(attribute);
        break;
        case 'c':
            attribute = 'c';
            pressingFunctionButtons(attribute);
        break;
    }

    }

})

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

            for(var i = 0; i < button.length; i++){

                if(display.value.length >= 12){
                    button[i].style.pointerEvents="none"
                } else{
                    button[i].style.pointerEvents="all"
                    
                }

            }
        break;
        case 'c' :
            display.value=''
        break;
        case '=' :
            let result = eval(display.value);
            display.value = result;
        break;
        case 'srqrt':
            display.value = Math.sqrt(display.value);
        break;
        case 'x^2':
            
            display.value = Math.pow(display.value, 2)

        break;
    }
}




