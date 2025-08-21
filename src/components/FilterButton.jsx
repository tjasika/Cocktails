export const FilterButton = ({text, isActive, onClick}) => {
    return (
        <button 
        onClick={onClick}
        
        className={`p-2 rounded-3xl w-50 hover:cursor-pointer
            ${isActive
                ? "bg-zinc-700 text-white border-zinc-900"
                : "bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-100"}`}>
            {text}
        </button>
    )
}