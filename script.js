var con=document.querySelector(".container")
var love=document.querySelector("i")
con.addEventListener("dblclick",()=>{
    love.style.top=("50%")
    love.style.left=("50%")
    love.style.transform=("translate(-50%,-50%) scale(1)")
    love.style.opacity=0.8
   love.style.color=("red")
   setTimeout(()=>{
    love.style.opacity=0
   },1000)
   setTimeout(()=>{
    love.style.transform=("translate(-50%,-50%) scale(0)")
   },3000)
})