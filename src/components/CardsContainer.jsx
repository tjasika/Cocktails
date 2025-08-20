import { Card } from './Card';

export const CardsContainer = ({cocktails}) => {
    return (
        <>
        <div className='grid grid-cols-4 gap-5'>
           {cocktails.map((cocktail) => (
                <Card 
                key={cocktail.id} 
                name={cocktail.name} 
                image={cocktail.image}
                shortDescription={cocktail.shortDescription} />
            ))}
        </div>
        </>
    )
}