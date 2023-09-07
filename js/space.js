

document.addEventListener('DOMContentLoaded', () => { 

    document.getElementById("btnBuscar").onclick = async (e)=>{
        e.preventDefault();
        
        const inputBuscar= document.getElementById("inputBuscar").value;

        const response= await fetch (`https://images-api.nasa.gov/serch?q=${inputBuscar}`)
        const data = response.json();

        console.log(data);
    }
    
    




});