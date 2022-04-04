// Sparar tid i olika variabler
var miliSec = 00;
var sec = 00;
var min = 00;
// Hämtar vilka IDs som ska påverkas i HTML
var appendMin = document.getElementById("min");
var appendSec = document.getElementById("sec");
var appendMiliSec = document.getElementById("miliSec");
var pressToStart = document.getElementById("input");
let appendTotalmin = document.getElementById("setMin");

let int = null;

// Retrieve the object from storage
let storeTotalMin = document.getElementById('appendMin');
let storeTotalSec = document.getElementById('appendSec');
let userMatches = document.getElementById('userMatches');

//localStorage.getItem('userMatches', JSON.stringify(userMatches));

let totalMin = localStorage.getItem('storeMin');
let totalSec = localStorage.getItem('storeSec');
let calculatedTime = totalMin * 60 + + totalSec;

let matches = localStorage.getItem('userMatches');




//let storeTotalMatches = document.getElementById('userMatches');

//let totalMatches = localStorage.getItem('userMatches');


//localStorage.setItem('userMatches', JSON.stringify(totalMatches));


console.log('Minuter: ', JSON.parse(totalMin));
console.log('Sekunder: ', JSON.parse(totalSec));

console.log('Tid: ', calculatedTime);

console.log('Matchningar: ', userMatches);

console.log('Matches: ', JSON.parse(matches));

console.log(typeof userMatches);



//Om användaren trycker på någon tangent startar timern
document.getElementById('input').addEventListener('keydown', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(start_timer, 10);
});

// Om användaren trycker på "Escape" så pausas timern
document.getElementById('input').addEventListener('keydown', (e)=>{
	if(e.key === "Escape"){
        clearInterval(int);

		// Put the object into storage
		localStorage.setItem('storeMin', JSON.stringify(storeTotalMin));
		localStorage.setItem('storeSec', JSON.stringify(storeTotalSec));

		//spara till json och skicka till python, ajax?
	}
});

function total_time(){
// Denna funktionen ska presentera tiden spenderad i racet på resultatsidan
	totalMin.innerHTML = localStorage.getItem('appendMin');

};

function start_timer(){
// Funktion som räknar tid och ökar värden vid angivna gränser

	miliSec ++;
	storeTotalMin = min;
	storeTotalSec = sec;

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
		min ++;
		appendMin.innerHTML = "0" + min;
		sec = 0;
		appendSec.innerHTML ="0" + + 0;
	}

	
}