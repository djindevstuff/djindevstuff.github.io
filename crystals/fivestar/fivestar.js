var totalCount=0;
var champ;
var res;
var r;
var hist="";
var curpulls="";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/mcoc_pfp/";
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
    readFile("https://djindevstuff.github.io/crystals/pool/fivestarbasic.txt");
}
function randomInt(min,max){
                return Math.floor(Math.random()*(max-min+1))+min;
}
function open1Crystal(n){
    document.getElementById("showChamp2").innerHTML ="";
    for(var i=0;i<n;i++){
        r=randomInt(0,champ.length-1);
        totalCount+=1;
        hist=document.getElementById("showChamp").innerHTML;
        //document.getElementById("showChamp2").innerHTML+="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\"><span class=\"dot\" id=\"champ"+r+"\">"+Number(document.getElementById("champ"+r).innerHTML)+"</span>";
        //curpulls="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\">";
        if(document.getElementById("champ"+r)== 'undefined' || document.getElementById("champ"+r)== null){
            document.getElementById("showChamp").innerHTML =hist+"<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\"><span class=\"dot\" id=\"champ"+r+"\">1</span>";
        }
        else{
            var newc=Number(document.getElementById("champ"+r).innerHTML);
            newc=newc+1;
            document.getElementById("champ"+r).innerHTML=newc;
            //document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\"><span class=\"dot\" id=\"champ"+r+"\">0</span"+hist;
        }
        document.getElementById("showChamp2").innerHTML+="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+champ[r]+"\">";
    }
    document.getElementById("countTotal").innerHTML = totalCount;
    //document.getElementById("showChamp2").innerHTML = curpulls;
    //curpulls="";
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