sum (2, 3, 4, 5);

function sum (...arg) {
    console.log(arg);
    // const sumRes = arg[0]+ arg[1] + arg[2] + arg[3];
    // console.log(sumRes);
    let  sumRes = 0;
    for (let i = 0; i < arg.length; i++) {
        
        sumRes = sumRes + arg[i];
    }
    console.log(sumRes);
}