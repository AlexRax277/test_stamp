import { useNavigate } from "react-router-dom";


const Card = ({ name, price }) => {
    const navigate = useNavigate();

    const handlerClick = (event) => {
        const drink_name = event.currentTarget.querySelector('.name');
        navigate(`${drink_name.textContent}`);
    }

    return <div className="card" onClick={handlerClick}>
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
        </div>

}

export default Card;
