var threeCavCount=0;
var fourCavCount=0;
var fiveCavCount=0;
var fiveNexCavCount=0;
var sixNexCavCount=0;
var sixCavCount=0;
var totalCavCount=0;
var addchmp;
var hist;
function openCavCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.002){
            sixNexCavCount+=1;
        }
        else if(n>=0.002 && n<0.01){
            sixCavCount+=1;
            addchmp=get6Champ(1);
            hist="<six>6* "+addchmp+"</six><br>";
            document.getElementById("showChamp").innerHTML= hist.concat(document.getElementById("showChamp").innerHTML);
        }
        else if(n>=0.01 && n<0.032){
            fiveNexCavCount+=1;
        }
        else if(n>=0.032 && n<0.12){
            fiveCavCount+=1;
            addchmp=get5Champ(1);
            hist="5* "+addchmp+"<br>";
            document.getElementById("showChamp").innerHTML= hist.concat(document.getElementById("showChamp").innerHTML);
        }
        else if(n>=0.12 && n<0.5){
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
