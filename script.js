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
}



function Clear(){
    inputText.value = "";
    outputText.value = "";

}

function Copy(){
    outputText.select();
    document.execCommand("copy");
    alert("Copied text");
}




// input.onkeyup = function (e) {
//       const input = e.target.value;
//       output.innerText = mocker(input);
//     };
