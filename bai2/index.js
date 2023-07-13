let container = document.querySelector(".in");

function numberOneTriangle(x) {
    let a = "";
    for (let i = 1; i <= x; i++) {
        a += "*";
        const element = document.createElement("div");
        element.innerText = a;
        container.appendChild(element);
    }
}

numberOneTriangle(5);
