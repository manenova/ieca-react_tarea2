const RecetaItem = ({receta})=>{
    const { name, tiempo, url, ingredientes } = receta;
    

    return (
        <div className="p-4 bg-slate-200 rounded-xl w-[250px]">
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{tiempo}</p>
            <img src={url}></img>
            <ul>
                {ingredientes.map((ingrediente, index)=>(
                    <li key={index}>
                        {ingrediente}
                    </li>
                ))}
            </ul>

            
        </div>
    );
}

export default RecetaItem