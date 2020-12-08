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
    f.send(null);
    }
}
function read5Star(){
    readFile("feat5pool.txt");
}
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function openCrystal(n){
    for(var i=0;i<n;i++){
        r=randomInt(1,champ.length-1);
        totalCount+=1;
        hist="<img class=\"border\" src=\"https://djindevstuff.github.io/crystals/featfivepool/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"https://djindevstuff.github.io/crystals/featfivepool/"+r+".png\" width=\"60px\" height=\"60px\"><br>";
        document.getElementById("dispChamp").innerHTML= hist.concat(document.getElementById("dispChamp").innerHTML);
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}
function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("dispChamp").innerHTML="";
}
function addChamp(){
    document.getElementById("dispChamp").innerHTML=document.getElementById("dispChamp").innerHTML.concat("<img class=\"border\" src=\"../res/frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\"../res/Mister_Sinister.png\" width=\"60px\" height=\"60px\"><br>");
}