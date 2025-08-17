let itemContainer = document.querySelector(".itemContainer");
let btn = document.querySelector("#btn");
let input = document.querySelector("#input");

let todoList = [];

function renderToDO() {
    itemContainer.innerHTML = "";
    todoList.map((obj, idx) => {
        let divEle = document.createElement("div");
        divEle.className = "items";
        divEle.innerHTML = `
                <div class="todo">${idx+1}. ${obj.text}</div>
            `;
        let deleteEle = document.createElement("button");
        deleteEle.className = "delete";
        deleteEle.innerText = "❌";
        divEle.appendChild(deleteEle);
        itemContainer.append(divEle);

        deleteEle.onclick = () => {
            handelDelete(obj.id);
        };
    });
}

function handelToDO() {
    if (input.value == "") return;
    let obj = {
        id: Date.now(),
        text: input.value
    };
    todoList.push(obj);
    renderToDO();
    input.value = "";
}

function handelDelete(id) {
    todoList = todoList.filter((obj) => {
        return obj.id !== id;
    });
    renderToDO();
}

// Handels enter key
input.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        console.log("Enter key pressed!");
        handelToDO();
    }
});

btn.addEventListener("click", handelToDO);