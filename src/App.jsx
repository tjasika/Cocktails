import './style.css'
import cocktails from './data/data.json'
import categories from './data/categories.json'
import { CardsContainer } from './components/CardsContainer'
import { FilterButton } from './components/FilterButton'

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 p-5 w-full h-full bg-zinc-200">
          <h1 className="text-5xl font-bold text-zinc-700 pt-5">Cocktails</h1>
          <div className='pb-2 pl-10 flex flex-row gap-3 items-left w-full'>
              {categories.map((filter, index)=> (
                <FilterButton key={index} text={filter.name} />
              ))}
          </div>
          <CardsContainer cocktails={cocktails}/>
      </div>
    </>
  )
}

export default App
