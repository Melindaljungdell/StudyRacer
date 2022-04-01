// Sparar tid i olika variabler
var miliSec = 00;
var sec = 00;
var min = 00;
// Hämtar vilka IDs som ska påverkas i HTML
var appendMin = document.getElementById("min");
var appendSec = document.getElementById("sec");
var appendMiliSec = document.getElementById("miliSec");
var pressToStart = document.getElementById("input");

let int = null;

// var totalTime = (min * 60) + sec;

//Om användaren trycker på någon tangent startar timern
document.getElementById('input').addEventListener('keydown', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(start_timer,10);
});

// Om användaren trycker på "Escape" så pausas timern
document.getElementById('input').addEventListener('keydown', (e)=>{
	if(e.key === "Escape"){
        clearInterval(int);

		//spara till json och skicka till python, ajax?
	}
});

function total_time(){
// Denna funktionen ska presentera tiden spenderad i racet på resultatsidan
	totalTime.innerHTML = "(min /"

};

function start_timer(){
// Funktion som räknar tid och ökar värden vid angivna gränser

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