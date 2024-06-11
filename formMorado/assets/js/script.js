window.addEventListener("load",()=>{
    document.getElementById("btnEnviar").addEventListener("click",validar);//debo completar con la funcion que corresponde a cada id 
    document.getElementById("btnContraste").addEventListener("click",cambiarContraste);
    document.getElementById("btnFuente").addEventListener("click",cambiarFuenteTamano);//debo completar con la funcion que corresponde para cada id 
})

function validar(){
    validarVacio("nombre");
    validarVacio("email");
    validarVacio("asunto");
    validarVacio("mensaje");
    validarLongitud("telefono");
}
function validarVacio(idCampo){
    //REcupera el elemento
    let elemento = document.getElementById(idCampo);
    console.log(elemento);
    //Recuperar valor del campo
    let valor = elemento.value;
    console.log(valor);
    let eParrafo = document.getElementById("p"+idCampo);
    if(valor.trim()==""){
        console.log("No hay nada")
        elemento.style.borderColor = "red";
        eParrafo.style.display = "block";
    }else{
        console.log("algo Hay")
        elemento.style.borderColor = "green";
        eParrafo.style.display = "none";
    }
}
function validarLongitud(idCampo){
        //REcupera el elemento
        let elemento = document.getElementById(idCampo);
        console.log(elemento);
        //Recuperar valor del campo
        let valor = elemento.value;
        console.log(valor);
        console.log(isNaN(valor))
        let eParrafo = document.getElementById("p"+idCampo);
        if(isNaN(valor)){//true si es un caracter
            eParrafo.innerText = "Debes ingresar un numero";
            eParrafo.style.display = "block";
        }
        else{
            if(valor.trim().length == 9 || valor.trim().length == 0 ){
                console.log("algo Hay")
                elemento.style.borderColor = "green";
                eParrafo.style.display = "none";
            }else{
                
                console.log("No hay nada")
                elemento.style.borderColor = "red";
                eParrafo.style.display = "block";
           
            }
        }
        
}
function cambiarContraste(){
    let eBody = document.body;
    let fondo = eBody.style.backgroundColor;
    let eH1 = document.getElementsByClassName("titulo");
    //console.log(eH1);
    //console.log(eH1[0]);
    //console.log(eH1[1]);
    let inputs = document.getElementsByTagName("input");
    console.log(inputs)
    
    //console.log(fondo);
    if(fondo == "black"){
        eBody.style.backgroundColor = "purple";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "purple";
        }

        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.style.borderColor = "purple";
        }
        //eH1[0].style.color = "purple";
        //eH1[1].style.color = "purple";
    }else{
        eBody.style.backgroundColor = "black";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }

        
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            element.style.borderColor = "black";
        }
        // eH1[0].style.color = "black";
        //eH1[1].style.color = "black";
    }
    
}

function cambiarFuenteTamano(){
    var element = document.getElementById("titulo");//tomo el elemento que seria el h1 con el id titulo1
    element.classList.toggle("cambioFuente");// se aplica el metodo toggle para poder hacer y deshacer la funcion junto con la clae de css
    element.classList.toggle("cambioFuente2");
}