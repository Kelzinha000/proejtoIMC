const pesoEmKg = document.getElementById('pesoEmKg')
const alturaEmMetros = document.getElementById('alturaEmMetros')

const btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    peso = Number(pesoEmKg.value)
    altura = Number(alturaEmMetros.value)
    let imc = peso / (altura * altura)
   

   document.write(`${Math.floor(imc)}`)
})




