window.addEventListener('load', ()=> { /* escuchamos cuando se carga el documento */

/*creamos dos variables para guardar los elemento de html que necesitamos */    
const display = document.querySelector('.calculator-display');
const keypadButtons = document.getElementsByClassName('keypad-button');/*aqui no va . porque ya indicamos que es clase */
    
/* creamosotra constante para convertir el HTMLCollection a un Array*/
const keypadButtonsArray = Array.from(keypadButtons);

/* por cada elemento (button o pepito) de los botones */
    keypadButtonsArray.forEach((button) => {
        /* le añadimos a cada boton un listener de tipo click. */
        button.addEventListener('click', ()=>{
            //console.log(button.innerHTML);/* se imprime el innerHTML(texto que tiene arriba) de cada boton al hacer click */
            calculator(button, display);
        })
    })
});

calculator = (button, display) => {

    switch (button.innerHTML) {
        case 'AC':
            deleteDisplay(display); 
            break;
        case '=':
            operations(display);
            break;
    
        default:
            refresh(display, button);
            break;
    }

}

operations = (display) => {
    display.innerHTML = eval(display.innerHTML) //preguntamos por el texto que hay en el display (dis..InnerHTML) para saber que operacion debemos resolver, y despues ponemos eval, para coger el string y resolverlo y lo guardamos en un string (displ..inner..L))
}

refresh = (display, button) => {
    if (display.innerHTML == 0) {
        display.innerHTML = ''; //en caso que el display sea 0 lo igualamos a string vacío.
    }
    display.innerHTML += button.innerHTML;

}
deleteDisplay = (display) => {
    display.innerHTML = 0;
}

