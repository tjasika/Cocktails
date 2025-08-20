import './style.css'
import cocktails from './data/data.json'
import { CardsContainer } from './components/CardsContainer'

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 p-5 w-full h-full bg-zinc-200">
          <h1 className="text-3xl font-bold text-zinc-900">Cocktails</h1>
          <CardsContainer cocktails={cocktails}/>
      </div>
    </>
  )
}

export default App
