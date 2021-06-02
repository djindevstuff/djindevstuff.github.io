var totalCount=0;
var x=24;
var champ;
var r;
var nl="";
var n;
var hist="";
var t;
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/mcoc_pfp/";
var git="https://djindevstuff.github.io/crystals/";

function readFile(file){
    var f = new XMLHttpRequest();
    f.open("GET", file, true);
    f.onreadystatechange = function (){
        if(f.readyState === 4){
            if(f.status === 200 || f.status == 0){
                res= f.responseText;
                champ=res.split("\n");
                makeArray();
            }
        }
    }
    f.send(null);
}
function getname(){
    readFile(git+"pool/featfivepool.txt");
}
function makeArray(){
    for(var i=0;i<x;i++){
        t="<img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[i]+"\"><span class=\"dot\" id=\"champ"+i+"\">0</span>";
        document.getElementById("reveal_pool").innerHTML= t.concat(document.getElementById("reveal_pool").innerHTML);
    }
    for(var i=0;i<x;i++){
        //document.getElementById("champ"+i).style.display='none';
    }
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(p){
    document.getElementById("dispChamp").innerHTML="";
    for(var i=0;i<p;i++){
        nl="";
        r=randomInt(0,champ.length-1);
        totalCount+=1;
        nl=nl+r;
        n=Number(document.getElementById("champ"+nl).innerHTML);
        n+=1;
        document.getElementById("champ"+nl).style.display='';
        document.getElementById("champ"+nl).innerHTML=n;
        hist="<img class=\"border\" src=\""+git+"featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\" width=\"60px\" height=\"60px\">";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
    for(var i=0;i<x;i++){
        //document.getElementById("champ"+i).style.display='none';
        document.getElementById("champ"+i).innerHTML="0";
    }
}
function addChamp(){
    document.getElementById("dispChamp").innerHTML=document.getElementById("dispChamp").innerHTML.concat("<img class=\"border\" src=\"../res/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"../res/Mister_Sinister.png\" width=\"60px\" height=\"60px\"><br>");
}