let count = 0;
const value = document.querySelector("#value");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

increase.addEventListener('click', function(){
    count++;
    value.textContent = count;
});
decrease.addEventListener('click', function(){
    count--;
    value.textContent = count;
});
reset.addEventListener('click', function(){
    count=0;
    value.textContent = count;
});