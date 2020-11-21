var twoPhcCount=0;
var threePhcCount=0;
var fourPhcCount=0;
var fourNexPhcCount=0;
var totalPhcCount=0;
var r=0;
var addchmp;
function openPhCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.006){
            fourNexPhcCount+=1;
        }
        else if(n>=0.006 && n<0.03){
            fourPhcCount+=1;
            addchmp=getChamp(1);
            hist= document.getElementById("showChamp").innerHTML;
            document.getElementById("showChamp").innerHTML="4* "+addchmp+"<br>"+hist;
        }
        else if(n>=0.03 && n<0.23){
            threePhcCount+=1;
        }
        else{
            twoPhcCount+=1;
        }
        totalPhcCount=threePhcCount+fourPhcCount+fourNexPhcCount+twoPhcCount;
    }
    document.getElementById("countPhcTotal").innerHTML = totalPhcCount;
    document.getElementById("countPhcThree").innerHTML = threePhcCount;
    document.getElementById("countPhcFour").innerHTML = fourPhcCount;
    document.getElementById("countPhcFourNex").innerHTML = fourNexPhcCount;
    document.getElementById("countPhcTwo").innerHTML = twoPhcCount;
}
function clearWindow(){
    totalPhcCount=0;
    threePhcCount=0;
    fourPhcCount=0;
    fourNexPhcCount=0;
    twoPhcCount=0;
    document.getElementById("countPhcTotal").innerHTML = totalPhcCount;
    document.getElementById("countPhcThree").innerHTML = threePhcCount;
    document.getElementById("countPhcFour").innerHTML = fourPhcCount;
    document.getElementById("countPhcFourNex").innerHTML = fourNexPhcCount;
    document.getElementById("countPhcTwo").innerHTML = twoPhcCount;
    document.getElementById("showChamp").innerHTML="";
}