let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-game");
let msg_container=document.querySelector("#msg");
let msg=document.querySelector("#para");
let turn=true;
const winningCombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const showWinner = (winner)=>{
    msg.innerText=`Congratulations! Player ${winner} wins!`;
    msg_container.classList.remove("hide");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box clicked");
        if(turn==true){
            box.innerText="X";
            turn=false;
            box.style.color="blue";
        } else{
            box.innerText="O";
            turn=true;
            box.style.color="red";
        }
        box.disabled=true;
        CheckWin();
    })
  
})
const CheckWin=()=> {
    for (let pattern of winningCombination){
        pos1val=boxes[pattern[0]].innerText;
        pos2val=boxes[pattern[1]].innerText;
        pos3val=boxes[pattern[2]].innerText;
        if(pos1val==pos2val && pos2val==pos3val && pos1val!=""){
            
            showWinner(pos1val);
        }
    }

}
const resetGame= ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    msg_container.classList.add("hide");
    turn=true;

}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);