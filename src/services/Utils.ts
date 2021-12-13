export default class Utils {
    static round (val: number): number {
        return Math.round(val * 100) / 100;
    }

    static calcPercent(amount: number, percent: number) {
        const owner_fee = Utils.round(amount * percent / 100);

        return {
            owner_fee,
            company_fee: amount - owner_fee
        }
    }
}