class Emulator {
    constructor() {
        this.cashinActive = false;
        this.cardTransactionActive = false;
    }

    startCashin(drinkPrice, bills, cb) {
        this.cashinActive = true;
        let totalAmount = 0;

        const delay = 1000;

        const processBills = async() => {
            for (const bill of bills) {
                await new Promise((resolve) => setTimeout(resolve, delay));
                totalAmount += bill;
                cb(totalAmount);

                if(!this.cashinActive) {
                    return;
                }
            }

            if (totalAmount >= drinkPrice) {
                const change = totalAmount - drinkPrice;
                console.log(`Сдача: ${change} у.е.`);
            };
        }
        processBills();
    }

    stopCashin() {
        this.cashinActive = false;
        console.log('Оплата остановлена');
    };

    BankCardPurchase(amount, cb, display_cb) {
        this.cardTransactionActive = true;

        display_cb('Приложите карту');
        setTimeout(() => {
            display_cb('Обработка карты');
        }, 1000);

        setTimeout(() => {
            display_cb('Связь с банком');
        }, 2000);

        setTimeout(() => {
            const success = true;
            cb(success);
            display_cb('Оплата прошла успешно');
        }, 3000);
    };

    BankCardCancel() {
        this.cardTransactionActive = false;
        console.log('Оплата картой остановлена');
    };
}

export default Emulator;
