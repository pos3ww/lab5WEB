const make1 = (n, step) => {
    return Array(n)
        .fill()
        .map((element, index) => Math.pow(index+1, 3) * 3 * Math.pow(3, 2*index+1))
        .filter((element, index) => !(index % step))
}


const make2 = (N) => {
    return  new Array(N)
        .fill(null)
        .map((arr, i) => new Array(N)
            .fill(null)
            .map((elem, j) => (i+j)%2 == 0 ? 1 : Math.floor(Math.random()*8+2) )
        )
}

const make3 = () => {
    const collection = {
        Name: "Ivan",
        Surname: "Pushkarov",
        Patronymic: "Evhenovych",
    }
    collection.age = 20;

    return [Object.keys(collection), Object.values(collection)];
}

const task1 = document.getElementsByClassName("task1")[0];
const task2 = document.getElementsByClassName("task2")[0];
const task3 = document.getElementsByClassName("task3")[0];

task1.addEventListener("click", () => {
    const n = parseInt(prompt("Input n: "), 10);
    const step = parseInt(prompt("Input step: "), 10);

    const output1 = document.getElementsByClassName("task1")[1];
    const output2 = document.getElementById("task1");

    output1.innerHTML = "";
    output2.innerHTML = "";


    output1.innerHTML += make1(n, step).join(' ');
    output2.innerHTML += "</br>";
    output2.innerHTML += make1(n, step).filter(elem => !(elem%5)).join(' ');
    output2.style.color = "pink";
});

task2.addEventListener("click", () => {
    const n = parseInt(prompt("Input N: "), 10);

    let array = make2(n);
    const output = document.getElementsByClassName("task2")[1];
    output.innerHTML = "";

    array.forEach(arr => {
        output.innerHTML += arr.join(' ');
        output.innerHTML += "</br>";
    });
});

task3.addEventListener("click", () => {
    const [keys, values] = make3();
    const output = document.getElementsByClassName("task3")[1];

    keys.forEach(key => {
        output.innerHTML += key.toString() + " ";
    });

    output.innerHTML += "</br>";

    values.forEach(value => {
        output.innerHTML += value.toString() + " ";
    });
});