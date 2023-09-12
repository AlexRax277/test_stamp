import Card from './Card.js';


const DrinksList = ({ data }) => {
    
    return <ul>
        {data.map(el => {
            return <Card key={crypto.randomUUID()} name={el.name} price={el.price} />
        })}
    </ul>
};

export default DrinksList;
