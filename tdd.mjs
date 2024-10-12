import CalculatorString from "./index.mjs";

const calculator = new CalculatorString();
  console.log("Test 1: Empty String");
  console.log("Input: ''");
  console.log("Output:", calculator.compute("")); // Output: 0
  console.log("-----------");
  
  console.log("Test 2: Single Number");
  console.log("Input: '1'");
  console.log("Output:", calculator.compute("1")); // Output: 1
  console.log("-----------");
  
  console.log("Test 3: Two Numbers");
  console.log("Input: '1,2'");
  console.log("Output:", calculator.compute("1,2")); // Output: 3
  console.log("-----------");
  
  console.log("Test 4: Multiple Numbers");
  console.log("Input: '1,2,3,4'");
  console.log("Output:", calculator.compute("1,2,3,4")); // Output: 10
  console.log("-----------");
  
  console.log("Test 5: New Line Support");
  console.log("Input: '1\\n2,3'");
  console.log("Output:", calculator.compute("1\n2,3")); // Output: 6
  console.log("-----------");
  
  console.log("Test 6: Custom Delimiter");
  console.log("Input: '//;\\n1;2'");
  console.log("Output:", calculator.compute("//;\n1;2")); // Output: 3
  console.log("-----------");
  
  console.log("Test 7: Ignore Numbers Greater Than 1000");
  console.log("Input: '2,1001'");
  console.log("Output:", calculator.compute("2,1001")); // Output: 2
  console.log("-----------");
  
  console.log("Test 8: Negative Number Exception");
  try {
      console.log("Input: '1,-2,3'");
      calculator.compute("1,-2,3"); // Expected to throw an error
  } catch (e) {
      console.log("Output:", e.message); // Output: negatives not allowed: -2
  }
  console.log("-----------");
  
  console.log("Test 9: Multiple Negative Numbers Exception");
  try {
      console.log("Input: '1,-2,-3'");
      calculator.compute("1,-2,-3"); // Expected to throw an error
  } catch (e) {
      console.log("Output:", e.message); // Output: negatives not allowed: -2, -3
  }
  console.log("-----------");
  
  console.log("Test 10: Multiple Delimiters");
  console.log("Input: '//[*][%]\\n1*2%3'");
  console.log("Output:", calculator.compute("//[*][%]\n1*2%3")); // Output: 6
  console.log("-----------");
  
  console.log("Test 11: Long Delimiter");
  console.log("Input: '//[***]\\n1***2***3'");
  console.log("Output:", calculator.compute("//[***]\n1***2***3")); // Output: 6
  console.log("-----------");
  