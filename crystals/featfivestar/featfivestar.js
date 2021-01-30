var totalCount=0;
var x=24;
var champ=[x];
var r;
var nl="";
var n;
var hist="";
var t;
function makeArray(){
    for(var i=1;i<=x;i++){
        champ[i]=i;
    }
    for(var i=1;i<=x;i++){
        t="<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+i+".png\"><span class=\"dot\" id=\"champ"+i+"\"></span>";
        document.getElementById("reveal_pool").innerHTML= t.concat(document.getElementById("reveal_pool").innerHTML);
    }
    for(var i=1;i<=x;i++){
        document.getElementById("champ"+i).style.display='none';
    }
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(p){
    document.getElementById("dispChamp").innerHTML="";
    for(var i=0;i<p;i++){
        nl="";
        r=randomInt(1,champ.length-1);
        totalCount+=1;
        nl=nl+r;
        n=Number(document.getElementById("champ"+nl).innerHTML);
        n+=1;
        document.getElementById("champ"+nl).style.display='';
        document.getElementById("champ"+nl).innerHTML=n;
        hist="<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+r+".png\" width=\"60px\" height=\"60px\">";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
    for(var i=1;i<=x;i++){
        document.getElementById("champ"+i).style.display='none';
        document.getElementById("champ"+i).innerHTML="";
    }
}
function addChamp(){
    document.getElementById("dispChamp").innerHTML=document.getElementById("dispChamp").innerHTML.concat("<img class=\"border\" src=\"../res/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"../res/Mister_Sinister.png\" width=\"60px\" height=\"60px\"><br>");
}