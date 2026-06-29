let display = document.getElementById("display");

function add(value){
   display.value += value;
}

function equal(){
   display.value = eval(display.value);
}

function clearAll(){
   display.value = "";
}

function backspace(){
   display.value = display.value.slice(0,-1);
}
function changeBg(){
   document.body.style.backgroundImage = "url('Screenshot (340).png')";
}


function playSong(){
   document.getElementById("music").play();
}