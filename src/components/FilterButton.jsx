export const FilterButton = ({text}) => {
    return (
        <button className="p-2 rounded-3xl bg-zinc-50 w-45 transition-colors duration-300 hover:bg-zinc-300 cursor-pointer">
            {text}
        </button>
    )
}