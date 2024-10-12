export default class CalculatorString {
    compute(input) {
      if (!input) return 0;
  
      let delimitersList = [',', '\n'];
      let numericString = input;
  
      if (input.startsWith("//")) {
        const delimiterEndIdx = input.indexOf("\n");
        const delimiterPart = input.substring(2, delimiterEndIdx);
        delimitersList = this.extractDelimiters(delimiterPart);
        numericString = input.substring(delimiterEndIdx + 1);
      }
  
      const numbersArray = this.splitValues(numericString, delimitersList);
      const validNumbers = numbersArray.map(num => parseInt(num)).filter(n => n <= 1000);
  
      const negativeValues = validNumbers.filter(n => n < 0);
      if (negativeValues.length) {
        throw new Error(`negatives not allowed: ${negativeValues.join(', ')}`);
      }
  
      return validNumbers.reduce((total, num) => total + num, 0);
    }
  
    extractDelimiters(section) {
      let delimiterList = [];
      if (section.startsWith("[") && section.endsWith("]")) {
        let currentDelimiter = '';
        for (let i = 0; i < section.length; i++) {
          if (section[i] === '[') {
            currentDelimiter = '';
          } else if (section[i] === ']') {
            delimiterList.push(currentDelimiter);
          } else {
            currentDelimiter += section[i];
          }
        }
      } else {
        delimiterList.push(section);
      }
      return delimiterList;
    }
  
    splitValues(numericString, delimiters) {
      let resultArray = [numericString];
      for (let delimiter of delimiters) {
        let tempArray = [];
        resultArray.forEach(part => tempArray.push(...part.split(delimiter)));
        resultArray = tempArray;
      }
      return resultArray;
    }
  }