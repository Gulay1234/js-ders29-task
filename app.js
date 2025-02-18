let inputs = document.querySelectorAll("input");
let p = document.querySelectorAll("p");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
inputs.forEach(element => {
    element.addEventListener("input", (event) => {
        if (event.target.value == "" || !event.target.checkValidity()) {
            element.nextElementSibling.style.color = "red";
        } else {
            element.nextElementSibling.style.color = "green";
        }
    });
});
let arr = [];
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let obj = {
        userName: inputs[0].value,
        userAge: inputs[1].value,
        index: arr.length + 1
    };
    arr.push(obj);
    console.log(arr);
    console.log("Uğurla əlavə edildi");

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = obj.userName;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = obj.userAge;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = obj.index;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    let button = document.createElement("button");
    button.innerText = "Sil";
    button.style.backgroundColor = "red";
    button.style.borderRadius = "8px";
    button.style.border = "1px solid black";
    button.style.width = "7vw"
    button.style.fontSize = "10px"
    button.style.padding = "4px"
    td4.appendChild(button);
    tr.appendChild(td4);
    button.addEventListener("click", () => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].index === obj.index) {
                arr.splice(i, 1);
                break;
            }
        }
        tr.remove();
        console.log(arr);
    });
    tbody.appendChild(tr);
});
