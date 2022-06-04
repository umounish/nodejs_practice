const arr = [12,16,18,21];

const res = arr.reduce((pv, cv, ci, array) => {
    return pv + cv;
});

console.log(res);