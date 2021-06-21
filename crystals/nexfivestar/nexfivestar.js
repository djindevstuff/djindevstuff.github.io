var totalCount=0;
var champ;
var champNex=[3];
var r=[3];
var res;
var hist="";
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git="https://djindevstuff.github.io/crystals/";


function openNexFiveCrystal(n){
    for(var i=0;i<n;i++){
        totalCount+=1;
        hist=document.getElementById("showChamp").innerHTML;
        document.getElementById("showChamp2").innerHTML=hist+"<br>"+document.getElementById("showChamp2").innerHTML;
        var nexchamp = get3NexFiveChamp();
        document.getElementById("showChamp").innerHTML = "<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexchamp[0]+".png\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexchamp[1]+".png\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexchamp[2]+".png\"><br>-------------------";
    }
    document.getElementById("countTotal").innerHTML = totalCount;
}

function clearWindow(){
    totalCount=0;
    document.getElementById("countTotal").innerHTML=0;
    document.getElementById("showChamp").innerHTML="";
    document.getElementById("showChamp2").innerHTML="";
}