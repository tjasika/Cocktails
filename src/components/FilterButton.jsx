export const FilterButton = ({text}) => {
    return (
        <button className="p-2 rounded-3xl bg-zinc-50 text-zinc-700 w-45 transition-colors duration-300 hover:bg-zinc-400 cursor-pointer hover:text-zinc-200">
            {text}
        </button>
    )
}