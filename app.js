const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
})

const hLinks = document.querySelectorAll("#hLink");
hLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    })
})

const darkMode = document.querySelector("#moon");
const body = document.querySelector("body");
darkMode.addEventListener("click",()=>{
    body.classList.toggle("dark");
})

// Email Sending
const inputs = document.querySelectorAll("input");
const text = document.querySelector("textarea");
function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "5a8320d49b64f1",
        Password : "3676ee232a6c44",
        To : 'yaswa779@gmail.com',
        From : inputs[1].value,
        Subject : "no reply",
        Body : `<html><p>Hi,<hr> This is<hr></p><h2>${inputs[0].value}</h2><strong>${text.value}</strong><br></br><em>Thank You</em></html>`
    }).then(
      message => alert("Thanks for visiting my Profile we will soon meet together :)")
    );
}