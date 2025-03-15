export default function analyzeArray(array = []) {
  let analyzed, average, min, max, length, sumOfAll;
  let sorted = array.sort();
  sumOfAll = sorted.reduce((a, b) => a + b, 0);
  min = sorted[0];
  max = sorted[sorted.length-1];
  length = sorted.length;
  average = sumOfAll / length;
  analyzed = {
    average,
    min,
    max,
    length,
  };
  return analyzed;
}
