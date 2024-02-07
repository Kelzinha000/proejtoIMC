const pesoEmKg = document.getElementById('pesoEmKg')
const alturaEmMetros = document.getElementById('alturaEmMetros')

const btn = document.getElementById('btn')
const respostaIMC = document.getElementById('respostaIMC')

btn.addEventListener('click', function(){
    peso = Number(pesoEmKg.value)
    altura = Number(alturaEmMetros.value)
    let imc = peso / (altura * altura)
   

   document.getElementById("respostaIMC").innerHTML= `${Math.floor(imc)}` // mostrar na pagina// inner text apesenta o texto, já o inner text permite texto 
})




