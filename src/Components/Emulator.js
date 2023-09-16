class Emulator {
    constructor() {
        this.cancelCardPurchase = false;
    }

    startCashin(cb) {
        return cb;
    }

    stopCashin(navigate) {
        navigate('/test_stamp');
    };

    async BankCardPurchase(amount, cb, display_cb) {
        this.cancelCardPurchase = false;
        display_cb('Приложите карту');
        await new Promise(resolve => setTimeout(resolve, 2000));

        display_cb('Обработка карты');

        await new Promise(resolve => setTimeout(resolve, 2000));
        display_cb('Связь с банком');
        if (this.cancelCardPurchase) {
            display_cb('Оплата картой остановлена, для продолжения выберите напиток заново.');
            return;
        };

        await new Promise(resolve => setTimeout(resolve, 2000));
        if(cb()) {
            display_cb('Банковская транзакция успешно завершена.');
            return true;
        } else {
            display_cb('Банковская транзакция не удалась.');
        };   
    };

    BankCardCancel() {
        this.cancelCardPurchase = true;
    };

    Vend(product_idx, cb) {
        const res = cb();
        return res ? `Напиток ${product_idx} выдан`: 'Ошибка!';
    }
};

export default Emulator;
