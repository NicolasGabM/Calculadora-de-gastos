var nombres = []
var gastos = []
var display = document.getElementById("display");
function agregar(nombre,gasto){
    if(nombre==false){
        alert("Ingrese un nombre valido.");
        console.log("No ingreso un nombre");
    }
    else if(gasto==false){
        alert("Ingrese un numero.");
        console.log("No ingreso un gasto");
    }
    else{
        console.log(nombre+" $"+gasto);
        nombres.push(nombre);
        gastos.push(gasto);
        display.innerHTML+="<div><p>"+nombre+" gasto $"+gasto+"</p></div>"
        totales()
    }
    
}

function totales(){
    let cantidad = nombres.length
    let display2 = document.getElementById("total");
    total = 0
    for (let i=0;i<gastos.length;i++){
        total += parseFloat(gastos[i])
    }
    if (nombres.length===1){
        display2.innerHTML="<h5>Total: $"+total+"<h5>";
    }
    else{
        final = (total)/cantidad;
        display2.innerHTML="<h5>Total: $"+total.toFixed(2)+"<h5><div>Cada uno debera aportar: $"+final.toFixed(2)+"<div>"
    }
    
}

function reinicio(){
    window.location.reload()
}