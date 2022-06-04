const arr = [18, 25, 29, 37, 42];

const res = arr.filter((value, index, array) => {
    return value > 15;
});

console.log(res);