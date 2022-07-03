function addValue (x,y) {
    let sumValue = x + y;
    return sumValue;
}

function divisible (result) {
    if (result %5 === 0) {
    console.log(`${result} is divisible by 5`);
} else {
    console.log (`${result} is not divisible by 5`);
}
}

module.exports = {addValue, divisible};