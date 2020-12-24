var totalCount=0;
var champ;
var pull=[10];
var res;
var r;
var nl=0;
var hist="";
var curpulls="";
function readFile(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res= f.responseText;
                champ=res.split("\n");
            }
        }
    }
    f.send(null);
}
function read5Star(){
    readFile("https://djindevstuff.github.io/crystals/champsfive.txt");
}
function randomInt(min,max){
                return Math.floor(Math.random()*(max-min+1))+min;
}
function open1Crystal(n){
    for(var i=0;i<n;i++){
        r=randomInt(0,champ.length-1);
        totalCount+=1;
        hist=document.getElementById("showChamp").innerHTML;
        document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        champ[r]=champ[r].trim();
        document.getElementById("showChamp").innerHTML = champ[r];
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function open10Crystal(n){
    hist=document.getElementById("showChamp").innerHTML;
    document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
    for(var i=0;i<n;i++){
        r=randomInt(0,champ.length-1);
        totalCount+=1;
        champ[r]=champ[r].trim();
        curpulls = champ[r]+"<br>"+curpulls;
    }
    document.getElementById("showChamp").innerHTML=curpulls;
    curpulls="";
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
}