import { Routes, Route } from 'react-router-dom';
import Drink from './Drink.js';
import DrinksList from './DrinksList.js';


const MainPage = () => {
    const data = [
        {'name': 'coffee', 'price':'150'},
        {'name': 'capuccino', 'price':'200'},
        {'name': 'tea', 'price':'100'},
    ];

    return (<div>
        <DrinksList data={data}/>
        <Routes>
            <Route path='/' element={
                <div className='drink'>
                    <h2>Выберите напиток</h2>
                </div>
                }
            />
            <Route path=':drink/*' element={ <Drink /> } />
        </Routes>
    </div>)
}

export default MainPage;
