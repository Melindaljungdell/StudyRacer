var miliSec = 00;
var sec = 00;
var min = 00;
var appendMin = document.getElementById("min");
var appendSec = document.getElementById("sec");
var appendMiliSec = document.getElementById("miliSec");
var pressToStart = document.getElementById("input");
let int = null;

document.getElementById('input').addEventListener('keydown', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(startTimer,10);
});

function startTimer(){

	miliSec ++;

	if (miliSec < 9){
		appendMiliSec.innerHTML = "0" + miliSec;
	}

	if (miliSec > 9){
		appendMiliSec.innerHTML = miliSec;
	}

	if (miliSec > 99){
		sec ++; 
		appendSec.innerHTML = "0" + sec;
		miliSec = 0;
		appendMiliSec.innerHTML = "0" + 0; 
	}

	if (sec < 9){
		appendSec.innerHTML = "0" + sec;
	}

	if (sec > 9){
		appendSec.innerHTML = sec;
	}

	if (sec > 59){
		appendMin.innerHTML = "0" + min +1;
		sec = 0;
		appendSec.innerHTML ="0" + + 0;
	}
}