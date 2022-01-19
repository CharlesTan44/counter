
const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');
let count = 0;

console.log(btns)

btns.forEach(function(btn) {
    btn.addEventListener('click', (event) => {
        console.log(event.target.classList);
        if(event.target.classList.contains('decrease')) {
            count -= 1;
        } else if(event.target.classList.contains('increase')) {
            count += 1;
        } else {
            count = 0;
        }
        if(count > 0) value.style.color = "green";
        if(count < 0) value.style.color = "red";
        if(count === 0) value.style.color ="black";
        value.textContent = count;
    });
});