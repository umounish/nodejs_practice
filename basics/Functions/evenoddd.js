re1 = sumres(10 , 11 , 12);
evenOdd (re1);
re2 = sumres(143 , 144, 145);
evenOdd (re2);
re3 = sumres(116 , 117, 118);
evenOdd (re3);

function sumres(x,y,z) {
    let sum = x+y+z;
    return sum;
    console.log(`the sum of ${x} and ${y} is: `,sum);
}

function evenOdd(sum) {
    if (sum %2 === 0) {
    console.log(`the sumvalues ${sum} is even`);
    }
    else{
        console.log(`the sumvalues ${sum} is odd`);
    }
    
}