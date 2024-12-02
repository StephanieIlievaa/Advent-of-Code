const fs = require("fs");
const path = require("path");

const Day01 = () => {
  const filePath = path.join(__dirname, "../../inputs/2024/day01.txt");

  try {
    const data = fs
      .readFileSync(filePath, "utf-8")
      .trim()
      .split("\n")
      .map((line) => line.split(/\s+/).map(Number));

    const leftList = data.map((pair) => pair[0]);
    const rightList = data.map((pair) => pair[1]);

    // Part 1
    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    const totalDistance = leftList.reduce(
      (sum, leftNum, i) => sum + Math.abs(leftNum - rightList[i]),
      0
    );

    console.log("totalDistance:", totalDistance);

    const frequencyMap = {};
    rightList.forEach((num) => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    const similarityScore = leftList.reduce((score, num) => {
      const countInRightList = frequencyMap[num] || 0;
      return score + num * countInRightList;
    }, 0);

    console.log("similarityScore", similarityScore);
  } catch (error) {
    console.error("Error", error.message);
  }
};

Day01();
