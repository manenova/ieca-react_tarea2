let tempIngredients = [];

const RecetaForm = ({ onSubmit } ) => {

    const submit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form[0].value;
        const tiempo = form[1].value;
        const url = form[2].value;
        const receta = { name, tiempo, url, ingredientes:tempIngredients};
        tempIngredients = [];
        onSubmit(receta);
        form.reset(); 
    };

    const saveIngredient = (event)=>{
        event.preventDefault();
        const form = event.target;
        const ingredient = form[0].value;
        tempIngredients.push(ingredient);
        form.reset();
    }

    return (
        <>
        <form className="py-4 px-4" onSubmit = {submit}>
            <input type="text" placeholder="Nombre Receta"/>
            <input type="text" placeholder="Tiempo Receta"/>
            <input type="text" placeholder="Url Imagen"/>
            <button type="submit">Agregar</button>
        </form>
        <form  className="py-4 px-4" onSubmit= {saveIngredient}>
            <input type="text" placeholder="Ingredient"/>
            <button type="submit">Agregar</button>
        </form>
        </>
    );
}

export default RecetaForm;
