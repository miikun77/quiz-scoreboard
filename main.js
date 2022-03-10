var correct = {cr1:'0', cr2:'0', cr3:'0'};

function minuscounter(){
    player = Math.round(event.target.id);
    correct['cr'+player]--;
    document.getElementById("correct"+ player).innerHTML = correct['cr'+player];
}

function pluscounter(){
    player = Math.round(event.target.id);
    correct['cr'+player]++;
    document.getElementById("correct"+ player).innerHTML = correct['cr'+player];
}