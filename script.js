const container = document.getElementById('container');
const button = document.getElementById('button');
let gecici = 0;
ans = 64;
button.textContent = "button";
grid(ans);
gecici = ans;
button.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let ans = prompt("please enter a number between 1 - 100");
    while (ans !== null && (ans < 1 || ans > 100)) {
        ans = prompt("Please enter a number between 1 - 100");
        gecici = ans;
    }
    if (ans !== null) {
        grid(ans);
        gecici = ans;
    } else if (ans == null){
        ans = gecici;
        grid(ans);
    }
})
function grid(ans) {
    for (let i = 0; i < ans; i++) {
        for(let j =0; j < ans; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
            square.style.display = "block";
            square.style.width = `${600 / ans}px`;
            square.style.height = `${600 / ans}px`;
            square.addEventListener("mouseover", () => {
                square.classList.add("colored");
            })
        }
      }
}

