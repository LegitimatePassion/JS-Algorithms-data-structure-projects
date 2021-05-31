/**
 * Function checkCashRegister
 * (Author) Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * @param {number} price the total cost of the object the user is buying
 * @param {number} cash the total case they pay will
 * @param {array} cid (cash in draw) the available cash in the draw.
 *
 * Currency Unit	Amount
 * Penny	$0.01 (PENNY)
 * Nickel	$0.05 (NICKEL)
 * Dime	$0.1 (DIME)
 * Quarter	$0.25 (QUARTER)
 * Dollar	$1 (ONE)
 * Five Dollars	$5 (FIVE)
 * Ten Dollars	$10 (TEN)
 * Twenty Dollars	$20 (TWENTY)
 * One-hundred Dollars	$100 (ONE HUNDRED)
* */

function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let cidTotal = 0;
    let status; // "INSUFFICIENT_FUNDS" + "CLOSED" + "OPEN"

    // count the total cash in the drawer
    for (let i = 0; i < cid.length; i++) {
        cidTotal = cidTotal + cid[i][1];
        console.log(cidTotal);
    }

    // check and see if the cid is less than the change due, if true, return insufficient funds
    if (cidTotal < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (cidTotal === changeDue) {
        return {status: "CLOSED", change: cid}
    }



    // return {status: "INSUFFICIENT_FUNDS", change: []}
    // if the cash in drawer is less than the change, due or if you cannot return exact change

    // return {status: "CLOSED", change: ${cid}}
    // if the cid value is equal to the change due

    // return {status: "OPEN", change: [...]}
    // with the change due in coins and bills, sorted in highest to lowest order, and the value of the change key

    // return `status: ${status}, change: ${change}`;
}
let test = checkCashRegister(1900, 2000, [["ONE HUNDRED", 100]]);
// let test = checkCashRegister(19.5, 2000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(test);