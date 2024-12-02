const fs = require("fs");
const path = require("path");

const Day02 = () => {
  const filePath = path.join(__dirname, "../inputs/2023/day02.txt");

  const lines = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((line) => line.trim());

  const games = lines.map((line) => {
    const groups = line.split(";").map((group) => group.trim());

    // first step to separate the lines into array of objects
    const parsedGroups = groups.map((group) => {
      const colorCounts = group
        .split(",")
        .map((colorCount) => {
          const match = colorCount.trim().match(/(\d+)\s+(\w+)/);
          return match ? { count: parseInt(match[1]), color: match[2] } : null;
        })
        .filter((entry) => entry !== null);

      return colorCounts;
    });

    return parsedGroups;
  });

  console.log(JSON.stringify(games, null,2));
};

Day02();
