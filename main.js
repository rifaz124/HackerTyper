let array_script = [];
let count = 0;
let text = document.querySelector("#text");
let container = document.querySelector("#container");

// for (h of hacking_script) {
//     array_script.push(h);
// };

// console.log(array_script);

// window.addEventListener("keypress", () => {
//     // auto scroll
//     container.scrollTop = container.scrollHeight;
//     count++;
//     if (array_script[count - 1] == '\n') {
//         text.innerHTML += array_script[count - 1] + '<br>';

//     }
//     else if (array_script[count - 1] == '\t') {
//         text.innerHTML += array_script[count - 1] + '&nbsp;&nbsp;&nbsp;&nbsp;';
//     }
//     else {
//         text.innerHTML += array_script[count - 1]
//     }
// });

let codeIndex = 0;

document.addEventListener("keypress", function () {
    container.scrollTop = container.scrollHeight;
    let codeString = "";
    for (let i = 0; i < 5; i++) {
        const codeChar = hacking_script[codeIndex];
        if (!codeChar) {
            break;
        }
        if (codeChar === "\n") {
            codeString += "<br><br>";
        } else if (codeChar === "\t") {
            codeString += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        } else {
            codeString += codeChar;
        }
        codeIndex++;
    }
    text.innerHTML += codeString;
});



