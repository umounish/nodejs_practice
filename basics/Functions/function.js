//sum of two no's is even or odd

const x = 51;
const y = 49;

const sumRes = sum (x, y);
evenOdd(sumRes);

function sum (x, y) {
    let res = x + y;
    return res;
}

function evenOdd (sumValue) {
    if (sumValue % 2 === 0) {
        console.log(`${sumValue} is even number`);
    } else {
        console.log(`${sumValue} is odd number`);
    }
}