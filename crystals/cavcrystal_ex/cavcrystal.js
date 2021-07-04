var threeCavCount=0;
var fourCavCount=0;
var fiveCavCount=0;
var fiveNexCavCount=0;
var sixNexCavCount=0;
var sixCavCount=0;
var totalCavCount=0;
var addchmp;
var hist;
var x;
var champ;
var cloudinary="https://res.cloudinary.com/dtpybxseq/image/upload/pfp_mcoc/";
var git="https://djindevstuff.github.io/crystals/"

function openCavCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.006){
            sixNexCavCount+=1;
            var nexpoolsix = get3NexSixChamp();
            document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[0]+".png\"><img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[1]+".png\"><img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[2]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.006 && n<0.03){
            sixCavCount+=1;
            var sixchamp = getSixStarChamp();
            document.getElementById("showChamp").innerHTML="<img class=\"border\" src=\""+cloudinary+"frame6.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+sixchamp+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.03 && n<0.062){
            fiveNexCavCount+=1;
            var nexpoolsix = get3NexFiveChamp();
            document.getElementById("showChamp").innerHTML ="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[0]+".png\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[1]+".png\"><img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+nexpoolsix[2]+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.062 && n<0.19){
            fiveCavCount+=1;
            var fivechamp = getFiveStarChamp()
            document.getElementById("showChamp").innerHTML="<img class=\"border\" src=\""+cloudinary+"frame5.png\" width=\"72px\" height=\"60px\"><img class=\"fivestar\" src=\""+cloudinary+fivechamp+".png\"><br>"+document.getElementById("showChamp").innerHTML;
        }
        else if(n>=0.19 && n<0.5){
            fourCavCount+=1;
        }
        else{
            threeCavCount+=1;
        }
        totalCavCount=threeCavCount+fourCavCount+fiveCavCount+fiveNexCavCount+sixCavCount+sixNexCavCount;
    } 
    document.getElementById("countCavTotal").innerHTML = totalCavCount;
    document.getElementById("countCavThree").innerHTML = threeCavCount;
    document.getElementById("countCavFour").innerHTML = fourCavCount;
    document.getElementById("countCavFive").innerHTML = fiveCavCount;
    document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount;
    document.getElementById("countCavSix").innerHTML = sixCavCount;
    document.getElementById("countCavSixNex").innerHTML = sixNexCavCount;
}

function clearWindow(){
    totalCavCount=0;
    threeCavCount=0;
    fourCavCount=0;
    fiveCavCount=0;
    fiveNexCavCount=0;
    sixCavCount=0;
    sixNexCavCount=0;
    document.getElementById("countCavTotal").innerHTML = totalCavCount;
    document.getElementById("countCavThree").innerHTML = threeCavCount;
    document.getElementById("countCavFour").innerHTML = fourCavCount;
    document.getElementById("countCavFive").innerHTML = fiveCavCount;
    document.getElementById("countCavFiveNex").innerHTML = fiveNexCavCount;
    document.getElementById("countCavSix").innerHTML = sixCavCount;
    document.getElementById("countCavSixNex").innerHTML = sixNexCavCount;
    document.getElementById("showChamp").innerHTML="";
}