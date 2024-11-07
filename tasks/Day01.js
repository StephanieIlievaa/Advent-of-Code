const fs = require("fs");
const path = require("path");

const Day01 = () => {
  const filePath = path.join(__dirname, "../inputs/2023/day01.txt");

  const lines = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim());

  function getCalibrationValues(lines) {
    const values = lines.map((line) => {
      const firstDigit = line.match(/\d/);
      const lastDigit = line.match(/\d(?=[^0-9]*$)/);

      if (firstDigit && lastDigit) {
        return parseInt(firstDigit[0] + lastDigit[0]);
      }
      return null;
    });

    return values.filter((value) => value !== null);
  }

  const calibrationValues = getCalibrationValues(lines);
  const sumOfCalibrationValues = calibrationValues.reduce(
    (sum, value) => sum + value,
    0
  );

  console.log("calibrationValues", calibrationValues);
  console.log("sumOfCalibrationValues", sumOfCalibrationValues);
};

Day01();
