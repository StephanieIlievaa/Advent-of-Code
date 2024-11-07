const fs = require("fs");
const path = require("path");

const Day01 = () => {
  const filePath = path.join(__dirname, "../inputs/2023/day01.txt");

  const lines = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim());


  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const reversedWords = words.map(word => word.split("").reverse().join(""));

  const wordToDigit = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
  };

  function findFirstDigit(line) {
    let minIndex = line.length;
    let firstDigit = null;

    const digitMatch = line.match(/\d/);
    if (digitMatch) {
      minIndex = digitMatch.index;
      firstDigit = digitMatch[0];
    }


    for (let i = 0; i < words.length; i++) {
      const index = line.indexOf(words[i]);
      if (index !== -1 && index < minIndex) {
        minIndex = index;
        firstDigit = wordToDigit[words[i]];
      }
    }
    return firstDigit;
  }

  function findLastDigit(line) {
    const reversedLine = line.split("").reverse().join("");
    let minIndex = reversedLine.length;
    let lastDigit = null;

    const digitMatch = reversedLine.match(/\d/);
    if (digitMatch) {
      minIndex = digitMatch.index;
      lastDigit = digitMatch[0];
    }

    for (let i = 0; i < reversedWords.length; i++) {
      const index = reversedLine.indexOf(reversedWords[i]);
      if (index !== -1 && index < minIndex) {
        minIndex = index;
        lastDigit = wordToDigit[words[i]];
      }
    }
    return lastDigit;
  }

  function getCalibrationValues(lines) {
    return lines.map((line) => {
      const first = findFirstDigit(line);
      const last = findLastDigit(line);

      if (first !== null && last !== null) {
        const calibrationValue = parseInt(first + last, 10);
        console.log(`Line: "${line}" -> Calibration value: ${calibrationValue}`);
        return calibrationValue;
      }
      return null;
    }).filter(value => value !== null);
  }


  const calibrationValues = getCalibrationValues(lines);


  const sumOfCalibrationValues = calibrationValues.reduce((sum, value) => sum + value, 0);

  console.log("Calibration Values:", calibrationValues);
  console.log("Sum of Calibration Values:", sumOfCalibrationValues);
};

Day01();
