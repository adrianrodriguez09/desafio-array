const autos = ['onix','prisma','golpower','corsa','palio','chevrolet s10',];

function recorrerAutos(){
    debugger
    for (let i = 0; i <= autos.length; i++){
        console.log(autos[i])
    }
}

function agregarAutos() {
    let nuevosAutos = prompt("agrega el auto que queres")
    autos.push(nuevosAutos)
    console.table(autos)
}

agregarAutos()

function eliminarAuto() {
    let auto = prompt("que auto desea eliminar")
    let indice = autos.indexOf(auto)
    autos.splice(indice, 1)
    console.table(autos)
}
 
eliminarAuto()
