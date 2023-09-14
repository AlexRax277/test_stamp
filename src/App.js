import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage.js';


function App() {
  return (
    <Routes>
        <Route path='test_stamp/*' element={ <MainPage /> }/>
        <Route path='*' element={ <div>Упс...страница не найдена</div> } />
    </Routes>
  );
};

export default App;
