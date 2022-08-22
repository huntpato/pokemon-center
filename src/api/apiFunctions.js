/**
 * función que obtiene los tipos de pokémon de la API
 * @returns {object}
 */

 export const getPokemonTypes = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const data = await response.json();
    return data.results;
  };


/**
 * funcion que se encarga de enviar el formulario cuando se invoca el metodo mutate
 * @param {object} formInfo 
 */

 export const sendForm = async(formInfo) =>{
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

export const getPokemonSpecies = async(number) =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/?offset=${number}&limit=20`);
    const data = await response.json();
    return data.results;
}