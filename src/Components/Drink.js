import { useParams, Routes, Route, useNavigate} from "react-router-dom";
import Emulator from "./Emulator.js";
import CashPay from "./CashPay.js";
import CardPay from "./CardPay.js";


const emulator = new Emulator();


const Drink = () => {
    const drink = useParams().drink;
    const navigate = useNavigate();

    const handlePayment = (e) => {
        navigate(e.target.className);
    };

    return <div className="drink">
        <h2>Напиток: {drink}</h2>
        <Routes>
            <Route path="/" element={
                    <div className="payment-options">
                       <button className="cashpay" onClick={handlePayment}>Оплата наличными</button>
                       <button className="cardpay" onClick={handlePayment}>Оплата банковской картой</button>
                   </div>
            }/>
            <Route path="/cashpay" element={<CashPay startCashin={emulator.startCashin.bind(emulator)} stopCashin={emulator.stopCashin.bind(emulator)}/>}/>
            <Route path="/cardpay" element={<CardPay BankCardPurchase={emulator.BankCardPurchase.bind(emulator)} 
            BankCardCancel={emulator.BankCardCancel.bind(emulator)} Vend={emulator.Vend.bind(emulator)}/>}/>
        </Routes>
    </div>

}

export default Drink;
