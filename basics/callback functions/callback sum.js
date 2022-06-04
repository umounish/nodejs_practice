//sample callback function

multiplication(10,5);

function multiplication (a,b) {
    console.log(a*b);
}


//sample callback function for divisible by 5

function sample2 (x, y, callback) {
    callback(x+y);  // calling anonymous function here
}

sample2(10, 15, function(result){ // anonymous function defnition
    console.log('result : ', result);
    if (result % 5 === 0) {
        console.log('divisible by 5');
    } else {
        console.log('not divisible by 5');
    }
});


