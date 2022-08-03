// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = ("#FF69B4")

dodger.style.bottom = ("0px");
dodger.style.left = ("0px");

function moveDodgerLeft(){
        const leftNumber = dodger.style.left.replace("px","");
        const left = parseInt(leftNumber, 10);
        
        if (left>0)
        {
        dodger.style.left = `${left-1}px`
        }
    }

function moveDodgerRight(){
const leftNumber = dodger.style.left.replace("px", "");
const left= parseInt(leftNumber, 10);

if (left<360)
{
    dodger.style.left = `${left+1}px`
}
}

document.addEventListener("keydown", function(e) {
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
    }
     if(e.key==="ArrowRight"){
        moveDodgerRight();
    }

}
)