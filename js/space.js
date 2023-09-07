

document.addEventListener('DOMContentLoaded', () => { 

    document.getElementById("btnBuscar").onclick = async (e)=>{
        e.preventDefault();
        
        const inputBuscar= document.getElementById("inputBuscar").value;

        const response= await fetch (`https://images-api.nasa.gov/search?q=${inputBuscar}`)
        const datajson = await response.json();

        const resultado = datajson.collection.items;

        resultado.forEach(item => {
            const imageUrl = item.links[0].href;
            const title = item.data[0].title;
            const description = item.data[0].description;
            const dateCreated = item.data[0].date_created;
            

            document.getElementById("contenedor").innerHTML+=`<h2>${title}</h2>`;
            document.getElementById("contenedor").innerHTML+=`<img src="${imageUrl}">`;
            document.getElementById("contenedor").innerHTML+=`<p>${description}</p>`;
            document.getElementById("contenedor").innerHTML+=`<p>${dateCreated}</p>`;
            

    })

 }

});
