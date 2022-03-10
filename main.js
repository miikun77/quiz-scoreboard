var value = {v1:'0', v2:'0', v3:'0', v4:'0', v5:'0', v6:'0', v7:'0', v8:'0'};

function minuscounter(){
    player = Math.round(event.target.id);
    value['v'+player]--;
    document.getElementById("btn"+ player).innerHTML = value['v'+player];
}

function pluscounter(){
    player = Math.round(event.target.id);
    value['v'+player]++;
    document.getElementById("btn"+ player).innerHTML = value['v'+player];
}