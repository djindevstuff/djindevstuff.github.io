var threeGmCount=0;
var fourGmCount=0;
var fourNexGmCount=0;
var fiveGmCount=0;
var fiveNexGmCount=0;
var totalGmCount=0;
var addchmp;
function openGmCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.006){
            fiveNexGmCount+=1;
        }
        else if(n>=0.006 && n<0.03){
            fiveGmCount+=1;
            addchmp=getChamp(1);
            hist= document.getElementById("showChamp").innerHTML;
            document.getElementById("showChamp").innerHTML="5* "+addchmp+"<br>"+hist;
        }
        else if(n>=0.03 && n<0.06){
            fourNexGmCount+=1;
        }
        else if(n>=0.06 && n<0.18){
            fourGmCount+=1;
        }
        else{
            threeGmCount+=1;
        }
        totalGmCount=threeGmCount+fourGmCount+fourNexGmCount+fiveGmCount+fiveNexGmCount;
    }
    document.getElementById("countGmTotal").innerHTML = totalGmCount;
    document.getElementById("countGmThree").innerHTML = threeGmCount;
    document.getElementById("countGmFour").innerHTML = fourGmCount;
    document.getElementById("countGmFourNex").innerHTML = fourNexGmCount;
    document.getElementById("countGmFive").innerHTML = fiveGmCount;
    document.getElementById("countGmFiveNex").innerHTML = fiveNexGmCount;
}
function clearWindow(){
    totalGmCount=0;
    threeGmCount=0;
    fourGmCount=0;
    fourNexGmCount=0;
    fiveGmCount=0;
    fiveNexGmCount=0;
    document.getElementById("countGmTotal").innerHTML = totalGmCount;
    document.getElementById("countGmThree").innerHTML = threeGmCount;
    document.getElementById("countGmFour").innerHTML = fourGmCount;
    document.getElementById("countGmFourNex").innerHTML = fourNexGmCount;
    document.getElementById("countGmFive").innerHTML = fiveGmCount;
    document.getElementById("countGmFiveNex").innerHTML = fiveNexGmCount;
    document.getElementById("showChamp").innerHTML="";
}