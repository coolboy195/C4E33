let demo = document.getElementById("demo");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let btnDelete = document.getElementById("btnDelete");
let select = document.getElementById("select");
let table = document.getElementById("table");
let btnInput = document.getElementById("btnInput");

// Ex1
btn.addEventListener("click",() => {
    let newhref = `${input.value}`;
    demo.removeAttribute("href");
    demo.href = newhref;
})

// Ex2
btnDelete.addEventListener("click", () => {
    select[select.selectedIndex].remove();
})

// Ex3
btnInput.addEventListener("click", () => {
    let r = Number(prompt("Input Row Number "));
    let c = Number(prompt("Input Colume Number "));
    let a = prompt("Input to Cell ");
    table.rows[r-1].cells[c-1].innerHTML = a;
})

