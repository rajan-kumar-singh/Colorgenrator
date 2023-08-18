const updateClr = () => {
    let randomNumber = Math.trunc(Math.random() * 16777215);
    let randomColor = '#' + randomNumber.toString(16)
    console.log(randomNumber, randomColor);
    document.querySelector(".body").style.backgroundColor = randomColor;
    document.getElementById('color-code').innerHTML = randomColor
    navigator.clipboard.writeText(randomColor);


}
updateClr();
let btn = document.getElementById('btn');
document.querySelector("#btn").addEventListener('click', () => {
    updateClr()

})