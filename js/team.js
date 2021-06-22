function showteams(){
    document.getElementById("teams").style.display="flex";
    document.getElementById("players").style.display="none";
    var team=document.getElementById("btnteams");
    var player=document.getElementById("btnplayers");
    if (!team.className.includes("active")){
        team.className += " active";
        player.className = player.className.replace(" active", "")
    }
}

function showplayers(){
    document.getElementById("teams").style.display="none";
    document.getElementById("players").style.display="flex";
    var team=document.getElementById("btnteams");
    var player=document.getElementById("btnplayers");
    if (!player.className.includes("active")){
        player.className += " active";
        team.className = team.className.replace(" active", "")
    }
}