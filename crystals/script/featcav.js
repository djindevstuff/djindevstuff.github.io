var threeCavCount=0;
var fthreeCavCount=0;
var fourCavCount=0;
var ffourCavCount=0;
var fiveCavCount=0;
var ffiveCavCount=0;
var fiveNexCavCount=0;
var sixNexCavCount=0;
var sixCavCount=0;
var fsixCavCount=0;
var totalCavCount=0;
var x;
var addchmp;
var hist;
function openCavCrystal(x){
    for(var i=0;i<x;i++){
        n=Math.random();
        if(n>=0.0 && n<0.003){
            sixNexCavCount+=1;
        }
        else if(n>=0.003 && n<0.015){
            if(n>=0.003 && n<0.004){
                fsixCavCount+=1;
                hist= document.getElementById("showChamp").innerHTML;
                document.getElementById("showChamp").innerHTML="<six>6* Featured!</six><br>"+hist;
            }
            else{
                addchmp=get6Champ(1);
                hist= document.getElementById("showChamp").innerHTML;
                document.getElementById("showChamp").innerHTML="<six>6* "+addchmp+"</six><br>"+hist;
            }
            sixCavCount+=1;
        }
        else if(n>=0.015 && n<0.05){
            fiveNexCavCount+=1;
        }
        else if(n>=0.05 && n<0.19){
            if(n>=0.05 && n<0.055){
                ffiveCavCount+=1;
                hist= document.getElementById("showChamp").innerHTML;
                document.getElementById("showChamp").innerHTML="<six>5* Featured!</six><br>"+hist;
            }
            else{
                addchmp=get5Champ(1);
                hist= document.getElementById("showChamp").innerHTML;
                document.getElementById("showChamp").innerHTML="5* "+addchmp+"<br>"+hist;
            }
            fiveCavCount+=1;
        }
        else if(n>=0.19 && n<0.55){
            if(n>=0.19 && n<0.21){
                ffourCavCount+=1;
                hist= document.getElementById("showChamp").innerHTML;
                document.getElementById("showChamp").innerHTML="<six>4* Featured!</six><br>"+hist;
            }
                fourCavCount+=1;
            }
            else{
                if(n>=0.55 && n<0.58){
                    fthreeCavCount+=1;
                    hist= document.getElementById("showChamp").innerHTML;
                    document.getElementById("showChamp").innerHTML="<six><feat>3* Featured!</feat></six><br>"+hist;
                }
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