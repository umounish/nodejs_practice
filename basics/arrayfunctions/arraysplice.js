const arrAddInMiddle = [11,12,"virat",14];
const res = arrAddInMiddle.splice(4);
console.log(res);
console.log(arrAddInMiddle);

const arr3 = [11,12,13,14,15,16];
for (let i =0; i< arr3.length; i++) {
    if (arr3[i] === 12){
        console.log(i);
        arr3.splice(1,2, 'Dhoni');
    }
}

console.log(arr3);

