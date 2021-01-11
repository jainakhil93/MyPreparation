// Write a function that takes an array of characters and reverses the letters in place.

function reverse(arrayOfChars) {

    // Reverse the input array of characters in place
    let firstIndex = 0;
    let lastIndex = arrayOfChars.length - 1;

    while (firstIndex < lastIndex){
        //swap characters
        const temp = arrayOfChars[firstIndex];
        arrayOfChars[firstIndex] = arrayOfChars[lastIndex];
        arrayOfChars[lastIndex] = temp;

        // move first towards right and last towards left
        firstIndex++
        lastIndex--
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'empty string';
  let input = ''.split('');
  reverse(input);
  let actual = input.join('');
  let expected = '';
  assertEqual(actual, expected, desc);
  
  desc = 'single character string';
  input = 'A'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'A';
  assertEqual(actual, expected, desc);
  
  desc = 'longer string';
  input = 'ABCDE'.split('');
  reverse(input);
  actual = input.join('');
  expected = 'EDCBA';
  assertEqual(actual, expected, desc);
  
  function assertEqual(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }