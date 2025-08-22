import { useNavigate, useParams } from "react-router-dom"
import cocktails from './data/data.json'

export default function Details() {
    const {id} = useParams();
    const navigate = useNavigate();

    const cocktail = cocktails.find((cocktail) => String(cocktail.id) === id);

    if(!cocktail) {
        return (
            <div>Cocktail Not Found</div>
        )
    }

    return(
        <div className="w-full min-h-screen bg-zinc-200 p-5 flex justify-center items-center">

                <div className="bg-zinc-50 w-250 h-150 rounded-xl shadow-lg flex flex-row gap-10 p-5">
                    
                    {/* The left side */}
                    <div className="w-200 h-140">
                        <img className="object-cover w-full h-full rounded-lg" src={cocktail.image}></img>
                    </div>

                    {/* The right side */}
                    <div className="flex flex-col justify-between w-full">
                        <div>
                            <div className="flex flex-col justify-end w-full">
                                <div className="flex flex-row justify-end">{cocktail.category}</div>
                                <div className="flex flex-row justify-end gap-3 w-full text-zinc-500 text-sm">
                                    {cocktail.tags.map((tag, index) => (
                                        <span key={index} >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold">{cocktail.name}</h1>
                                <p>{cocktail.longDescription}</p>
                            </div>
                            
                            <div>
                                <h2 className="text-lg font-bold pt-5">Ingredients:</h2>
                                <div className="w-full text-zinc-500">
                                    {cocktail.ingredients.map((item, index) => (
                                        <ul key={index}>
                                        <li>{item.amount} {item.ingredient}</li>  
                                        </ul>
                                    ))}
                                </div>
                            </div>

                        </div>


                        <button 
                        onClick={()=>navigate('/')}
                        className="w-40 bg-zinc-200">
                            Back
                        </button>
                    </div>

                </div>
        </div>
    )
}