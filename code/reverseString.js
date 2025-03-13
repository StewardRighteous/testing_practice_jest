export default function reverseString(word = "") {
    let reversedText = "";
    for(let i=word.length -1; i>=0; i--){
        reversedText += word[i];
    }
    return reversedText;
}
