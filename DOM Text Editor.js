

let text = document.querySelector("#myText");
let output = document.querySelector("#output");
let boldBtn = document.querySelector("#boldBtn");
let clearBtn = document.querySelector("#clearBtn");

// Input event listener
text.addEventListener("input", function () {
    output.innerText = text.value;
});

// Bold button event listener
boldBtn.addEventListener("click", function () {
    output.style.fontWeight = "bold";
});

// Clear button event listener
clearBtn.addEventListener("click", function () {
    text.value = "";
    output.innerText = "Your text will appear here.";
    output.style.fontWeight = "normal";
});