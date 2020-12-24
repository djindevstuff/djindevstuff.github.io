var threeCount=0;
var fourCount=0;
var totalCount=0;
var r=0;
function openCrystal(n){
    for(var i=0;i<n;i++){
        r=Math.random();
        if(r>=0.0 && r<0.98){
            threeCount+=1;
        }
        else{
            fourCount+=1;
        }
        totalCount=threeCount+fourCount;
    }
    document.getElementById("countTotal").innerHTML = totalCount;
    document.getElementById("countThree").innerHTML = threeCount;
    document.getElementById("countFour").innerHTML = fourCount;
}
function clearWindow(){
    totalCount=0;
    threeCount=0;
    fourCount=0;
    document.getElementById("countTotal").innerHTML = totalCount;
    document.getElementById("countThree").innerHTML = threeCount;
    document.getElementById("countFour").innerHTML = fourCount;
}