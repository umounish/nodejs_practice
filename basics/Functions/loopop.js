sum (41, 42, 43, 44, 45, 46, 47, 48, 49, 50);

function sum (...arg) {
    console.log(arg);
  let sumRes = 0;
    for (let i = 0; i < arg.length; i++) {
    sumRes = sumRes + arg[i];
    }
    console.log(sumRes);
}