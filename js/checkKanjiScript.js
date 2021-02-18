const checkBtn = $("#checkBtn")

const fromNum = $("#fromNum")
const toNum = $("#toNum")
const level = document.getElementById("selecter")

checkBtn.click(()=>{
    console.log(level.options[level.options.selectedIndex].innerHTML)
})