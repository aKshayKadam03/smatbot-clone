// amountStarter
// amountPro
// saveStarter
// savePro

// switch1
// switch2
// switch3

var amountOne = document.getElementById("amountStarter")
var amountTwo = document.getElementById("amountPro")

var saveOne = document.getElementById("saveStarter")
var saveTwo = document.getElementById("savePro")


var btn1 = document.getElementById("switch1")
var btn2 = document.getElementById("switch2")
var btn3 = document.getElementById("switch3")

 


btn1.addEventListener("click",function(){
    btn1.style.backgroundImage = "radial-gradient(circle at 77% 36%, rgb(229, 147, 90), rgb(233, 61, 136))"
    btn3.style.backgroundImage = "none"
    btn2.style.backgroundImage = "none"
    
    amountOne.innerText = "₹ 1600 /month"
    saveOne.innerText = ""
    
       
    amountTwo.innerText = "₹ 5500 /month"
    saveTwo.innerText = ""
})



btn2.addEventListener("click",function(){
     btn2.style.backgroundImage = "radial-gradient(circle at 77% 36%, rgb(229, 147, 90), rgb(233, 61, 136))"
     btn1.style.backgroundImage = "none"
     btn3.style.backgroundImage = "none"
     
     amountOne.innerText = "₹ 1600 /month"
     saveOne.innerText = "save 13%"
     
        
     amountTwo.innerText = "₹ 5000 /month"
     saveTwo.innerText = "save 11%"
})

btn3.addEventListener("click",function(){
    btn3.style.backgroundImage = "radial-gradient(circle at 77% 36%, rgb(229, 147, 90), rgb(233, 61, 136))"
    btn1.style.backgroundImage = "none"
    btn2.style.backgroundImage = "none"
    
    amountOne.innerText = "₹ 1400 /month"
    saveOne.innerText = "save 33%"
    
       
    amountTwo.innerText = "₹ 4700 /month"
    saveTwo.innerText = "save 22%"
})