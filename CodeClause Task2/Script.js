const captcha = document.querySelector(".captcha"),
    reload = document.querySelector(".reload"),
    inputText = document.querySelector(".icap"),
    checkBtn = document.querySelector(".btn"),
    state = document.querySelector(".status"),
    Name=document.querySelector(".Name"),
    Email=document.querySelector(".Email"),
    Contact=document.querySelector(".Contact"),
    Address=document.querySelector(".Address"),
    Submit=document.querySelector(".sub-btn");
let allchar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let ranchar = allchar[Math.floor(Math.random() * allchar.length)];
        console.log(ranchar);
        captcha.innerText += ` ${ranchar}`;
    }
}
getCaptcha();
reload.addEventListener("click", () => {
    captcha.innerText = "";
    getCaptcha();
});
checkBtn.addEventListener("click", e => {
    e.preventDefault();
    state.style.display = "block";
    let inputVal = inputText.value.split('').join(' ');
    if (inputVal == captcha.innerText) {
        state.style.color = "green";
        state.innerText = "Captcha Matched...";
        Submit.classList.add("active");
    }
    else {
        state.style.color = "red";
        state.innerText = "Enter valid Captcha...";
        Submit.classList.remove("active");
    }
});