const body = document.querySelector("body")
const colorName = document.getElementById("colorName")
const rgbColor = document.getElementById("rgbColor")

function setColor(params) {
  body.style.backgroundColor = params
  colorName.textContent = `You Just Clicked: ${params}`
  rgbColor.textContent = "" //No text as rgb not clicked
}

function setRGB(){
  const red = Math.round(Math.random()*255)
  const green = Math.round(Math.random()*255)
  const blue = Math.round(Math.random()*255)

  const color = `rgb(${red}, ${green}, ${blue})`

  body.style.backgroundColor = color
  colorName.textContent = `You Just Picked a Random Color `
  rgbColor.textContent = `RGB Value: ${color}`
}