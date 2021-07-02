/*
class Eventos {
    constructor(){
        this.bad = document.querySelector('.tags-value > .bad')
        this.lanche = document.querySelector('.tags-value > .lanche')
        this.academia = document.querySelector('.tags-value > .academia')
        this.recep = document.querySelector('.tags-value > .recepcao')
        this.vista = document.querySelector('.tags-value > .vista')
        this.spa = document.querySelector('.tags-value > .spa')
        this.wifi = document.querySelector('.tags-value > .wifi')
        this.bar = document.querySelector('.tags-value > .bar')
        this.piscina = document.querySelector('.tags-value > .piscina')
        this.click()
    }
    // Evento click
    click(){
        document.addEventListener('click', (e)=>{
            const el =  e.target
            if(el.classList.contains("bad")){
                this.bad.style.display="block"
                this.spa.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
                
            }
            if(el.classList.contains("spa")){
                this.spa.style.display="block"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("lanche")){
                this.lanche.style.display="block"
                this.spa.style.display="none"
                this.bad.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("academia")){
                this.academia.style.display="block"
                this.spa.style.display="none"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("recepcao")){
                this.recep.style.display="block"
                this.spa.style.display="none"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("vista")){
                this.vista.style.display="block"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.spa.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("wifi")){
                this.wifi.style.display="block"
                this.spa.style.display="none"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                
                this.bar.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("bar")){
                this.bar.style.display="block"
                this.spa.style.display="none"
                this.bad.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.piscina.style.display="none"
            }
            if(el.classList.contains("piscina")){
                this.piscina.style.display="block"
                this.bad.style.display="none"
                this.spa.style.display="none"
                this.lanche.style.display="none"
                this.academia.style.display="none"
                this.recep.style.display="none"
                this.vista.style.display="none"
                this.wifi.style.display="none"
                this.bar.style.display="none"
                
            }
            
        })
    }
    
}
const click = new Eventos()
*/

/*
document.addEventListener('click', ev => {
    document.querySelectorAll('.tags-value').forEach(el => el.style.display = 'none' )
    document.querySelector(`.tags-value.${ev.target.dataset.target}`).style.display = 'block'
  })*/
/*
class Trigger {
    constructor(){
        this.lista = document.querySelectorAll('.tags')
        this.tags = document.querySelector('.tags')
        this.bad = document.querySelector('.tags-value > .bad')
        this.lanche = document.querySelector('.tags-value > .lanche')
        this.academia = document.querySelector('.tags-value > .academia')
        this.recepcao = document.querySelector('.tags-value > .recepcao')
        this.vista = document.querySelector('.tags-value > .vista')
        this.spa = document.querySelector('.tags-value > .spa')
        this.wifi = document.querySelector('.tags-value > .wifi')
        this.bar = document.querySelector('.tags-value > .bar')
        this.piscina = document.querySelector('.tags-value > .piscina')
        
        this.click()
    }
    click(){
        document.addEventListener("click", e=>{
            const el = e.target

            if(el.classList.contains('tags')){
                if(!(el.classList.contains('bad'))){this.bad.style.display="none"}  
                else{this.bad.style.display="block"}
            }
            if(el.classList.contains('tags')){
                if(!(el.classList.contains('lanche'))){this.lanche.style.display="none"}
                else{this.lanche.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('academia'))){this.academia.style.display="none"}  
                else{this.academia.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('recepcao'))){this.recepcao.style.display="none"}
                else{this.recepcao.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('vista'))){this.vista.style.display="none"}  
                else{this.vista.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('spa'))){this.spa.style.display="none"}
                else{this.spa.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('wifi'))){this.wifi.style.display="none"}  
                else{this.wifi.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('bar'))){this.bar.style.display="none"}
                else{this.bar.style.display="block"}
            }
            if(el.classList.contains('tags')){
                
                if(!(el.classList.contains('piscina'))){this.piscina.style.display="none"}  
                else{this.piscina.style.display="block"}
            }
        })
    }
    
}
const trigger = new Trigger()
*/
function btnUm(){
const lista = document.querySelectorAll('.tags')
const tagsvalue = document.querySelectorAll('.tags-value-box')
const  arr = [
    "tags bad", "tags lanche", "tags academia",
    "tags recepcao", "tags vista", "tags spa",
    "tags wifi","tags bar", "tags piscina"
]

document.addEventListener('click', e=>{
    const el = e.target
    for (let index = 0; index < lista.length; index++) {
        if(el.classList.contains('tags')){
            for (let c = 0; c < arr.length; c++) {
                if(!(el.className === arr[c])){
                    tagsvalue[c].style.display="none"
                }
                else{
                    tagsvalue[c].style.display="grid"  
                }
            } 
        }  
    }
})
}
btnUm()

function btnDois(){
    const lista = document.querySelectorAll('.btn-menu')
    const container = document.querySelectorAll('#restaurante .container')
    const  arr = [
        "btn-menu prato-principal","btn-menu sobremesa", "btn-menu drink"
    ]
    
    document.addEventListener('click', e=>{
        const el = e.target
        console.log(el)
        for (let index = 0; index < lista.length; index++) {
            if(el.classList.contains('btn-menu')){
                for (let c = 0; c < arr.length; c++) {
                    if(!(el.className === arr[c])){
                        container[c].style.display="none"
                    }
                    else{
                        container[c].style.display="grid"  
                    }
                } 
            }  
        }
    })
}
btnDois()
    
    


