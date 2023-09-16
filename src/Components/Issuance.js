import React, { useEffect, useState } from "react";

const Issuance = ({ drink, vend }) => {
    const [msg, setMsg] = useState('Нажмите space для выдачи или любую другую для выброса ошибки');

    useEffect(() => {
        const onKeypress = async (e) => {
            setMsg('Обработка...');
            const res = vend(
                drink,
                () => e.code === 'Space'
            );
            await new Promise(resolve => setTimeout(resolve, 2000));
            setMsg(res);
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="msg">
            {msg}
        </div>
    );
};

export default Issuance;
