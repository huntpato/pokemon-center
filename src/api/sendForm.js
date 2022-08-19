
/**
 * funcion que se encarga de enviar el formulario cuanod se invoca el metodo mutate
 * @param {object} formInfo 
 */

export const sendform = async(formInfo) =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify(formInfo),
    });

    if(response.ok){
        return await response.json();
    }else{
        throw new Error("Error al enviar el formulario");
    }
};