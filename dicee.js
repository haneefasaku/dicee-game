const randomNumber1 = Math.floor(Math.random() * 6) + 1
const imageSource1 = "images/dice" + randomNumber1 + ".png"
const img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", imageSource1)

const randomNumber2 = Math.floor(Math.random() * 6) + 1
const imageSource2 = "images/dice" + randomNumber2 + ".png"
const img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", imageSource2)

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Play 1 win"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Play 2 win 🚩 "
}
else{
    document.querySelector("h1").innerHTML="Draw"
}

