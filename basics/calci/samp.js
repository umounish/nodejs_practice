const arguements = process.argv;

const firstInput = arguements[2];
const oper = arguements[3];
const secondInput = arguements[4];

let res;

switch(oper) {
    case "+":
     //addition of given numbers are:
      +parseInt(num1) + +parseInt(num2);
      break;

     case "-":
        //subtraction of given numbers are:
         +parseInt(num1) - + parseInt(num2);
         break;

    case "*":
        //multiplication of given numbers are:
       +parseInt(num1) - +parseInt(num2);
       break;
    
    case "/":
         //division of given numbers are:
          +parseInt(num1) / +parseInt(num2);
          break;


}


console.log(res);


