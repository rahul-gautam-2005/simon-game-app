let gameSeq=[];
let userSeq=[];

let btns=["pink","yellow","green","blue"];

let started=false;
let level=0;

let h3=document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level:${level}`;

    let ranIdx=Math.floor(Math.random() * 3);
    let ranCol=btns[ranIdx];
    let ranbtn=document.querySelector(`.${ranCol}`);
    console.log(ranIdx);
    console.log(ranCol);
    console.log(ranbtn)

    gameSeq.push(ranCol);
    console.log(gameSeq);
    btnFlash(ranbtn);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! your score was <b>${level-1}</b> <br> Press any key to Restart `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        setTimeout(reset,500);
        
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".Div");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started=false;
    level=0;
}