export const Card = ({name, image, shortDescription}) => {
    return (
        <div className="bg-zinc-50 h-95 w-85 rounded-xl p-5 flex flex-col items-center shadow-lg
                transition-transform duration-300 hover:-translate-y-2
                group relative
                cursor-pointer">
            <div className="h-60 w-75 overflow-hidden rounded-lg">
                <img className="object-cover w-full h-full" src={image} /> 
            </div>
            <div className="w-75 pt-4 text-zinc-700">
                <h1 className="font-bold text-2xl">{name}</h1>
                <p>{shortDescription}</p>
            </div>
           
        </div>
        
    )
}