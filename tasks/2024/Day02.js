const fs = require("fs");
const path = require("path");

const isSafeReport = (report) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }
    if (diff > 0) {
      isDecreasing = false; 
    } else if (diff < 0) {
      isIncreasing = false;  
    }
  }

  return isIncreasing || isDecreasing;
};

const checkRemovingOneLevel = (report) => {
  for (let i = 0; i < report.length; i++) {
    const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isSafeReport(modifiedReport)) {
      return true;  
    }
  }
  return false; 
};

const analyzeReports = () => {
  const filePath = path.join(__dirname, "../../inputs/2024/day02.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const reports = fileContent.trim().split("\n"); 

  let safeCount = 0;

  for (const report of reports) {
    const levels = report.split(' ').map(Number);
    if (isSafeReport(levels) || checkRemovingOneLevel(levels)) {
      safeCount++;
    }
  }

  console.log(`Number: ${safeCount}`);
};

analyzeReports();