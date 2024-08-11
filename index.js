let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");
let copyIcon = document.getElementById("copyIcon");
let rgb1 = "#004773";
let rgb2 = "#54d542";

const hexValues = () => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton1 = () => {
    rgb1 = hexValues();
    console.log(rgb1);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const handleButton2 = () => {
    rgb2 = hexValues();
    console.log(rgb2);
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

const handleCopy = () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    showCopyAlert();
}

const showCopyAlert = () => {
    // Create a div for the alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert'; // Set class for styling
    alertDiv.textContent = 'CSS Code Copied!'; // Set text content
    document.body.appendChild(alertDiv); // Append to the body

    // Hide the alert after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyIcon.addEventListener("click", handleCopy);