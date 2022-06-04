const arr = [5, 10, 'mounish', 27, 17];

const resArr = arr.map((value, index, array) => {
        return (value*5);
});

console.log(resArr);



const arr1 = [5, 10, 50, 27, 17];

const resArr1 = arr1.map((value, index, array) => {
  console.log(index);
if (index === 3) {
    value = 50
}    
    
    return (value*5);
});

console.log(resArr1);


