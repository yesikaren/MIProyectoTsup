// console.log('hola')
let numeroActual ='0'
let operador = '' // + * -
let operando = '' // Cualquier número. Ej. 8, 968
const inputDisplay = document.querySelector('.display')
// console.log({inputDisplay})
// inputDisplay.value = '993'
const buttons = document.querySelectorAll('button')
// console.log(buttons)
buttons.forEach((button)=>{
  // console.log(button.textContent)
  button.addEventListener('click',(event)=>{
    // console.log(event.target.textContent)
    const buttonSelected = event.target
    const buttonText = buttonSelected.textContent
    // console.log(buttonText)
    if(('+-*').includes(buttonText)){
      console.log('presionaste un operador')
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    }
    else if(buttonText=='='){
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    }
    else if(buttonText=='AC'){
     numeroActual='0'
    }
    else{
      console.log('presionaste un numero',buttonText)
      numeroActual= numeroActual+buttonText
    }
    inputDisplay.value = Number(numeroActual)
  })
})
