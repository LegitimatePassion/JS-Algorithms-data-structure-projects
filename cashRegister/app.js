/**
 * Function checkCashRegister
 * (Author) Joshua Godfrey <Godfreyjosh.jg@gmail.com>
 *
 * @param {number} price the total cost of the object the user is buying
 * @param {number} cash the total case they pay will
 * @param {array} cid (cash in draw) the available cash in the draw.
 *
 * Currency Unit    Amount
 * Penny    $0.01 (PENNY)
 * Nickel    $0.05 (NICKEL)
 * Dime    $0.1 (DIME)
 * Quarter    $0.25 (QUARTER)
 * Dollar    $1 (ONE)
 * Five Dollars    $5 (FIVE)
 * Ten Dollars    $10 (TEN)
 * Twenty Dollars    $20 (TWENTY)
 * One-hundred Dollars    $100 (ONE HUNDRED)
 *
 *
 * */

// var currencyUnit = {
//     "PENNY": 0.01,
//     "NICKEL": 0.05,
//     "DIME": 0.10,
//     "QUARTER": 0.25,
//     "ONE": 1.00,
//     "FIVE": 5.00,
//     "TEN": 10.00,
//     "TWENTY": 20.00,
//     "ONE HUNDRED": 100.00,
// }

// done!
// return {status: "INSUFFICIENT_FUNDS", change: []}
// if the cash in drawer is less than the change, due or if you cannot return exact change

// Done
// return {status: "CLOSED", change: ${cid}}
// if the cid value is equal to the change due

// todo i need to loop through the object from
// return {status: "OPEN", change: [...]}
// with the change due in coins and bills, sorted in highest to lowest order, and the value of the change key

// return `status: ${status}, change: ${change}`;



function checkCashRegister(price, cash, cid) {
    let denominationObj = [
        {name: "ONE HUNDRED", val: 100},
        {name: "TWENTY", val: 20},
        {name: "TEN", val: 10},
        {name: "FIVE", val: 5},
        {name: "ONE", val: 1},
        {name: "QUARTER", val: 0.25},
        {name: "DIME", val: 0.1},
        {name: "NICKEL", val: 0.05},
        {name: "PENNY", val: 0.01}
    ];
    
    let changeDue = cash - price;
    // creating an object from the cid argument
    let cidTotal = cid.reduce(function (obj, elem) {
        obj.total += elem[1];
        obj[elem[0]] = elem[1];
        return obj;
    }, {total: 0})

    // check and see if the cid is less than the change due, if true, return insufficient funds
    if (cidTotal.total === changeDue) {
        return {status: "CLOSED", change: cid}
    } else if (cidTotal.total < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }

    const denoOwed = denominationObj.reduce(function(arr, deno){
        let amtDue = 0;
        while (register[deno.name] > 0 && changeDue >= deno.val) {
            register[deno.name] -= deno.val;
            changeDue -= deno.val;
            amtDue += deno.val;
            changeDue = Math.round(changeDue * 100) / 100;
        }
        if (amtDue > 0) arr.push([deno.name, amtDue]);
        return arr;
    }, [])

    if (changeDue > 0) return ;

    return {status: "OPEN", change: denoOwed};
}

// let test = checkCashRegister(1900, 2000, [["ONE HUNDRED", 100]]);
// let test = checkCashRegister(100, 2000, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 3000]]);
// console.log(test);

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// should return {status: "INSUFFICIENT_FUNDS", change: []})
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//  should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}