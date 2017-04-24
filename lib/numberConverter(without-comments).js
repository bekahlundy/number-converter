let numbers = {
  oneToNinteen: ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
  tens: ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
  magnitudes : ["", "thousand", "million", "billion", "trillion", "quadrillion"]
}

module.exports = {
  numberConverter(num) {
    let answerArray = [];
    let magnitude = 0;

    const intoWords = (num, magnitude)  => {
      let hundreds = Math.floor(num / 100);
      let twoDigits = num % 100;
      let tensPlace = Math.floor(twoDigits / 10);
      let onesPlace = Math.floor(twoDigits % 10);
      let chunkLength = num.toString().length;
      let arr = [];

      if (hundreds > 0) {
        arr.push(numbers.oneToNinteen[hundreds]);
        arr.push('hundred');
      }

      if (twoDigits > 10 && twoDigits < 19) {
        arr.push(numbers.oneToNinteen[twoDigits])
      } else if (tensPlace > 0 && onesPlace > 0) {
        arr.push(numbers.tens[tensPlace] + '-' + numbers.oneToNinteen[onesPlace]);
      } else if (onesPlace < 10) {
        arr.push(numbers.oneToNinteen[onesPlace]);
      }

      if (chunkLength > 4) {
        let atPeriod = num.toString().indexOf('.')
        let firstDec = num.toString().charAt(atPeriod + 1)
        let secondDec = num.toString().charAt(atPeriod + 2)
        arr.push('and ' + firstDec + secondDec + '/100')
      }

      if (magnitude > 0)
      arr.push(numbers.magnitudes[magnitude]);
      return arr.join(' ');
    }

    for (var i = 0; num > 0; i++) {
      let chunk = num % 1000;
      answerArray.unshift(intoWords(chunk, magnitude));
      num = Math.floor(num / 1000);
      magnitude++;
    }
    return answerArray.join(', ');
  }
}
