const menuIcon = document.getElementById("menu-icon")
const menulist = document.getElementById("menu-list")
menuIcon.addEventListener("click", ()=>{
    menulist.classList.toggle("hidden")
})

let nama = prompt('siapa namamu?')
alert('oh nama kamu ' + nama)
alert('welcome to website saya')
