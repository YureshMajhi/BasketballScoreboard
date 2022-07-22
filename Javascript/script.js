let counthome = 0;
let countguest = 0;

let newcountHome = document.getElementById('count-home');
let newcountGuest = document.getElementById('count-guest');

let leadHome = document.getElementById('leadhome');

let leading = "leading";

function add1Home(){
    counthome += 1;
    newcountHome.textContent = counthome;
    
}
function add2Home(){
    counthome += 2;
    newcountHome.textContent = counthome;
    
}
function add3Home(){
    counthome += 3;
    newcountHome.textContent = counthome;
    
    
}


function add1Guest(){
    countguest += 1;
    newcountGuest.textContent = countguest;
    
}
function add2Guest(){
    countguest += 2;
    newcountGuest.textContent = countguest;
    
}
function add3Guest(){
    countguest += 3;
    newcountGuest.textContent = countguest;
    
}

function resetAll(){
    counthome = 0;
    countguest = 0;

    newcountHome.textContent = counthome;
    newcountGuest.textContent = countguest;
}