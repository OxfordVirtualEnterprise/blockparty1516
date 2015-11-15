function setDisplay(toNone, toBlock){
    document.getElementById(toNone).style.display="none";
    document.getElementById(toBlock).style.display="block";
}
function setBackground(element, value){
    document.getElementById(element).style.background=value;
}

var pages = ["size", "occasion", "theme", "add-ons", "payment"];
var progress = ["progress-size", "progress-occasion", "progress-theme", "progress-add-ons", "progress-payment"];
var completed = "#C8005A";
var incomplete = "#E00069";
var step = 0; //Referring to array index, not user viewed step

function next(){
    setDisplay(pages[step], pages[step+1]);
    setBackground(progress[step+1], completed);
    step++;
    document.getElementById("progress-bar").scrollIntoView();
}
function back(){
    setDisplay(pages[step], pages[step-1]);
    setBackground(progress[step], incomplete);
    step--;
    document.getElementById("progress-bar").scrollIntoView();
}