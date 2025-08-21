import { useNavigate, useParams } from "react-router-dom"
import cocktails from './data/data.json'

export default function Details() {
    const {id} = useParams();
    const navigate = useNavigate();

    const cocktail = cocktails.find((c) => String(c.id) === id);

    if(!cocktail) {
        return (
            <div>Cocktail Not Found</div>
        )
    }

    return(
    <div className="w-full min-h-screen bg-zinc-200 p-5 flex justify-center items-center">
            <div className="bg-zinc-50 w-250 h-150 rounded-xl shadow-lg flex flex-row gap-10 p-5">
                <div className="w-100 h-140">
                    <img className="object-cover w-full h-full rounded-lg" src={cocktail.image}></img>
                </div>
                <div className="">
                    <h1>{cocktail.name}</h1>
                    <button onClick={()=>navigate('/')}>Back</button>
                </div>
            </div>
    </div>
    )
}