import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Control from "./Control";


const CashPay = ({ startCashin, stopCashin }) => {
    const [msg, setMsg] = useState('Вставьте купюру в купюроприемник, пожулайста. (зажмите shift + цифру)');
    const navigate = useNavigate();
    const stop = () => {
        stopCashin(navigate);
    };

    useEffect(() => {
        const onKeypress = e => {
            setMsg('Обработка...');
            const regex = /Digit[1-9]/;
            setTimeout(() => {
                if (e.shiftKey && regex.test(e.code)) {
                    const cb = (amount) => `Принято ${amount} руб.`;
                    setMsg(startCashin(cb(e.which)));
                } else {
                    setMsg('Ошибка!');
                };
            }, 3000);
        };
      
        document.addEventListener('keypress', onKeypress);
      
        return () => {
          document.removeEventListener('keypress', onKeypress);
        };
    }, []);

    return <Control msg={msg} stop={stop}/>
};

export default CashPay;
