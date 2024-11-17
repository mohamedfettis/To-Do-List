let submitBtn = document.querySelector('.submit-btn');
let outPutPlace = document.querySelector(".output");

submitBtn.addEventListener("click", function () {
    let inputContent = document.querySelector('#input-text').value.trim();
    if (inputContent.length === 0) {
        alert('Please write your task!');
    } 
        else {
            outPutPlace.innerHTML += `
            <div class="task">
                <span id="task-value">${inputContent}</span>
                <button class="delete">
                    Delete
                </button>
            </div>
            `;
            document.querySelector('#input-text').value = ""; 
        }
});



let outputPlace = document.querySelector(".output");

outputPlace.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove(); // Supprime la tâche
    }

    if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("completed"); // Bascule entre "terminée" et "non terminée"
    }
});




