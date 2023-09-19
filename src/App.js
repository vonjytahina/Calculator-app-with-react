import React, { useState } from "react";

function App() {
  const [themeValue, setThemeValue] = useState(0);

  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("0"); // Set initial screen value to 0

  const handleThemeChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
    setThemeValue(newValue);

    var background = `hsl(223, 31%, 20%)`;
    var mainBackground = `hsl(222, 26%, 31%)`;
    var screenBackground = `hsl(224, 36%, 15%)`;
    var editKeyText = `hsl(0, 0%, 100%)`;
    var editKeyBackground = `hsl(225, 21%, 49%)`;
    var editKeyShadow = `hsl(224, 28%, 35%)`;
    var equalKeyText = `hsl(0, 0%, 100%)`;
    var equalKeyBackground = `hsl(6, 63%, 50%)`;
    var equalKeyShadow = `hsl(6, 70%, 34%)`;
    var numericKeyBackground = `hsl(30, 25%, 89%)`;
    var numericKeyShadow = `hsl(28, 16%, 65%)`;

    var darkText = `hsl(221, 14%, 31%)`;
    var whiteText = `hsl(0, 0%, 100%)`;

    if (newValue >= 0 && newValue <= 19) {
      background = `hsl(223, 31%, 20%)`;
      document.documentElement.style.setProperty("--background", background);
      mainBackground = `hsl(222, 26%, 31%)`;
      document.documentElement.style.setProperty("--main-background", mainBackground);
      screenBackground = `hsl(224, 36%, 15%)`;
      document.documentElement.style.setProperty("--screen-background", screenBackground);
      editKeyBackground = `hsl(225, 21%, 49%)`;
      document.documentElement.style.setProperty("--edit-key-background", editKeyBackground);
      editKeyShadow = `hsl(224, 28%, 35%)`;
      document.documentElement.style.setProperty("--edit-key-shadow", editKeyShadow);
      equalKeyBackground = `hsl(6, 63%, 50%)`;
      document.documentElement.style.setProperty("--equal-key-background", equalKeyBackground);
      equalKeyShadow = `hsl(6, 70%, 34%)`;
      document.documentElement.style.setProperty("--equal-key-shadow", equalKeyShadow);
      numericKeyBackground = `hsl(30, 25%, 89%)`;
      document.documentElement.style.setProperty("--numeric-key-background", numericKeyBackground);
      numericKeyShadow = `hsl(28, 16%, 65%)`;
      document.documentElement.style.setProperty("--numeric-key-shadow", numericKeyShadow);
      darkText = `hsl(221, 14%, 31%)`;
      document.documentElement.style.setProperty("--dark-text", darkText);
      whiteText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--white-text", whiteText);
      editKeyText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--edit-key-text", editKeyText);
      equalKeyText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--equal-key-text", equalKeyText);
    } else if (newValue >= 20 && newValue <= 80) {
      background = 'hsl(0, 5%, 81%)';
      document.documentElement.style.setProperty("--background", background);
      mainBackground = `hsl(0, 0%, 90%)`;
      document.documentElement.style.setProperty("--main-background", mainBackground);
      screenBackground = `hsl(0, 0%, 93%)`;
      document.documentElement.style.setProperty("--screen-background", screenBackground);
      editKeyBackground = `hsl(185, 42%, 37%)`;
      document.documentElement.style.setProperty("--edit-key-background", editKeyBackground);
      editKeyShadow = `hsl(185, 58%, 25%)`;
      document.documentElement.style.setProperty("--edit-key-shadow", editKeyShadow);
      equalKeyBackground = `hsl(25, 98%, 40%)`;
      document.documentElement.style.setProperty("--equal-key-background", equalKeyBackground);
      equalKeyShadow = `hsl(25, 99%, 27%)`;
      document.documentElement.style.setProperty("--equal-key-shadow", equalKeyShadow);
      numericKeyBackground = `hsl(30, 25%, 89%)`;
      document.documentElement.style.setProperty("--numeric-key-background", numericKeyBackground);
      numericKeyShadow = `hsl(28, 16%, 65%)`;
      document.documentElement.style.setProperty("--numeric-key-shadow", numericKeyShadow);
      darkText = `hsl(60, 10%, 19%)`;
      document.documentElement.style.setProperty("--dark-text", darkText);
      whiteText = `hsl(60, 10%, 19%)`;
      document.documentElement.style.setProperty("--white-text", whiteText);
      editKeyText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--edit-key-text", editKeyText);
      equalKeyText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--equal-key-text", equalKeyText);
    } else if (newValue >= 81 && newValue <= 100) {
      background = 'hsl(268, 71%, 12%)';
      document.documentElement.style.setProperty("--background", background);
      mainBackground = `hsl(268, 75%, 9%)`;
      document.documentElement.style.setProperty("--main-background", mainBackground);
      screenBackground = `hsl(268, 71%, 12%)`;
      document.documentElement.style.setProperty("--screen-background", screenBackground);
      editKeyBackground = `hsl(281, 89%, 26%)`;
      document.documentElement.style.setProperty("--edit-key-background", editKeyBackground);
      editKeyShadow = `hsl(285, 91%, 52%)`;
      document.documentElement.style.setProperty("--edit-key-shadow", editKeyShadow);
      equalKeyBackground = `hsl(176, 100%, 44%)`;
      document.documentElement.style.setProperty("--equal-key-background", equalKeyBackground);
      equalKeyShadow = `hsl(177, 92%, 70%)`;
      document.documentElement.style.setProperty("--equal-key-shadow", equalKeyShadow);
      numericKeyBackground = `hsl(268, 47%, 21%)`;
      document.documentElement.style.setProperty("--numeric-key-background", numericKeyBackground);
      numericKeyShadow = `hsl(290, 70%, 36%)`;
      document.documentElement.style.setProperty("--numeric-key-shadow", numericKeyShadow);
      darkText = `hsl(52, 100%, 62%)`;
      document.documentElement.style.setProperty("--dark-text", darkText);
      whiteText = `hsl(52, 100%, 62%)`;
      document.documentElement.style.setProperty("--white-text", whiteText);
      editKeyText = `hsl(0, 0%, 100%)`;
      document.documentElement.style.setProperty("--edit-key-text", editKeyText);
      equalKeyText = `hsl(198, 20%, 13%)`;
      document.documentElement.style.setProperty("--equal-key-text", equalKeyText);
    }
  };

  const handleNumericClick = (value) => {
    if (result !== "0") {
      // If there's a result, start a new calculation
      setFirstOperand(value);
      setSecondOperand("");
      setOperator(null);
      setResult("0");
    } else if (operator === null) {
      // If no operator is set, update the first operand
      // Convert dots to commas for display
      const newValue = value === "." ? "," : value;
      setFirstOperand(firstOperand + newValue);
    } else {
      // If an operator is set, update the second operand
      // Convert dots to commas for display
      const newValue = value === "." ? "," : value;
      setSecondOperand(secondOperand + newValue);
    }
  };

  const handleOperatorClick = (value) => {
    if (firstOperand !== "") {
      // Set the operator only if a first operand is present
      setOperator(value);
    }
  };

  const handleDeleteClick = () => {
    if (result !== "0") {
      // Clear the result
      setResult("0");
    } else if (secondOperand !== "") {
      // Delete the last character of the second operand
      setSecondOperand(secondOperand.slice(0, -1));
    } else if (operator !== null) {
      // Clear the operator
      setOperator(null);
    } else if (firstOperand !== "") {
      // Delete the last character of the first operand
      setFirstOperand(firstOperand.slice(0, -1));
    }
  };

  const handleResetClick = () => {
    // Reset the screen value to 0 without clearing the result
    setResult("0");
    setFirstOperand("");
    setSecondOperand("");
    setOperator(null);
  };

  const handleEqualClick = () => {
    if (firstOperand !== "" && secondOperand !== "" && operator !== null) {
      // Replace commas with dots for calculations
      const num1 = parseFloat(firstOperand.replace(/,/g, "."));
      const num2 = parseFloat(secondOperand.replace(/,/g, "."));
      let newResult;

      switch (operator) {
        case "+":
          newResult = num1 + num2;
          break;
        case "-":
          newResult = num1 - num2;
          break;
        case "x":
          newResult = num1 * num2;
          break;
        case "/":
          if (num2 !== 0) {
            newResult = num1 / num2;
          } else {
            newResult = "Error";
          }
          break;
        default:
          newResult = "Error";
          break;
      }

      // Limit the result to three decimal places
      newResult = parseFloat(newResult.toFixed(3));

      // Format the result with commas for display
      setResult(newResult.toString().replace(/\./g, ","));
      setFirstOperand("");
      setSecondOperand("");
      setOperator(null);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="app">
          <div className="top">
            <div className="left">calc</div>
            <div className="right">
              <div className="theme-text">theme</div>
              <div className="theme-choice">
                <label htmlFor="theme">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>{" "}
                </label>
                <input
                  type="range"
                  id="theme"
                  name="theme"
                  min="0"
                  max="100"
                  defaultValue="0"
                  onChange={handleThemeChange}
                />{" "}
              </div>
            </div>
          </div>
          <div className="middle">
            <div id="screen">
              {operator !== null
                ? secondOperand !== ""
                  ? secondOperand
                  : ""
                : firstOperand || result}
            </div>
          </div>
          <div className="bottom">
            <div
              className="numeric"
              id="seven"
              onClick={() => handleNumericClick("7")}
            >
              7
            </div>
            <div
              className="numeric"
              id="eight"
              onClick={() => handleNumericClick("8")}
            >
              8
            </div>
            <div
              className="numeric"
              id="nine"
              onClick={() => handleNumericClick("9")}
            >
              9
            </div>
            <div
              className="edit"
              id="delete"
              onClick={() => handleDeleteClick()}
            >
              del
            </div>
            <div
              className="numeric"
              id="four"
              onClick={() => handleNumericClick("4")}
            >
              4
            </div>
            <div
              className="numeric"
              id="five"
              onClick={() => handleNumericClick("5")}
            >
              5
            </div>
            <div
              className="numeric"
              id="six"
              onClick={() => handleNumericClick("6")}
            >
              6
            </div>
            <div
              className="operator"
              id="plus"
              onClick={() => handleOperatorClick("+")}
            >
              +
            </div>
            <div
              className="numeric"
              id="one"
              onClick={() => handleNumericClick("1")}
            >
              1
            </div>
            <div
              className="numeric"
              id="two"
              onClick={() => handleNumericClick("2")}
            >
              2
            </div>
            <div
              className="numeric"
              id="three"
              onClick={() => handleNumericClick("3")}
            >
              3
            </div>
            <div
              className="operator"
              id="minus"
              onClick={() => handleOperatorClick("-")}
            >
              -
            </div>
            <div
              className="operator"
              id="dot"
              onClick={() => handleNumericClick(".")}
            >
              .
            </div>
            <div
              className="numeric"
              id="zero"
              onClick={() => handleNumericClick("0")}
            >
              0
            </div>
            <div
              className="operator"
              id="divided"
              onClick={() => handleOperatorClick("/")}
            >
              /
            </div>
            <div
              className="operator"
              id="times"
              onClick={() => handleOperatorClick("x")}
            >
              x
            </div>
            <div className="edit" id="reset" onClick={handleResetClick}>
              reset
            </div>
            <div className="equal" id="equal" onClick={handleEqualClick}>
              =
            </div>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/vonjytahina"
          target="_blank"
        >
          Vonjy Tahina CHAN
        </a>
        .
      </div>
    </div>
  );
}

export default App;
