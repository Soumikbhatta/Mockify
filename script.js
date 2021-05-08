var inputText = document.getElementById("in");
var outputText = document.getElementById("out");

function mocker(txt) {
  const arr = txt.toLowerCase().split("");
  const out = arr.map(function (x, i) {
    if (i % 2 === 0) {
      return x;
    } else {
      return x.toUpperCase();
    }
  });

  return out.join("");
}


function mockButton(){
    const input = inputText.value;
    outputText.value = mocker(input);
    pauseButton.style.display = "inline-block";
}



function Clear(){
    inputText.value = "";
    outputText.value = "";
    pauseButton.style.display = "none";

}

function Copy(){
    outputText.select();
    document.execCommand("copy");
    alert("Copied text");
}

let pauseButton = document.getElementById("pause")
pauseButton.style.display = "none";




// input.onkeyup = function (e) {
//       const input = e.target.value;
//       output.innerText = mocker(input);
//     };
