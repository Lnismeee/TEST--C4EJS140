let container = document.querySelector(".in");
let a, b;
a = prompt("Nhập số bắt đầu của dãy số (a): ");
do {
    b = prompt("Nhập số kết thúc của dãy số (b) (b > a):");
} while (a > b);
a = new Number(a);
b = new Number(b);

let sum = 0;

for (let i = a; i <= b; i++) {
    let s = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            s = 1;
            break;
        }
    }
    if (i > 1 && s == 0) {
        sum += i;
    }
}
const element = document.createElement("div");
element.innerText =
    "Tổng số nguyên tố của chuỗi từ " + a + " đến " + b + " là: " + sum;
container.appendChild(element);
