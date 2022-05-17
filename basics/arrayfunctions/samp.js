let numbers = [0,20,3,10,1,2,30];
numbers.sort( function( a , b)
{
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});


////
console.log(numbers);

const arrsort = [24,7,29,10];

res = arrsort.sort(function(a, b){return a - b});
arr.sort(res);
