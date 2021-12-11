const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const tasks = [];

buttonElement.onclick = ev => {

    ev.preventDefault();

    if (inputElement.value){
        
        const liElement = document.createElement("li")
        liElement.innerHTML = `<span>${inputElement.value}</span>`;
        ulElement.appendChild(liElement);
        inputElement.value = "";

    }

};