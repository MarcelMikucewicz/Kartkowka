const body = document.querySelector("body")
const divcolor = document.createElement("div")
divcolor.style.height = "300px"
divcolor.style.width = "200px"
divcolor.style.border = "1px solid black"
body.appendChild(divcolor)

const inputcolor = document.createElement("input")
inputcolor.type='text'
body.appendChild(inputcolor)

const btncolor = document.createElement("button")
btncolor.innerHTML = "zmien kolor"
body.appendChild(btncolor)

btncolor.addEventListener("click", ()=>{
    divcolor.style.backgroundColor= inputcolor.value
})

const inputlink = document.createElement("input")
body.appendChild(inputlink)

const gobtn = document.createElement("button")
gobtn.innerHTML = "przenies"
 body.appendChild(gobtn)

 gobtn.addEventListener("click", ()=>{
    const a = document.createElement("a")
    a.setAttribute(`href`, `https://${inputlink.value}`)
    a.innerHTML = "link"
    body.appendChild(a)

 })
 const inputhi = document.createElement("input")
 inputhi.type='text'
 body.appendChild(inputhi)

 const inputwi = document.createElement("input")
 inputwi.type = 'text'
 body.appendChild(inputwi)

 const btnmake = document.createElement("button")
 btnmake.innerHTML = "stwórz"
 body.appendChild(btnmake)

 btnmake.addEventListener("click", ()=>{
 })


  






