let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_button");
let newBtn = document.querySelector("#new_button");
let msgContainer= document.querySelector(".mesContainer");
let mes=document.querySelector("#msg");
let body=document.querySelector("body");
let turno = true;

let w_p = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const reset=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    
}
const showWinner=(winner)=>{
        mes.innerText='winner is '+winner;
        msgContainer.classList.remove("hide");
        disableBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
     
        if(turno){
            box.innerText="O";
            turno=false;
            
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of w_p){
        
        let val1=boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;
        if(val1!="" && val2!="" &&val3!="" ){
            if(val1===val2 && val2===val3){
              
                showWinner(val1);
            }
        }
    }
}
resetBtn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);

let col=true;
let mode=document.querySelector("#mode");
mode.addEventListener("click", ()=>{
    if(col){
        body.style.backgroundColor="white";
        body.style.color="black";
        mode.style.backgroundColor="black";
        mode.textContent="Dark mode";
        mode.style.color="white";
        col=false;
    }
    else{
        body.style.backgroundColor="black";
        body.style.color="white";
        mode.style.backgroundColor="white";
        mode.textContent="Light mode";
        mode.style.color="black";
        col=true;
    }
})