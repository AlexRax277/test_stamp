import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Control from "./Control";
import Issuance from "./Issuance";

const CardPay = ({ BankCardPurchase, BankCardCancel, Vend }) => {
    const [msg, setMsg] = useState('Для оплаты картой нажмите пробел.');
    const [loading, setLoading] = useState(false);
    const [showIssuance, setShowIssuance] = useState(false);
    const navigate = useNavigate();
    const amount = 150;

    const stop = () => loading ? BankCardCancel(): navigate('/test_stamp');

    useEffect(() => {
        const onKeypress = async (e) => {
            setLoading(true);

            const res = await BankCardPurchase(
                amount,
                () => e.code === 'Space',
                (status) => {
                    setMsg(`Статус платежа: ${status}`);
                }
            );

            if(res) {
                setShowIssuance(true);
            };
        };
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
          setLoading(false);
        };
    }, [])
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Control msg={msg} stop={stop}/>}/>
                <Route path="/issuance" element={showIssuance && <Issuance vend={Vend}/>}/>
            </Routes>
        </div>
    )
};

export default CardPay;
