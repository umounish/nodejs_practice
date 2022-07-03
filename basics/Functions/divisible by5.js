function sumres(x,y,z) {
    let sum = x+y+z;
    return sum;
}

function evenOdd(a) {
    if (a %5 === 0) {
    console.log(`the sumvalue ${a} is divisible by 5`);
    }
    else{
        console.log(`the sumvalue ${a} is not divisible by 5`);
    }

}

re1 = sumres(10 , -15 , 25);
console.log(re1);
evenOdd (re1);

re2 = sumres(145 , 150, 195);
console.log(re2);
evenOdd (re2);

re3 = sumres(115 , 117, 119);
console.log(re3);
evenOdd (re3);