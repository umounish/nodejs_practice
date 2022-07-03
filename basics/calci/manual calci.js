const cal = function cal (x, y, oper) {
    const sum = x + y;
    const subtraction = x - y;
    const multiply = x * y;
    const modulus = x % y;
    }
   const res = cal();
   console.log(process.argv2)




   switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }



  const problem = "3 add 16";
const calculate = opr => {
   const [num1, operation, num2] = opr.split(" ");
   switch (operation) {
      case "add":
         return +num1 + +num2;
      case "divide":
         return +num1 / +num2;
      case "subtract":
         return +num1 - +num2;
      case "multiply":
         return +num1 * +num2;
      case "modulo":
         return +num1 % +num2;
      default:
         return 0;
   }
}
console.log(calculate(problem));

