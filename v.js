let newgame=document.querySelector(".btn--new");
var newimg=document.querySelector(".dice");
let score0=document.querySelector("#score--0");
let current0=document.querySelector("#current--0");
let score1=document.querySelector("#score--1");
let current1=document.querySelector("#current--1");
let rollbutton=document.querySelector(".btn--roll");
let holdbutton=document.querySelector(".btn--hold");
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'dice-1.png';

imgArray[1] = new Image();
imgArray[1].src = 'dice-2.png';

imgArray[2] = new Image();
imgArray[2].src = 'dice-3.png';

imgArray[3] = new Image();
imgArray[3].src = 'dice-4.png';

imgArray[4] = new Image();
imgArray[4].src = 'dice-5.png';

imgArray[5] = new Image();
imgArray[5].src = 'dice-6.png';
let turn=true;
let score00=0;
let score11=0;
let current00=0;
let current11=0;


function roll() {
    let randomm=Math.trunc(Math.random()*6)+1;
    // console.log(randomm);
    newimg.src=imgArray[randomm-1].src;
    if (turn==true) {
        
        if (randomm==1) {
            current0.textContent=0;
            current00=0;
            
            turn=!turn;
            
            
        }
        else {
            
            current00=current00+randomm;
            current0.textContent=current00;
        }    
        
    }
    else{
        if (randomm==1) {
            current1.textContent=0;
            current11=0;
            turn=!turn;
            
            
        }
        else {
            current11=current11+randomm;
            current1.textContent=current11;
            
        }

    }
    
}
holdbutton.addEventListener("click",function() {
    if (turn==true) {
        
        score00=score00+current00;
        score0.textContent=score00;
        current0.textContent=0;
        current00=0;
        turn=!turn;
        if(score00>=100){
            
            document.querySelector(".player--0").style.backgroundColor="grey";
        }
    }
    else {
        score11=score11+current11;
        score1.textContent=score11
        current1.textContent=0;
        current11=0;
        turn=!turn;
        if(score11>=100){
            document.querySelector(".player--0").style.backgroundColor="grey";
            
        }

    }

})
rollbutton.addEventListener("click",roll);
newgame.addEventListener("click",function () {
    current00=0;
    current11=0;
    score00=0;
    score11=0;
    current0.textContent=0;
    current1.textContent=0;
    score0.textContent=0;
    score1.textContent=0;
    turn =true;
    
})
