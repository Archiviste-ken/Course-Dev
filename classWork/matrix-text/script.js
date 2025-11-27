const para = document.querySelector("p")
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerText

para.addEventListener("mouseenter", () =>{
    
     setInterval(() => {


    const str = text.split('').map((char,index)=>{
        return characters.split("")[Math.floor(Math.random()*53)]

    }).join("")
  
    para.innerText = str


     },30);  
   
    
    
})