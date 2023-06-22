import { useEffect, useState } from "react";
import RecetaForm from "./RecetaForm";
import RecetaItem from "./RecetaItem";

const RecetaList = () => {

    const [recetaCount, setRecetaCount] = useState(0);
    const [recetas, setRecetas] = useState([]);
    
    const addReceta = (receta) => {
        setRecetas([...recetas,receta]);
        localStorage.setItem("items","");
        localStorage.setItem("items",JSON.stringify([...recetas,receta])); 
    }

    useEffect(() => {
        if( localStorage.getItem('items')){
            console.log(JSON.parse(localStorage.getItem('items')));
            setRecetas(JSON.parse(localStorage.getItem('items')));
        }
      }, []);

    useEffect(()=>{
        setRecetaCount(recetas.length);
    },[recetas]);


    return (
        <>
            <h1 className="py-4 px-4"> Mi Lista de Recetas {recetaCount} </h1>
            <RecetaForm onSubmit={addReceta}/>
            <ul className="flex gap-4 py-4 ">
                {recetas.map((receta)=>(
                    <li>
                        <RecetaItem receta={receta} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RecetaList;