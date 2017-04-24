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
      // grabs the first digit of the each chunk being sent through
      let twoDigits = num % 100;
      // grabs the next two digits of the chunk (or whatever is remaining)
      let tensPlace = Math.floor(twoDigits / 10);
      // grabs the number in the tensPlace position
      let onesPlace = Math.floor(twoDigits % 10);
      // grabs the number in the onesPlace position
      let chunkLength = num.toString().length;
      // turns our chunk (a number) into a string and finds the length
      let arr = [];
      // creates an empty array to push my new information into

      // if hundreds is a number over 0, push it's correlating string into the arr array. ex. if hundreds is 5, 'five' is pushed into the arr array
      if (hundreds > 0) {
        arr.push(numbers.oneToNinteen[hundreds]);
        arr.push('hundred');
        // then we push the string 'hundred' into the arr array. the arr array is now ['five', 'hundred']
      }

      // if the tens place number and ones place number are both greater than zero, push them into our arr array as strings and put a dash between them
      if (twoDigits > 10 && twoDigits < 19) {
        arr.push(numbers.oneToNinteen[twoDigits])
      } else if (tensPlace > 0 && onesPlace > 0) {
        arr.push(numbers.tens[tensPlace] + '-' + numbers.oneToNinteen[onesPlace]);
      } else if (onesPlace < 10) {
        // if the first number is less than 10, just push that number into our arr array
        arr.push(numbers.oneToNinteen[onesPlace]);
      }

      // check to see if our chunk has more than 3 digits, ex. 523.04 has 6 digits
      if (chunkLength > 4) {
        let percentage = num.toString().slice(-2)
        // convert to a string, grab the last two numbers on that string, ex. '04'
        arr.push('and ' + percentage + '/100')
        // pushes 'and 04/100' to the end of our arr array
      }

      if (magnitude > 0)
      // finally, we are just pushing the magnitude to our array with every iteration
      arr.push(numbers.magnitudes[magnitude]);
      return arr.join(' ');
      // now we join our array into a string to get each originally chunk into a string
    }

    // first, a for loop so we can iterate through our input and break it out into chunks of hundreds
    for (var i = 0; num > 0; i++) {
      let chunk = num % 1000;
      // breaking our number into hundreds
      answerArray.unshift(intoWords(chunk, magnitude));
      num = Math.floor(num / 1000);
      magnitude++;
      // adding to our magnitude each time we need to add another hundred/thousand
    }
    return answerArray.join(', ');
    // finally, we join everything together to get our desired answer
  }
}
