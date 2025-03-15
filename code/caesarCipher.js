export default function caeserCipher(plainText = "", shift = 0) {
  let cipherText = "";
  for (let letter in plainText) {
    let charCode = plainText.charCodeAt(letter);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      let cipherLetter = String.fromCharCode(
        plainText.charCodeAt(letter) + shift
      );
      cipherText += cipherLetter;
    } else {
      cipherText += plainText[letter];
    }
  }
  return cipherText;
}

