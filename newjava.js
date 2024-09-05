/*let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let modec = "light";

modebtn.addEventListener("click",() => {
    if(modec === "light"){
        modec = "dark";
       body.classList.add("dark");
       body.classList.remove("white");
    }else{
        modec = "light";
        body.classList.add("white");
        body.classList.remove("dark");
    }
    console.log(modec);
});*/

//tic tac toe

let btn = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let winner = document.querySelector(".win-cont");
let win = document.querySelector("#win");

let turn2 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turn2 = true;
    enableBoxes();
}
btn.forEach((val)=>{
    val.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn2 === true){
            val.innerText = "X";
            turn2 = false;
        }else{
            val.innerText = "0";
            turn2 = true;
        }
        val.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of btn){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of btn){
        box.disabled = false;
        box.innerText = "";
        winner.classList.add("hide");
    }
};
const showWinner = (winner1) => {
    win.innerText = `congratulation the winner is ${winner1}`;
    winner.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
    //    console.log(pattern[0],pattern[1],pattern[2]);
       let pos1 = btn[pattern[0]].innerText;
       let pos2 = btn[pattern[1]].innerText;
       let pos3 = btn[pattern[2]].innerText;
    //    console.log(pos1);
    //    console.log(pos2);
    //    console.log(pos3);
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2  && pos2 === pos3){
            console.log("winner",pos1);
            showWinner(pos1);
        }
    }

     }
};
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
