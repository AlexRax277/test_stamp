import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Control from "./Control";


const CardPay = ({ BankCardPurchase, BankCardCancel, keep }) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <Control msg={msg} stop={stop}/>

            {showIssuance && <button className="keep-prod" onClick={keep}>Получить продукт</button>}
        </div>
    )
};

export default CardPay;
