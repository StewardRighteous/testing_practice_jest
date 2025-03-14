export default class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static substract(num1, num2){
    return num1 - num2;
  }

  static multiply(num1, num2){
    return num1 * num2;
  }

  static divide(num1, num2){
    if(num2 == 0){
        throw new Error("Divide by Zero Error")
    }
    return num1 / num2;
  }
}
