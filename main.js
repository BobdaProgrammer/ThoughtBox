let input = document.getElementById("thoughtInput");
let thoughts = localStorage.getItem("thoughts") || "";
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector(".thoughts").innerHTML = thoughts; 
    HideBox();
});
function ShowBox() {
    document.getElementById("thoughtClose").style.display = "";
    input.style.display = "";
    document.getElementById("createThought").style.display = "";
}
function HideBox() {
  document.getElementById("thoughtClose").style.display = "none";
  input.style.display = "none";
  document.getElementById("createThought").style.display = "none";
}
function addThought() {
    if (input.value != "") {
        let newThought = document.createElement("div");
        newThought.className = "ThoughtHold";
        newThought.innerHTML = `<h2 class="thoughtName">${input.value}</h2><button class="newThoughtClose" onclick="DeleteThought(this.parentNode);">x</button><button class="thoughtEdit" onclick="Edit(this.parentNode)">✏️</button>`;
        document.querySelector(".thoughts").appendChild(newThought)
        input.value = "";
        localStorage.setItem("thoughts", document.querySelector(".thoughts").innerHTML);
    }
}

function DeleteThought(element) {
    document.querySelector(".thoughts").removeChild(element)
            localStorage.setItem(
              "thoughts",
              document.querySelector(".thoughts").innerHTML
            );

}

function Edit(element) {
    let h2 = element.children[0];
    h2.contentEditable = "true";
        console.log(h2);
    h2.addEventListener("keydown", function (event) {
        if (h2.textContent.length == 1 && event.key == "Backspace") {
            event.preventDefault();
            h2.textContent = " ";
        }
        if (event.key == "Enter") {
            if (h2.textContent == "") {
                h2.textContent = " ";
            }
            h2.contentEditable = false;
                    localStorage.setItem(
                      "thoughts",
                      document.querySelector(".thoughts").innerHTML
                    );

       } 
    });
            localStorage.setItem(
              "thoughts",
              document.querySelector(".thoughts").innerHTML
            );

}