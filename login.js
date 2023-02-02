let header_div = document.getElementById("header_div")



function recargar(){
    window.location.reload()
}


let importe
let fecha = new Date();
let fecha2 = new Date("2023-2-20")
let fecha3 = new Date("2023-3-15")
let fecha4 = new Date("2023-4-10")

let array = [fecha2, fecha3, fecha4]

let importes = [100, 300 ,400]

let suma

function calcular(){
    for(let i = 0; i < 3; i++){
       suma = importes[i] -  (parseInt(((array[i].getTime()-fecha.getTime())/1000/60/60/24).toFixed())+1)
        console.log(suma)
    }
}

calcular()