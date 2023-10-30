let availableKeywords = ['HTML', "CSS", "Easy Tutorials", "Javascript", "Where to learn web design", "Chai aur code with js", "How to create a website without coding", "how to go ", 'HTML', "CSS", "Easy Tutorials", "Javascript", "Where to learn web design", "Chai aur code with js", "How to create a website without coding", "how to go "];

const resultBox = document.querySelector(".result-box");
const search = document.querySelector("#search");
let shouldRemoveResultBox = false;
search.onkeyup = function () {
    shouldRemoveResultBox = true;
    let result = [];
    let input = search.value;
    if (input.length) {
        result = availableKeywords.filter(keyword => keyword.toLowerCase().includes(input.toLowerCase()));
        console.log(result);
        if (result.length === 0) {

            result.push(input);
        }
        displayResult(result);
        // }
    }
}

function displayResult(result) {
    console.log("hello");
    resultBox.innerHTML = "";
    const contents = result.map(list => "<li onclick = selectInput(this)>" + list + "</li>")
    resultBox.innerHTML = "<ul>" + contents.join("") + "</ul>"

}

function selectInput(list) {
    // console.log(list.innerText);
    shouldRemoveResultBox = false;
    search.value = list.innerText
    resultBox.innerHTML = ""

}
function removeResultBox() {
    if (shouldRemoveResultBox) {
        setTimeout(function () {
            resultBox.innerHTML = ""
        }, 200);
    }
}

search.addEventListener('blur', removeResultBox);