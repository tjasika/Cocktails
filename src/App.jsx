import { useState, useMemo } from 'react'
import './style.css'
import cocktails from './data/data.json'
import categories from './data/categories.json'
import { CardsContainer } from './components/CardsContainer'
import { FilterButton } from './components/FilterButton'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visible = useMemo(()=> {
    if(selectedCategory == "All") {
      return cocktails;
    }
    return cocktails.filter(cocktail => cocktail.category == selectedCategory);
  }, [selectedCategory])

  return (
    <>
      <div className="flex flex-col items-center gap-5 p-5 w-screen h-full min-h-screen bg-zinc-200">
          <h1 className="text-5xl font-bold text-zinc-700">Cocktails</h1>
          <div className='pb-2 pl-10 flex flex-row gap-3 items-left w-full'>
              {categories.map((filter, index)=> (
                <FilterButton key={index} text={filter.name} isActive={selectedCategory == filter.name} onClick={()=>setSelectedCategory(filter.name)} />
              ))}
          </div>
          <CardsContainer cocktails={visible}/>
      </div>
    </>
  )
}

export default App
