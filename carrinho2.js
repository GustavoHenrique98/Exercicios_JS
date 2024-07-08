let precos = document.querySelectorAll('.precos');
let entradas = document.getElementsByClassName('entradas');
let saida = document.getElementById('saida');
let obj= []


for(let i=0;i<entradas.length;i++){
    entradas[i].addEventListener('change',(ev)=>{
        
        obj[i]=Number(entradas[i].value) * Number(precos[i].textContent);  
        
        let novoarr=obj.reduce((ac,vl) => ac+vl,0)
        saida.textContent = novoarr.toFixed(2); 
        
        if(i===1){
            entradas[i].style.background='red'
        }

    })
}
