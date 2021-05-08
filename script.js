var inputText = document.getElementById("in");
var outputText = document.getElementById("out");
var output = outputText.innerHTML;

function mocker(txt) {
  const arr = txt.toLowerCase().split("");
  if (txt.trim() === "") {
    return;
  } else {
    const out = arr.map(function (x, i) {
      if (i % 2 === 0) {
        return x;
      } else {
        return x.toUpperCase();
      }
    });
    return out.join("");
  }
}

function mockButton() {
  const input = inputText.value;
  output = mocker(input);
  if (output) {
    outputText.innerHTML = output;
    copyButton.style.display = "inline-block";
  }
}

function Clear() {
  inputText.value = "";
  outputText.value = "";
  copyButton.style.display = "none";
}

function Copy() {
  // navigator.clipboard.writeText(output);
  // output.select();
  // document.execCommand("copy");

  var text = output;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
  alert("Copied text");
}

let copyButton = document.getElementById("copy");
copyButton.style.display = "none";

// input.onkeyup = function (e) {
//       const input = e.target.value;
//       output.innerText = mocker(input);
//     };
