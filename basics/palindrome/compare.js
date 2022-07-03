
     //         Step 4. comparing the strings - if both strings are match, then given string is a palindrome


const str = 'kotok';
const strSplit = str.split('');
const reversedStr = strSplit.reverse('');
const joinReversed = reversedStr.join('');


if (str === joinReversed) {
    console.log('given string ${str} is a palindrome')
} else
{console.log('given string is ${str} not a palindrome')
}