const arrUnshift = [3,7,24,29];
const res = arrUnshift.unshift('bobbyyyy team');
console.log('result of bobby team', res);
console.log(arrUnshift);

const arrUnshift1 = [42,51,52,56];
const res1 = arrUnshift1.unshift('monee team');
console.log('result of monee team', res1);
console.log(arrUnshift1);


const arrUnshift3 = [3,7,"sunil",29];
const arrUnshift4 = [42,51,"mounish",56];
const arrUnshift5 = arrUnshift3.concat(arrUnshift4)
const res6 = arrUnshift5.unshift('monee team vs boby team');
console.log('result of boby vs monee team', res6);
console.log(arrUnshift5);
