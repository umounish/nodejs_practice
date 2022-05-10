   //  comparision including string name in the output

   const str = 'kotak';
   const strSplit = str.split('');
   const reversedStr = strSplit.reverse('');
   const joinReversed = reversedStr.join('');
   
   
   if (str === joinReversed) {
       console.log(`Given string ${str} is a palindrome`);
   } else
   {console.log("Given string " + str + " is not a palindrome");
   }