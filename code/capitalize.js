export default function capitalize(word = "") {
  let capitalizedWord = "";
  
  let splitSentence = word.split(" ");
  let splitWords = splitSentence.filter((word) => word != "");

  for (const word of splitWords) {
    let splitted = word.split("");
    splitted[0] = splitted[0].toUpperCase();
    splitted = splitted.join("").toString();
    capitalizedWord = capitalizedWord + " " + splitted;
  }
  return capitalizedWord;
}
