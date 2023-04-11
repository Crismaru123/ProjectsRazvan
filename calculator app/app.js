// select DOM elements
const output = document.getElementById("output");
const buttons = document.querySelectorAll(".button");

// add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // get button value
    const value = e.target.innerHTML;

    switch (value) {
      case "AC":
        output.value = "";
        break;
      case "←":
        output.value = output.value.slice(0, -1);
        break;
      case "÷":
        output.value += "/";
        break;
      case "×":
        output.value += "*";
        break;
      case "-":
        output.value += "-";
        break;
      case "+":
        output.value += "+";
        break;
      case ".":
        if (output.value.indexOf(".") === -1) {
          output.value += ".";
        }
        break;
      case "=":
        try {
          output.value = eval(output.value);
        } catch (error) {
          output.value = "Error";
        }
        break;
      default:
        output.value += value;
    }
  });
});