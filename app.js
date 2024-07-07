let container = document.querySelectorAll(".container>.root> .container2>.days>div").forEach(btn=>{
    btn.addEventListener("mouseover",()=>{
        let amounts =document.querySelectorAll(".container>.root>.container2>.days>div>.amount").forEach(amount=>{
        if(amount.parentElement === btn){
            amount.style.opacity = "1"
        }
        })
    })
    btn.addEventListener("mouseout",()=>{
        let amounts =document.querySelectorAll(".container>.root>.container2>.days>div>.amount").forEach(amount=>{
    
            amount.style.opacity = "0"
        })
    })
})