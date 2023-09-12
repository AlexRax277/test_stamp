import { useParams } from "react-router-dom";
import Emulator from "./Emulator.js";
import { useState } from "react";


const emulator = new Emulator();


const Drink = () => {
    const drink = useParams().drink;
    const [cash_pay, setCash_pay] = useState('Оплата наличными');
    const [card_pay, setCard_pay] = useState('Оплата банковской картой');
    const [cashinInProgress, setCashinInProgress] = useState(false);
    const [cardTransactionInProgress, setCardTransactionInProgress] = useState(false);

    const handleCashPayment = () => {
        const bills = [10, 20, 50, 100];
        const price = 150;
        if (!cashinInProgress) {
                emulator.startCashin(price, bills, (bill) => {
                setCash_pay('Остановить оплату');
                console.log(`Принята купюра: ${bill} у.е.`);
            });
        } else {
            setCash_pay('Оплата наличными');
            emulator.stopCashin();
        }
        setCashinInProgress(!cashinInProgress)
    };

    const handleCardPayment = () => {
        const amount = 150;
        if (!cardTransactionInProgress) {
            emulator.BankCardPurchase(
                amount,
                (result) => {
                    if (result) {
                        console.log('Банковская транзакция успешно завершена.');
                    } else {
                        console.log('Банковская транзакция не удалась.');
                    }
                },
                (status) => {
                    console.log(`Статус платежа: ${status}`);
                }
            );
            setCard_pay('Отменить оплату картой');
        } else {
            emulator.BankCardCancel();
            setCard_pay('Оплата банковской картой');
        }
        setCardTransactionInProgress(!cardTransactionInProgress);
    };


    return <div className="drink">
        <h2>Напиток: {drink}</h2>
        <div className="payment-options">
            <button className="cash-payment" onClick={handleCashPayment}>{cash_pay}</button>
            <button className="card-payment" onClick={handleCardPayment}>{card_pay}</button>
        </div>
    </div>
}

export default Drink;
