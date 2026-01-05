var istatus = document.querySelector("#status")
var cart = document.querySelector("#cartBtn")

var flag = 0

cart.addEventListener("click", function(){
  if(flag == 0){
    istatus.innerHTML = "Remove from Cart"
    istatus.style.color = "red"
    cart.innerHTML = "Remove"
    cart.style.backgroundColor = "tomato"
    cart.style.color = "white"
    flag = 1
  }else{
    istatus.innerHTML = "Add to Cart"
    istatus.style.color = "green"
    cart.innerHTML = "Add"
    cart.style.backgroundColor = "green"
    cart.style.color = "white"
    flag = 0
  }
})