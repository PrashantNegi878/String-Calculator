# String Calculator TDD

## Introduction

This repository contains a simple implementation of a String Calculator using Test-Driven Development (TDD) principles. The calculator can handle various input formats, including custom delimiters, and returns the sum of the numbers provided as a string.

## Requirements

1. **Basic Functionality**
   - The calculator should return `0` for an empty string.
   - The calculator should return the integer value for a single number.
   - The calculator should return the sum of two numbers separated by a comma.

2. **Handling Multiple Numbers**
   - The calculator should handle an unknown amount of numbers.

3. **Support New Lines**
   - The calculator should handle new lines as delimiters (e.g., `1\n2,3` should return `6`).

4. **Custom Delimiters**
   - The calculator should support custom delimiters defined at the start of the input (e.g., `//[delimiter]\n[numbers…]`).
   - Example: `//;\n1;2` should return `3`.

5. **Negative Number Handling**
   - The calculator should throw an error when negative numbers are included in the input. The error message should include all negative numbers.

6. **Ignore Numbers Greater Than 1000**
   - Numbers larger than `1000` should be ignored in the calculation.

7. **Multiple Delimiters**
   - The calculator should support multiple custom delimiters (e.g., `//[*][%]\n1*2%3` should return `6`).

## Test Cases

### Test 1: Empty String
- **Input:** `""`
- **Expected Output:** `0`

### Test 2: Single Number
- **Input:** `"1"`
- **Expected Output:** `1`

### Test 3: Two Numbers
- **Input:** `"1,2"`
- **Expected Output:** `3`

### Test 4: Multiple Numbers
- **Input:** `"1,2,3,4"`
- **Expected Output:** `10`

### Test 5: New Line Support
- **Input:** `"1\n2,3"`
- **Expected Output:** `6`

### Test 6: Custom Delimiter
- **Input:** `"//;\n1;2"`
- **Expected Output:** `3`

### Test 7: Ignore Numbers Greater Than 1000
- **Input:** `"2,1001"`
- **Expected Output:** `2`

### Test 8: Negative Number Exception
- **Input:** `"1,-2,3"`
- **Expected Output:** Throws an Error: `negatives not allowed: -2`

### Test 9: Multiple Negative Numbers Exception
- **Input:** `"1,-2,-3"`
- **Expected Output:** Throws an Error: `negatives not allowed: -2, -3`

### Test 10: Multiple Delimiters
- **Input:** `"//[*][%]\n1*2%3"`
- **Expected Output:** `6`

### Test 11: Long Delimiter
- **Input:** `"//[***]\n1***2***3"`
- **Expected Output:** `6`