
let diceOne={
val:6,
roll:()=>{
let randomN = Math.floor((Math.random() * diceOne.val) + 1) 
document.querySelector('.con div:first-child').className =`dice-${randomN}`  
}

}

let diceTow={
    val:6,
    roll:()=>{
    let randomN = Math.floor((Math.random() * diceTow.val) + 1) 
    document.querySelector('.con div:last-child').className =`dice-${randomN}`   
      
}

}

document.querySelector('.botton').addEventListener('click',()=>{
    diceOne.roll()
    diceTow.roll()
})