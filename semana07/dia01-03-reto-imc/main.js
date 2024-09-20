const botonCalcular = document.querySelector('#botonCalcular')
botonCalcular.addEventListener('click',(event)=>{
  console.log('se presiono')
  const peso = document.querySelector('#peso').value
  const altura = document.querySelector('#altura').value
  const imc = document.querySelector('#imc')
  const alturaMetros=altura/100
  const estadoIMC = document.querySelector('#estadoIMC')
  const IMC = peso/(alturaMetros*alturaMetros)
  console.log(alturaMetros)
  console.log(peso)
  console.log(IMC)
  if(IMC < 18.5){
    estadoIMC.innerHTML= 'Baja'
  }
  else if(IMC< 24.8){
    estadoIMC.innerHTML = 'Normal'
  }
  else if(IMC< 29.9){
    estadoIMC.innerHTML = 'Sobrepeso'
  }
  else{
    estadoIMC.innerHTML = 'Obeso'
  }
  imc.innerHTML=IMC.toFixed(2)
})