/**
 * Function checkCashRegister
 * (Author) Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * @param {number} price the total cost of the object the user is buying
 * @param {number} cash the total case they pay will
 * @param {array} cid (cash in draw) the available cash in the draw.
 *
* */

function checkCashRegister(price, cash, cid) {
    let change;
    let status; // "INSUFFICIENT_FUNDS" + "CLOSED" + "OPEN"

    // return {status: "INSUFFICIENT_FUNDS", change: []}
    // if the cash in drawer is less than the change, due or if you cannot return exact change

    // return {status: "CLOSED", change: ${cid}}
    // if the cid value is equal to the change due

    // return {status: "OPEN", change: [...]}
    // with the change due in coins and bills, sorted in highest to lowest order, and the value of the change key

    return `status: ${status}, change: ${change}`;
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);