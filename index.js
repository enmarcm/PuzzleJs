const imagenes = ['imagen-0','imagen-1','imagen-2','imagen-3', 'imagen-4', 'imagen-5', 'imagen-6', 'imagen-7', 'imagen-8']

const container = document.querySelector('.container')
const puzzle = document.querySelector('.puzzle')
const piezas = document.querySelector('.piezas')
let contador = 9

while(imagenes.length){
    const index = Math.floor(Math.random() * imagenes.length)

    let div = document.createElement('div')
    div.classList.add('pieza')

    div.id = imagenes[index]

    div.style.backgroundImage = `url(imgs/${imagenes[index]}.jpg`

    div.draggable = true

    piezas.append(div)
    
    imagenes.splice(index, 1)
}

for (let i = 0; i < 9; i++) {
    const div = document.createElement('div')
    div.classList.add('puzzle-item')
    div.id = i 

    puzzle.append(div)
}


piezas.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('id', e.target.id)
})


puzzle.addEventListener('dragover', e=>{
    e.preventDefault()
    e.target.classList.add('hover')
})

puzzle.addEventListener('dragleave', e=>{
    e.target.classList.remove('hover')
})


puzzle.addEventListener('drop', e=>{
    let id= e.dataTransfer.getData('id')
    let idNumero = id.slice(-1)

    if(e.target.id === idNumero){
        e.target.append(document.querySelector(`#${id}`))
        contador--
    }else{
        e.target.classList.remove('hover')   
    }

    if(contador === 0){
        piezas.style.display = 'none'
        container.style.backgroundColor = '#F3FF9F'
        alert('Ganaste Tonto')
    }


})    


